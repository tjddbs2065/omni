package com.derami.omni.domain.sync.service;

import com.derami.omni.domain.sync.client.FredApiService;
import com.derami.omni.domain.sync.dto.FredResponseDto;
import com.derami.omni.domain.indicator.dto.IndicatorValuesDto;
import com.derami.omni.domain.indicator.repository.IndicatorValuesRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DataSyncService {
    private final FredApiService fredApiClient;
    private final IndicatorValuesRepository indicatorValuesRepo;

    @Transactional
    public void fetchFredData(String indicatorCode, String seriesId){
        FredResponseDto response = fredApiClient.getSeriesData(seriesId);

        List<FredResponseDto.ObservationDto> observationNode = response.getObservations();

        if(!observationNode.isEmpty()){
            List<IndicatorValuesDto> dtoList = new ArrayList<>();
            for (FredResponseDto.ObservationDto item : observationNode){
                LocalDate baseDate = LocalDate.parse(item.getDate()); // "1947-01-01" -> LocalDate
                Double value = item.getParsedValue();

                dtoList.add(new IndicatorValuesDto(
                        indicatorCode,
                        baseDate,
                        value
                ));
            }

            indicatorValuesRepo.upsertAll(dtoList);
        }
    }

//    @Transactional
//    public void fetchHeadlineCpiData() {
//        FredResponseDto response = fredApiClient.getSeriesData("CPIAUCSL");
//
//        List<FredResponseDto.ObservationDto> observationNode = response.getObservations();
//
//        if(!observationNode.isEmpty()){
//            List<IndicatorValuesDto> dtoList = new ArrayList<>();
//            for (FredResponseDto.ObservationDto item : observationNode){
//                LocalDate baseDate = LocalDate.parse(item.getDate()); // "1947-01-01" -> LocalDate
//                Double value = item.getParsedValue();
//
//                dtoList.add(new IndicatorValuesDto(
//                        "US_CPI_HEADLINE_SA",
//                        baseDate,
//                        value
//                ));
//            }
//
//            indicatorValuesRepo.upsertAll(dtoList);
//        }
//    }
}
