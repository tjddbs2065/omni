package com.derami.omni.domain.investment.exchangerate.repository;

import com.derami.omni.domain.investment.exchangerate.entity.Currency;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyRepo extends JpaRepository<Currency, Integer> {
}
