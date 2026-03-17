package com.derami.omni.domain.age.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
public class AgeRequest {
    int year;
    int month;
    int day;

    String gender;
}
