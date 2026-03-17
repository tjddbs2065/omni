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
public class SchoolAgeStep implements AgeCalculatorStep {

    @Override
    public boolean shouldExecute(AgeRequest request) {
        return true;
    }

    @Override
    public void execute(AgeRequest request, AgeResponse.AgeResponseBuilder builder, Function<LocalDate, AgeResponse.BasicAge> ageProvider) {
        AgeResponse.BasicAge elementary = ageProvider.apply(LocalDate.of(request.getYear() + 7, 3, 1));
        AgeResponse.BasicAge middle = ageProvider.apply(LocalDate.of(request.getYear() + 13, 3, 1));
        AgeResponse.BasicAge high = ageProvider.apply(LocalDate.of(request.getYear() + 16, 3, 1));
        AgeResponse.BasicAge university = ageProvider.apply(LocalDate.of(request.getYear() + 19, 3, 1));

        AgeResponse.SchoolEntryAge schoolAge = AgeResponse.SchoolEntryAge.builder()
                .elementary(elementary)
                .middle(middle)
                .high(high)
                .university(university)
                .build();

        builder.schoolAge(schoolAge);
    }

}
