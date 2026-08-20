package com.derami.omni.domain.investment.interestrate.repository;

import com.derami.omni.domain.investment.exchangerate.entity.ExchangeRate;
import com.derami.omni.domain.investment.interestrate.entity.BaseRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface BaseRateRepo extends JpaRepository<BaseRate, Long> {
    @Query("select b from BaseRate b where b.valueDate between :fromDate and :toDate order by b.valueDate asc")
    List<BaseRate> searchBaseRateValueByDate(@Param("fromDate") LocalDate fromDate, @Param("toDate") LocalDate toDate);
}
