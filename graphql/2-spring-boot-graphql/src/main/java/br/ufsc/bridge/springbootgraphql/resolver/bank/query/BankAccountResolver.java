package br.ufsc.bridge.springbootgraphql.resolver.bank.query;

import java.time.Clock;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.UUID;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;

import br.ufsc.bridge.springbootgraphql.domain.bank.BankAccount;
import br.ufsc.bridge.springbootgraphql.domain.bank.Currency;

import graphql.kickstart.tools.GraphQLQueryResolver;
import graphql.schema.DataFetchingEnvironment;

@Slf4j
@Component
@RequiredArgsConstructor
public class BankAccountResolver implements GraphQLQueryResolver {

	private final Clock clock;

	public BankAccount bankAccount(UUID id, DataFetchingEnvironment environment) {
		log.info("Retrieving bank account id: {}", id);

		return BankAccount.builder()
				.id(id)
				.currency(Currency.BRL)
				.createdOn(LocalDate.now(clock))
				.createdAt(ZonedDateTime.now(clock))
				.build();
	}

}
