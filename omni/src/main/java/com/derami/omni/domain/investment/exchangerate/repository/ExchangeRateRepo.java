package com.derami.omni.domain.investment.exchangerate.repository;

import com.derami.omni.domain.investment.exchangerate.entity.ExchangeRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ExchangeRateRepo extends JpaRepository<ExchangeRate, Long> {
    @Query("select c from ExchangeRate c where c.type.id = :typeId")
    List<ExchangeRate> searchCurrencyValueById(@Param("typeId") Integer typeId);

    @Query("select c from ExchangeRate c where c.type.id = :typeId and c.valueDate between :fromDate and :toDate order by c.valueDate asc")
    List<ExchangeRate> searchCurrencyValueByDate(@Param("typeId") Integer typeId, @Param("fromDate") LocalDate fromDate, @Param("toDate") LocalDate toDate);
}
