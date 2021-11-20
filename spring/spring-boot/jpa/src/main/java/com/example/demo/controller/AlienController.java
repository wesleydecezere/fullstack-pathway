package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.dao.AlienDao;
import com.example.demo.model.AlienModel;

@Controller
public class AlienController {
	@Autowired
	AlienDao repo;

	@GetMapping("/")
	public String getHomePage() {
		return "home";
	}

	@RequestMapping("/rmAlien")
	public String rmAlien(@NonNull AlienModel alien) {
		AlienModel foundAlien = repo.findById(alien.getAid()).orElse(null);
		repo.delete(foundAlien);
		return  "home";
	}

	@RequestMapping("/addAlien")
	public String addAlien(AlienModel alien) {
		repo.save(alien);
		return "home";
	}
}