package com.derami.omni.domain.investment.interestrate.dto;

import com.derami.omni.domain.investment.exchangerate.entity.ExchangeRate;
import com.derami.omni.domain.investment.interestrate.entity.BaseRate;
import lombok.Data;

import java.time.LocalDate;

@Data
public class BaseRateResponse {
    private Double value;
    private LocalDate date;

    public BaseRateResponse(BaseRate baseRate){
        this.value = Double.parseDouble(baseRate.getDataValue());
        this.date = baseRate.getValueDate();
    }
}
