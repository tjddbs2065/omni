package com.derami.omni.domain.investment.exchangerate.controller;

import com.derami.omni.domain.investment.exchangerate.dto.ExchangeRateResponse;
import com.derami.omni.domain.investment.exchangerate.dto.CurrencyResponse;
import com.derami.omni.domain.investment.exchangerate.repository.CurrencyRepo;
import com.derami.omni.domain.investment.exchangerate.repository.ExchangeRateRepo;
import com.derami.omni.domain.investment.exchangerate.entity.Currency;
import com.derami.omni.domain.investment.exchangerate.entity.ExchangeRate;
import com.derami.omni.global.DateForm;
import com.derami.omni.global.OmniApi;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/investment")
@RequiredArgsConstructor
public class ExchangeRateController {
    private final OmniApi omniApi;
    private final ExchangeRateRepo exchangeRateRepo;
    private final CurrencyRepo currencyRepo;
    private final DateForm dateForm;

    // 통화 목록
    @GetMapping("/CurrencyList")
    public ResponseEntity<List<CurrencyResponse>> getCurrencyList(){
        List<Currency> entities = currencyRepo.findAll();

        List<CurrencyResponse> typeResponse = entities.stream()
                .map(CurrencyResponse::new)
                .toList();

        return ResponseEntity.ok(typeResponse);
    }

    // 환율 정보
    @GetMapping("/ExchangeRates")
    public ResponseEntity<List<ExchangeRateResponse>> getExchangeRates(
            @RequestParam("typeId") Integer typeId,
            @RequestParam(value="fromDate", required = false) String fromDate,
            @RequestParam(value="toDate", required = false) String toDate
    ){

        String today = dateForm.getToday();
        String yesterday = dateForm.getYesterday();

        fromDate  = (fromDate == null) ? yesterday : fromDate;
        toDate  = (toDate == null) ? today : toDate;

        List<ExchangeRate> entities = exchangeRateRepo.searchCurrencyValueByDate(
                typeId,
                LocalDate.parse(fromDate, dateForm.getDefaultFormat()),
                LocalDate.parse(toDate, dateForm.getDefaultFormat())
        );

        List<ExchangeRateResponse> infoResponse = entities.stream()
                .map(ExchangeRateResponse::new)
                .toList();

        return ResponseEntity.ok(infoResponse);
    }
}
