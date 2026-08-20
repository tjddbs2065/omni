package com.derami.omni.domain.indicator.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Indicators {
    @Id
    @Column(name = "indicator_code", length = 50)
    private String indicatorCode;

    private String indicatorName;
    private String country;
    private String sourceApi;
    private String sourceCode;
    private String updateCycle;
    private String unit;
    private Boolean isActive;
    private LocalDate createdAt;
    private LocalDate updatedAt;
}
