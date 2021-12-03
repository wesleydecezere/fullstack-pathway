package com.example.restjpaliquibase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.restjpaliquibase.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
