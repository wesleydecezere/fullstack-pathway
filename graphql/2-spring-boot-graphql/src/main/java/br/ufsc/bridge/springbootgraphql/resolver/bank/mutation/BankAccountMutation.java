package br.ufsc.bridge.springbootgraphql.resolver.bank.mutation;

import java.time.Clock;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.UUID;

import javax.validation.Valid;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import br.ufsc.bridge.springbootgraphql.config.ClockConfig;
import br.ufsc.bridge.springbootgraphql.domain.bank.BankAccount;
import br.ufsc.bridge.springbootgraphql.domain.bank.CreateBankAccountInput;
import br.ufsc.bridge.springbootgraphql.domain.bank.Currency;

import graphql.kickstart.tools.GraphQLMutationResolver;

@Slf4j
@Component
@RequiredArgsConstructor
@Validated
public class BankAccountMutation implements GraphQLMutationResolver {

	private final Clock clock;

	public BankAccount createBankAccount(@Valid CreateBankAccountInput input) {
		log.info("Creating bank account for {}", input);

		return BankAccount.builder()
				.id(UUID.randomUUID())
				.currency(Currency.USD)
				.build();
	}

}
