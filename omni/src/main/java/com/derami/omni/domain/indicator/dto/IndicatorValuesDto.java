package com.derami.omni.domain.indicator.dto;

import java.time.LocalDate;

public record IndicatorValuesDto (
    String indicatorCode,
    LocalDate baseDate,
    Double value
){}
