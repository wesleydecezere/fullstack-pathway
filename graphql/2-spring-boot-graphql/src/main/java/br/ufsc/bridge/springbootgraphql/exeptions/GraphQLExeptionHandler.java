package br.ufsc.bridge.springbootgraphql.exeptions;

import javax.validation.ConstraintViolationException;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ExceptionHandler;

import graphql.GraphQLException;
import graphql.kickstart.spring.error.ThrowableGraphQLError;

@Component
public class GraphQLExeptionHandler {

	@ExceptionHandler({ GraphQLException.class,  ConstraintViolationException.class})
	public ThrowableGraphQLError handle(Exception e) {
		return new ThrowableGraphQLError(e);
	}

	@ExceptionHandler(RuntimeException.class)
	public ThrowableGraphQLError handle(RuntimeException e) {
		return new ThrowableGraphQLError(e, "Internal Server Error");
	}

}
