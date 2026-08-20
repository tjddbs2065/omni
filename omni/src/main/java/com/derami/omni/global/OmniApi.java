package com.derami.omni.global;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class OmniApi {
    private final RestClient restClient;

    public OmniApi(){
        restClient = RestClient.create();
    }

    public String get(String url){
        return restClient.get()
                .uri(url)
                .retrieve()
                .body(String.class);
    }
}
