package com.example.demo.model;

import java.util.UUID;

import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Person {
	private final UUID id;
	@NonNull
	private final String name;

	public Person(
			@JsonProperty("id") UUID id,
			@JsonProperty("name") String name)
	{
		this.id = id;
		this.name = name;
	}

	public UUID getId() {
		return id;
	}

	public String getName() {
		return name;
	}
}
