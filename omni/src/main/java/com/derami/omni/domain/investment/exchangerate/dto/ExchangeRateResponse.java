package com.derami.omni.domain.investment.exchangerate.dto;

import com.derami.omni.domain.investment.exchangerate.entity.ExchangeRate;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ExchangeRateResponse {
    private Double value;
    private LocalDate date;

    public ExchangeRateResponse(ExchangeRate exchangeRate){
        this.value = Double.parseDouble(exchangeRate.getDataValue());
        this.date = exchangeRate.getValueDate();
    }
}
