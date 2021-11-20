package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

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

	@RequestMapping("/getAllAlien")
	public ModelAndView getAllAlien() {
		ModelAndView mv = new ModelAndView("show-alien");
		List<AlienModel> alien = StreamSupport
				.stream(repo.findAll().spliterator(), false)
				.collect(Collectors.toList());;

		mv.addObject("alien", alien);
		return mv;
	}

	@RequestMapping("/getAlienById")
	public ModelAndView getAlienById(@RequestParam int aid) {
		ModelAndView mv = new ModelAndView("show-alien");
		AlienModel alien = repo.findById(aid).orElse(new AlienModel());

		mv.addObject("alien", alien);
		return mv;
	}

	@RequestMapping("/getAlienByName")
	public ModelAndView getAlienByAge(@RequestParam String aname) {
		ModelAndView mv = new ModelAndView("show-alien");
		List<AlienModel> alien = repo.findAllByAnameSortedByAge(aname);

		mv.addObject("alien", alien);
		return mv;
	}

	@RequestMapping("/getAlienByAge")
	public ModelAndView getAlienByAge(@RequestParam int age) {
		ModelAndView mv = new ModelAndView("show-alien");
		List<AlienModel> alien = repo.findAllByAgeGreaterThan(age);

		mv.addObject("alien", alien);
		return mv;
	}
}