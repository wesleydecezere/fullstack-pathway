package br.ufsc.bridge.springbootgraphql.exeptions;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ExceptionHandler;

import graphql.GraphQLException;
import graphql.kickstart.spring.error.ThrowableGraphQLError;

@Component
public class GraphQLExeptionHandler {

	@ExceptionHandler(GraphQLException.class)
	public ThrowableGraphQLError handle(GraphQLException e) {
		return new ThrowableGraphQLError(e);
	}

	// to handle errors from other sources, like Spring or Hibernate
	@ExceptionHandler(RuntimeException.class)
	public ThrowableGraphQLError handle(RuntimeException e) {
		return new ThrowableGraphQLError(e, "Internal Server Error");
	}

}
