package com.derami.omni.domain.indicator.repository;

import com.derami.omni.domain.indicator.dto.IndicatorValuesDto;
import com.derami.omni.domain.indicator.entity.IndicatorValues;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface IndicatorValuesRepository extends JpaRepository<IndicatorValues, Long>, IndicatorValuesRepositoryCustom {
    public List<IndicatorValuesDto> findAllByIndicatorCodeAndBaseDateBetween(String indicatorCode, LocalDate startDate, LocalDate endDate);
}
