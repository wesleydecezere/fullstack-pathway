package br.ufsc.bridge.springbootgraphql.exeptions;

import java.util.List;

import org.springframework.stereotype.Component;

import graphql.GraphQLError;
import graphql.kickstart.execution.error.GraphQLErrorHandler;

@Component
public class CustomGraphQLErrorHandler implements GraphQLErrorHandler {

	@Override
	public List<GraphQLError> processErrors(List<GraphQLError> errors) {
		return errors;
	}

}
