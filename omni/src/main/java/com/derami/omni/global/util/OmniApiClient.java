package com.derami.omni.global.util;

import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@Component
public class OmniApiClient {
    private final RestClient restClient;

    public OmniApiClient(RestClient.Builder restClientBuilder){
        this.restClient = restClientBuilder.build();
    }

    /**
     * 공통 GET 요청 메서드
     * @param baseUrl API 도메인 (예: https://api.stlouisfed.org)
     * @param path API 엔드포인트 경로 (예: /fred/series/observations)
     * @param queryParams 쿼리 스트링 파라미터 맵
     * @param responseType 반환받을 DTO 클래스 타입 (Class<T>)
     */
    public <T> T get(String baseUrl, String path, MultiValueMap<String, String> queryParams, Class<T> responseType){
        URI uri = UriComponentsBuilder.fromUriString(baseUrl)
                .path(path)
                .queryParams(queryParams)
                .build()
                .toUri();

        return restClient.get()
                .uri(uri)
                .retrieve()
                .onStatus(status -> status.is4xxClientError() || status.is5xxServerError(), (req, res) -> {
                    throw new RuntimeException("API 호출 실패: " + res.getStatusCode());
                })
                .body(responseType);
    }
}
