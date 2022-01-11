package br.ufsc.bridge.springbootgraphql.resolver.bank.mutation;

import java.util.UUID;

import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;

import graphql.kickstart.servlet.context.DefaultGraphQLServletContext;
import graphql.kickstart.tools.GraphQLMutationResolver;
import graphql.schema.DataFetchingEnvironment;

@Slf4j
@Component
public class UploadFileMutation implements GraphQLMutationResolver {

	public UUID uploadFile(DataFetchingEnvironment environment) {
		DefaultGraphQLServletContext context = environment.getContext();

		context.getFileParts().forEach(
				part -> log.info("uploading: {}, size: {}", part.getSubmittedFileName(), part.getSize())
		);

		return UUID.randomUUID();
	}

}
