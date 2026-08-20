package com.derami.omni.domain.sync.scheduler;

import com.derami.omni.domain.sync.service.DataSyncService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BatchScheduler {
    private final DataSyncService syncService;

    // 매일
//    @Scheduled(cron = "0 0 6 * * ?")
//    public void dailyFetchTask(){
//    }

    // 매주
//    @Scheduled(cron = "0 0 6 * * ?")
//    public void weeklyFetchTask(){
//    }

    // 매월
    @Scheduled(cron = "0 0 6 1 * ?")
//    @Scheduled(fixedDelay = 6000)
    public void monthlyFetchTask(){
        System.out.println("데이터 업데이트 실행");
        syncService.fetchFredData("US_CPI_HEADLINE_SA", "CPIAUCSL");
        syncService.fetchFredData("US_CPI_CORE_SA", "CPILFESL");
        syncService.fetchFredData("US_PCE_CORE_SA", "PCEPILFE");
        syncService.fetchFredData("US_PPI_FINAL_SA", "PPIFIS");
    }

    // 매분기
    @Scheduled(cron = "0 0 6 * * ?")
    public void quarterlyFetchTask(){
    }
//
//    private void fetchUsCpi(){
//        System.out.println("CPI 데이터 수집 실행");
//        syncService.fetchFredData("US_PCE_CORE_SA", "CPIAUCSL");
//    }
}
