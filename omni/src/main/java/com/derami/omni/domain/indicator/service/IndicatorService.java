package com.derami.omni.domain.indicator.service;

import com.derami.omni.domain.indicator.dto.IndicatorValuesDto;
import com.derami.omni.domain.indicator.dto.IndicatorsResponseDto;
import com.derami.omni.domain.indicator.entity.Indicators;
import com.derami.omni.domain.indicator.repository.IndicatorRepository;
import com.derami.omni.domain.indicator.repository.IndicatorValuesRepository;
import com.derami.omni.global.DateForm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class IndicatorService {
    private final IndicatorRepository indicatorRepository;
    private final IndicatorValuesRepository indicatorValuesRepository;
    private final DateForm dateForm;

    public List<IndicatorsResponseDto> getAllIndicators(){
        List<Indicators> entities = indicatorRepository.findAll();

        return entities.stream()
                .map(IndicatorsResponseDto::from)
                .toList();
    }
    public IndicatorsResponseDto getIndicator(String indicatorCode){

        return IndicatorsResponseDto.from(indicatorRepository.findByIndicatorCode(indicatorCode));
    }

    public List<IndicatorValuesDto> getIndicatorValues(String indicatorCode, LocalDate startDate, LocalDate endDate){
        if (startDate == null || endDate == null) {
            startDate = dateForm.getYesterdayLocalDate(); // LocalDate 반환하도록 유틸 메서드 수정 추천
            endDate = dateForm.getTodayLocalDate();
        }

        return indicatorValuesRepository.findAllByIndicatorCodeAndBaseDateBetween(indicatorCode, startDate, endDate);
    }





    public List<IndicatorValuesDto> getHeadlineCpi(LocalDate startDate, LocalDate endDate){
        return indicatorValuesRepository.findAllByIndicatorCodeAndBaseDateBetween("US_CPI_HEADLINE_SA", startDate, endDate);
    }
    public List<IndicatorValuesDto> getCoreCpi(LocalDate startDate, LocalDate endDate){
        return indicatorValuesRepository.findAllByIndicatorCodeAndBaseDateBetween("US_CPI_CORE_SA", startDate, endDate);
    }
    public List<IndicatorValuesDto> getCorePce(LocalDate startDate, LocalDate endDate){
        return indicatorValuesRepository.findAllByIndicatorCodeAndBaseDateBetween("US_PCE_CORE_SA", startDate, endDate);
    }
    public List<IndicatorValuesDto> getFinalPpi(LocalDate startDate, LocalDate endDate){
        return indicatorValuesRepository.findAllByIndicatorCodeAndBaseDateBetween("US_PPI_FINAL_SA", startDate, endDate);
    }
}
