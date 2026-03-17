package com.derami.omni.domain.age.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AgeResponse {
    String birthDate;
    CurrentAge currentAge;
    SchoolEntryAge schoolAge;
    MilitaryAge militaryAge;

    @Data @Builder
    public static class BasicAge{
        int internationalAge;
        int koreanAge;
        long daysAlive;
        LocalDate targetDate;
    }
    @Data @Builder
    public static class CurrentAge{
        BasicAge currentAge;
    }
    @Data @Builder
    public static class SchoolEntryAge{
        BasicAge elementary;
        BasicAge middle;
        BasicAge high;
        BasicAge university;
    }
    @Data @Builder
    public static class MilitaryAge{
        BasicAge militaryAge;
    }
}
