package com.derami.omni.domain.age.service;

import com.derami.omni.domain.age.dto.AgeResponse;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.Period;
import java.time.temporal.ChronoUnit;

@Component
public class BasicAgeFactory {
    public AgeResponse.BasicAge create(LocalDate birthDate, LocalDate targetDate){
        int internationalAge = Period.between(birthDate, targetDate).getYears();
        int koreanAge = targetDate.getYear() - birthDate.getYear() + 1;
        long daysAlive = ChronoUnit.DAYS.between(birthDate, targetDate);

        return AgeResponse.BasicAge.builder()
                .koreanAge(koreanAge)
                .internationalAge(internationalAge)
                .daysAlive(daysAlive)
                .targetDate(targetDate)
                .build();
    }
}
