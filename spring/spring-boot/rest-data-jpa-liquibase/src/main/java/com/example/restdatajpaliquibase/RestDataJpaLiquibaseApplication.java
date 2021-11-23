package com.example.restdatajpaliquibase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

@SpringBootApplication
@EntityScan(basePackageClasses = {RestDataJpaLiquibaseApplication.class, Jsr310JpaConverters.class})
public class RestDataJpaLiquibaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestDataJpaLiquibaseApplication.class, args);
	}

}
