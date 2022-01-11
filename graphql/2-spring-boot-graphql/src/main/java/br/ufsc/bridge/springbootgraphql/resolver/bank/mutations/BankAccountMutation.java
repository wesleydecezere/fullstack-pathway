package br.ufsc.bridge.springbootgraphql.resolver.bank.mutations;

import java.util.UUID;

import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;

import br.ufsc.bridge.springbootgraphql.domain.bank.BankAccount;
import br.ufsc.bridge.springbootgraphql.domain.bank.CreateBankAccountInput;
import br.ufsc.bridge.springbootgraphql.domain.bank.Currency;

import graphql.kickstart.tools.GraphQLMutationResolver;

@Slf4j
@Component
public class BankAccountMutation implements GraphQLMutationResolver {

	public BankAccount createBankAccount(CreateBankAccountInput input) {
		log.info("Creating bank account for {}", input);

		return BankAccount.builder()
				.id(UUID.randomUUID())
				.currency(Currency.USD)
				.build();
	}

}
