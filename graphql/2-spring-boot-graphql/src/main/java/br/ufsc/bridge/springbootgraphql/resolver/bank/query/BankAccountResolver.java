package br.ufsc.bridge.springbootgraphql.resolver.bank.query;

import java.util.UUID;
import java.util.stream.Collectors;

import lombok.extern.slf4j.Slf4j;
import lombok.var;

import org.springframework.stereotype.Component;

import br.ufsc.bridge.springbootgraphql.domain.bank.BankAccount;
import br.ufsc.bridge.springbootgraphql.domain.bank.Client;
import br.ufsc.bridge.springbootgraphql.domain.bank.Currency;

import graphql.kickstart.tools.GraphQLQueryResolver;
import graphql.schema.DataFetchingEnvironment;
import graphql.schema.SelectedField;

@Slf4j
@Component
public class BankAccountResolver implements GraphQLQueryResolver {

	public BankAccount bankAccount(UUID id, DataFetchingEnvironment environment) {
		log.info("Retrieving bank account id: {}", id);

		var requestedFields = environment.getSelectionSet()
				.getFields()
				.stream()
				.map(SelectedField::getQualifiedName).collect(Collectors.toSet());

		log.info("Requested fields: {}", requestedFields);

		if (environment.getSelectionSet().contains("specialField")) {
			// do special stuff
		}

		return BankAccount.builder()
				.id(id)
				.currency(Currency.BRL)
				.build();
	}

}
