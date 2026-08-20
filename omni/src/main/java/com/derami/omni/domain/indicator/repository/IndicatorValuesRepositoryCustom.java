package com.derami.omni.domain.indicator.repository;

import com.derami.omni.domain.indicator.dto.IndicatorValuesDto;

import java.util.List;

public interface IndicatorValuesRepositoryCustom {
    void upsertAll(List<IndicatorValuesDto> dataList);
}
