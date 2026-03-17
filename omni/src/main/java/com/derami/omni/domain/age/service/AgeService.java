package com.derami.omni.domain.age.service;

import com.derami.omni.domain.age.dto.AgeRequest;
import com.derami.omni.domain.age.dto.AgeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.function.Function;
import java.util.function.Supplier;

@Service
@RequiredArgsConstructor
public class AgeService {
    private final List<AgeCalculatorStep> steps;
    private final BasicAgeFactory basicAgeFactory;

    public AgeResponse calculateAge(AgeRequest request){
        AgeResponse.AgeResponseBuilder builder = AgeResponse.builder();

        LocalDate birthDate = LocalDate.of(request.getYear(), request.getMonth(), request.getDay());
        builder.birthDate(birthDate.toString());

        Function<LocalDate, AgeResponse.BasicAge> getAge
                = (targetDate) -> basicAgeFactory.create(birthDate, targetDate);

        steps
//                .stream()
//                .filter(step -> step.shouldExecute(request))
                .forEach(step -> step.execute(request, builder, getAge));

        return builder.build();
    }


}
