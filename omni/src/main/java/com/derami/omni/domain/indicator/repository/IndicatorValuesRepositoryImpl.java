package com.derami.omni.domain.indicator.repository;

import com.derami.omni.domain.indicator.dto.IndicatorValuesDto;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.jspecify.annotations.NonNull;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class IndicatorValuesRepositoryImpl implements IndicatorValuesRepositoryCustom {
    private final JdbcTemplate jdbcTemplate;

    @Override
    @Transactional
    public void upsertAll(List<IndicatorValuesDto> dataList){
        String sql = """
                INSERT INTO indicator_values (indicator_code, base_date, value, updated_at)
                VALUES (?, ?, ?, NOW())
                ON DUPLICATE KEY
                UPDATE
                    value = VALUES(value),
                    updated_at = NOW()
                """;
        jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {
            @Override
            public void setValues(@NonNull PreparedStatement ps, int i) throws SQLException {
                IndicatorValuesDto dto = dataList.get(i);
                ps.setString(1, dto.indicatorCode());
                ps.setDate(2, Date.valueOf(dto.baseDate()));

                // value는 null이 될 수 있다.
                if(dto.value() != null){
                    ps.setDouble(3, dto.value());
                }else{
                    ps.setNull(3, Types.DOUBLE);
                }
            }

            @Override
            public int getBatchSize() {
                return dataList.size();
            }
        });
    }
}
