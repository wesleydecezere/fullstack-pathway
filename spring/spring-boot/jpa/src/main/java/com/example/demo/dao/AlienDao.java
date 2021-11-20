package com.example.demo.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.AlienModel;

public interface AlienDao extends CrudRepository<AlienModel, Integer> {

}
