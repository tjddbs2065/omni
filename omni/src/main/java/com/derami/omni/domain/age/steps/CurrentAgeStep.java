package com.derami.omni.domain.age.steps;

import com.derami.omni.domain.age.dto.AgeRequest;
import com.derami.omni.domain.age.dto.AgeResponse;
import com.derami.omni.domain.age.service.AgeCalculatorStep;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.Period;
import java.time.temporal.ChronoUnit;
import java.util.function.Function;

@Component
public class CurrentAgeStep implements AgeCalculatorStep {

    @Override
    public boolean shouldExecute(AgeRequest request) {
        return true;
    }

    @Override
    public void execute(AgeRequest request, AgeResponse.AgeResponseBuilder builder, Function<LocalDate, AgeResponse.BasicAge> ageProvider) {
        LocalDate now = LocalDate.now();

        AgeResponse.CurrentAge currentAge = AgeResponse.CurrentAge.builder()
                .currentAge(ageProvider.apply(now))
                .build();

        builder.currentAge(currentAge);
    }
}
