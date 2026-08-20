package com.derami.omni.domain.indicator.dto;

import com.derami.omni.domain.indicator.entity.Indicators;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class IndicatorsResponseDto {
    private String indicatorCode;
    private String indicatorName;
    private String country;
    private String updateCycle;
    private String unit;
    private Boolean isActive;

    // Entity를 DTO로 변환하는 정적 메서드
    public static IndicatorsResponseDto from(Indicators entity) {
        return IndicatorsResponseDto.builder()
                .indicatorCode(entity.getIndicatorCode())
                .indicatorName(entity.getIndicatorName())
                .unit(entity.getUnit())
                .country(entity.getCountry())
                .updateCycle(entity.getUpdateCycle())
                .isActive(entity.getIsActive())
                .build();
    }
}
