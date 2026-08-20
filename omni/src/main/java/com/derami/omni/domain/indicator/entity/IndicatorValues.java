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
public class IndicatorValues {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "indicator_code", length = 50)
    private String indicatorCode;
    private LocalDate baseDate;
    private Double value;

    private LocalDate updatedAt;
}
