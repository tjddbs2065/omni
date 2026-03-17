package com.derami.omni.domain.age.service;

import com.derami.omni.domain.age.dto.AgeRequest;
import com.derami.omni.domain.age.dto.AgeResponse;

import java.time.LocalDate;
import java.util.function.Function;

public interface AgeCalculatorStep {
    boolean shouldExecute(AgeRequest request);

    void execute(
            AgeRequest request,
            AgeResponse.AgeResponseBuilder builder,
            Function<LocalDate, AgeResponse.BasicAge> ageProvider
    );
}
