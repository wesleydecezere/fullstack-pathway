package br.ufsc.bridge.springbootgraphql.resolver.bank.query;

import java.math.BigDecimal;

import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;

import br.ufsc.bridge.springbootgraphql.domain.bank.BankAccount;

import graphql.kickstart.tools.GraphQLResolver;

@Slf4j
@Component
public class BankAccountResolver implements GraphQLResolver<BankAccount> {

	public BigDecimal balance(BankAccount bankAccount) {
		log.info("Getting balance for {}", bankAccount.getId());

		return BigDecimal.ONE;
	}

}
