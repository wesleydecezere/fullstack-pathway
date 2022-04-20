package com.example.restdatajpaliquibase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.restdatajpaliquibase.model.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

}