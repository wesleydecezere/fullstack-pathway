package br.ufsc.bridge.springbootgraphql.resolver;

import java.util.UUID;

import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;

import br.ufsc.bridge.springbootgraphql.domain.bank.BankAccount;
import br.ufsc.bridge.springbootgraphql.domain.bank.Currency;

import graphql.kickstart.tools.GraphQLQueryResolver;

@Slf4j
@Component
public class BankAccountResolver implements GraphQLQueryResolver {

	public BankAccount bankAccount(UUID id) {
		System.out.print(String.format("Retrieving bank account id: %s", id));

		return BankAccount.builder()
				.id(id)
				.currency(Currency.BRL)
				.name("Wesley Decezere")
				.build();
	}
}
