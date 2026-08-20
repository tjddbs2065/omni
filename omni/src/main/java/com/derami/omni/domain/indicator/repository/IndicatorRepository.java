package com.derami.omni.domain.indicator.repository;

import com.derami.omni.domain.indicator.entity.Indicators;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IndicatorRepository extends JpaRepository<Indicators, Long> {
    public Indicators findByIndicatorCode(String indicatorCode);
}
