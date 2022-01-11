package br.ufsc.bridge.springbootgraphql.resolver.bank.query;

import java.util.UUID;

import lombok.extern.slf4j.Slf4j;
import lombok.var;

import org.springframework.stereotype.Component;

import br.ufsc.bridge.springbootgraphql.domain.bank.BankAccount;
import br.ufsc.bridge.springbootgraphql.domain.bank.Client;
import br.ufsc.bridge.springbootgraphql.domain.bank.Currency;

import graphql.kickstart.tools.GraphQLQueryResolver;

@Slf4j
@Component
public class BankAccountResolver implements GraphQLQueryResolver {

	public BankAccount bankAccount(UUID id) {
		log.info("Retrieving bank account id: {}", id);

		return BankAccount.builder()
				.id(id)
				.currency(Currency.BRL)
				.build();
	}

}
