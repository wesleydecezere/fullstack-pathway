package com.example.restjpa.model;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseDAO extends JpaRepository<CourseModel, String> {
	Optional<CourseModel> findById(int id);

	void deleteById(int id);
}
