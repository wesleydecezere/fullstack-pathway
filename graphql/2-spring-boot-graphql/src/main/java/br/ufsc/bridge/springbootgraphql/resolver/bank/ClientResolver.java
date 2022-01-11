package br.ufsc.bridge.springbootgraphql.resolver.bank;

import java.util.UUID;

import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;

import br.ufsc.bridge.springbootgraphql.domain.bank.BankAccount;
import br.ufsc.bridge.springbootgraphql.domain.bank.Client;

import graphql.GraphQLException;
import graphql.kickstart.tools.GraphQLResolver;

@Slf4j
@Component
public class ClientResolver implements GraphQLResolver<BankAccount> {

	public Client client(BankAccount bankAccount) {
		log.info("Requesting client data for bank account id {}", bankAccount.getId());

//		throw new GraphQLException("Client unavailable");
		throw new RuntimeException("Spring exception");

//		return Client.builder()
//				.id(UUID.randomUUID())
//				.firstName("Wesley")
//				.lastName("Decezere")
//				.build();
	}

}
