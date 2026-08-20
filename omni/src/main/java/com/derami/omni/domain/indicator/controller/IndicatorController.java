package com.derami.omni.domain.indicator.controller;

import com.derami.omni.domain.indicator.dto.IndicatorValuesDto;
import com.derami.omni.domain.indicator.dto.IndicatorsResponseDto;
import com.derami.omni.domain.indicator.entity.Indicators;
import com.derami.omni.domain.indicator.service.IndicatorService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
//@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/indicators")
@RequiredArgsConstructor
public class IndicatorController {
    private final IndicatorService indicatorService;

    // 1. 전체 지표 메타 목록 조회 (GET /api/indicators)
    @GetMapping
    public ResponseEntity<List<IndicatorsResponseDto>> getAllIndicators() {
        return ResponseEntity.ok(indicatorService.getAllIndicators());
    }

    // 2. 특정 지표 메타 정보 조회 (GET /api/indicators/US_CPI_HEADLINE_SA)
    @GetMapping("/{indicatorCode}")
    public ResponseEntity<IndicatorsResponseDto> getIndicator(
            @PathVariable("indicatorCode") String indicatorCode
    ) {
        return ResponseEntity.ok(indicatorService.getIndicator(indicatorCode));
    }

    @GetMapping("/{indicatorCode}/values")
    public ResponseEntity<List<IndicatorValuesDto>> getIndicatorValues(
            @PathVariable("indicatorCode") String indicatorCode,
            @RequestParam(value = "startDate", required = false) @DateTimeFormat(pattern = "yyyyMMdd") LocalDate startDate,
            @RequestParam(value = "endDate", required = false) @DateTimeFormat(pattern = "yyyyMMdd") LocalDate endDate
    ) {
        return ResponseEntity.ok(indicatorService.getIndicatorValues(indicatorCode, startDate, endDate));
    }
}
