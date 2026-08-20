package com.derami.omni.domain.investment.interestrate.controller;

import com.derami.omni.domain.investment.interestrate.dto.BaseRateResponse;
import com.derami.omni.domain.investment.interestrate.entity.BaseRate;
import com.derami.omni.domain.investment.interestrate.repository.BaseRateRepo;
import com.derami.omni.global.DateForm;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@Tag(name = "User API", description = "회원 관리 및 조회 관련 API")
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/investment")
@RequiredArgsConstructor
public class InterestRateController {
    private final BaseRateRepo baseRateRepo;
    private final DateForm dateForm;

    @Operation(summary = "기준금리 조회", description = "지정한 기간 내의 기준금리 데이터를 조회합니다.")
    @GetMapping("/BaseRates")
    public ResponseEntity<List<BaseRateResponse>> getBaseRates(
            @RequestParam(value="fromDate", required = false) String fromDate,
            @RequestParam(value="toDate", required = false) String toDate
    ){
        String today = dateForm.getToday();
        String yesterday = dateForm.getYesterday();

        fromDate  = (fromDate == null) ? yesterday : fromDate;
        toDate  = (toDate == null) ? today : toDate;

        List<BaseRate> entities = baseRateRepo.searchBaseRateValueByDate(
                LocalDate.parse(fromDate, dateForm.getDefaultFormat()),
                LocalDate.parse(toDate, dateForm.getDefaultFormat())
        );

        List<BaseRateResponse> baseRateResponse =  entities.stream()
                .map(BaseRateResponse::new)
                .toList();

        return ResponseEntity.ok(baseRateResponse);
    }

}
