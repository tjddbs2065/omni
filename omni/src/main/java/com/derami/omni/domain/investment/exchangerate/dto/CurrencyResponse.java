package com.derami.omni.domain.investment.exchangerate.dto;

import com.derami.omni.domain.investment.exchangerate.entity.Currency;
import lombok.Data;

@Data
public class CurrencyResponse {
    private Integer id;
    private String nation;

    public CurrencyResponse(Currency currency){
        this.id = currency.getId();
        this.nation = currency.getNation();
    }
}
