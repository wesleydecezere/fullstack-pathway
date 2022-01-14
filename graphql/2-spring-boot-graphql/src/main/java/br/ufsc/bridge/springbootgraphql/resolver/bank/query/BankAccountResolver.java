package br.ufsc.bridge.springbootgraphql.resolver.bank.query;

import java.math.BigDecimal;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;

import lombok.extern.slf4j.Slf4j;

import org.dataloader.DataLoader;
import org.springframework.stereotype.Component;

import br.ufsc.bridge.springbootgraphql.dataloader.DataLoaderRegistryFactory;
import br.ufsc.bridge.springbootgraphql.domain.bank.BankAccount;

import graphql.kickstart.tools.GraphQLResolver;
import graphql.schema.DataFetchingEnvironment;

@Slf4j
@Component
public class BankAccountResolver implements GraphQLResolver<BankAccount> {

	public CompletableFuture<BigDecimal> balance(
			BankAccount bankAccount,
			DataFetchingEnvironment environment) {
		log.info("Getting balance for {}", bankAccount.getId());

		DataLoader<UUID, BigDecimal> dataLoader = environment.getDataLoader(
				DataLoaderRegistryFactory.BALANCE_DATA_LOADER
		);

		return dataLoader.load(bankAccount.getId());
	}

}
