package com.example.restjpa.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.restjpa.model.CourseDAO;
import com.example.restjpa.model.CourseModel;

@RestController
public class CourseController {
	@Autowired
	private CourseDAO repository;

	@GetMapping("/courses")
	public List<CourseModel> getCourses() {
		return repository.findAll();
	}

	@GetMapping("/course/{id}")
	public CourseModel getCourseById(@NonNull @PathVariable("id") int id) {
		return repository.findById(id).orElse(null);
	}

	@PostMapping("/course")
	public void addCourse(@RequestBody CourseModel newCourse) {
		repository.save(newCourse);
	}

	@PutMapping("/course")
	public void addOrUpdateCourse(@RequestBody CourseModel newCourse) {
		repository.save(newCourse);
	}

	@DeleteMapping("/course/{id}")
	public void deleteCourse(@PathVariable int id) {
		CourseModel course = repository.findById(id).orElse(new CourseModel());
		repository.delete(course);
	}
}
