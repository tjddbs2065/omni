package com.derami.omni.global;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Component
@Data
public class DateForm {
    private DateTimeFormatter defaultFormat;
    private String today;
    private String yesterday;
    private LocalDate todayLocalDate;
    private LocalDate yesterdayLocalDate;

    public DateForm(){
        this.defaultFormat = DateTimeFormatter.ofPattern("yyyyMMdd");
        this.today = LocalDate.now().format(defaultFormat);
        this.yesterday = LocalDate.now().minusDays(1).format(defaultFormat);
        this.todayLocalDate = LocalDate.now();
        this.yesterdayLocalDate = LocalDate.now().minusDays(1);
    }
}
