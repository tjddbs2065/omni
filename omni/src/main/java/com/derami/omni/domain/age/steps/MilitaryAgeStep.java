package com.derami.omni.domain.age.steps;

import com.derami.omni.domain.age.dto.AgeRequest;
import com.derami.omni.domain.age.dto.AgeResponse;
import com.derami.omni.domain.age.service.AgeCalculatorStep;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.function.Function;

@Component
public class MilitaryAgeStep implements AgeCalculatorStep {
    @Override
    public boolean shouldExecute(AgeRequest request) {
        return request.getGender().equalsIgnoreCase("MALE");
    }

    @Override
    public void execute(AgeRequest request, AgeResponse.AgeResponseBuilder builder, Function<LocalDate, AgeResponse.BasicAge> ageProvider) {

        AgeResponse.MilitaryAge militaryAge
                = AgeResponse.MilitaryAge.builder()
                        .militaryAge(ageProvider.apply(LocalDate.of(request.getYear()+19, 1, 1)))
                        .build();

        builder.militaryAge(militaryAge);
    }

}
