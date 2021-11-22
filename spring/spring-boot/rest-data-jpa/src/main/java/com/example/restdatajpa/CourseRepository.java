package com.example.restdatajpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.restdatajpa.model.CourseModel;

@RepositoryRestResource(collectionResourceRel = "course", path = "course")
public interface CourseRepository extends JpaRepository<CourseModel, Long> { }
