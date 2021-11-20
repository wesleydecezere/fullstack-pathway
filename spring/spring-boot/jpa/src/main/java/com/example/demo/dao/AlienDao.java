package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.AlienModel;

public interface AlienDao extends CrudRepository<AlienModel, Integer> {
	List<AlienModel> findAllByAgeGreaterThan(int age);

	@Query(value = "SELECT * FROM alien_model WHERE aname=? ORDER BY age DESC", nativeQuery = true)
	List<AlienModel> findAllByAnameSortedByAge(String aname);
}
