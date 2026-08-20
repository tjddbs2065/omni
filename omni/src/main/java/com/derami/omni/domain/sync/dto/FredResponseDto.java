package com.derami.omni.domain.sync.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class FredResponseDto {
    private String units;
    private Integer count;
    private List<ObservationDto> observations;

    @Getter
    @NoArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class ObservationDto{
        private String date;
        private String value;

        // DB에 데이터 저장 시 .인 경우 null을 반환
        public Double getParsedValue(){
            if (value == null || ".".equals(value.trim())) {
                return null;
            }

            try {
                return Double.parseDouble(value);
            }
            catch (NumberFormatException e){
                return null;
            }
        }
    }
}
