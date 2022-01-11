package br.ufsc.bridge.springbootgraphql.resolver.bank;

import java.util.UUID;

import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;

import br.ufsc.bridge.springbootgraphql.domain.bank.BankAccount;
import br.ufsc.bridge.springbootgraphql.domain.bank.Client;

import graphql.execution.DataFetcherResult;
import graphql.kickstart.execution.error.GenericGraphQLError;
import graphql.kickstart.tools.GraphQLResolver;

@Slf4j
@Component
public class ClientResolver implements GraphQLResolver<BankAccount> {

	public DataFetcherResult<Client> client(BankAccount bankAccount) {
		log.info("Requesting client data for bank account id {}", bankAccount.getId());

		return DataFetcherResult.<Client>newResult()
				.data(Client.builder()
					.id(UUID.randomUUID())
					.firstName("Wesley")
					.lastName("Decezere")
					.build())
				.error(new GenericGraphQLError("Could not get sub-client id"))
				.build();
	}

}
