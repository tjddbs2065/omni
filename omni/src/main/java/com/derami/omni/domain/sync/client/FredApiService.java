package com.derami.omni.domain.sync.client;

import com.derami.omni.domain.sync.dto.FredResponseDto;
import com.derami.omni.global.OmniApi;
import com.derami.omni.global.util.OmniApiClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

@Service
@RequiredArgsConstructor
public class FredApiService {
    private final OmniApiClient apiClient;
    private static final String BASE_URL = "https://api.stlouisfed.org";
    private static final String API_KEY = "b0cbcc15f426223332048cf67649b60c";


    public FredResponseDto getSeriesData(String seriesId){
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("series_id", seriesId);
        params.add("api_key", API_KEY);
        params.add("file_type", "json");

        return apiClient.get(
                BASE_URL,
                "/fred/series/observations",
                params,
                FredResponseDto.class
        );
    }
}
