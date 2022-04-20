package com.example.restjpaliquibase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.restjpaliquibase.model.Purchase;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
}
