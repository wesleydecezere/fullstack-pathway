package br.ufsc.bridge.springbootgraphql.dataloader;

import java.math.BigDecimal;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import lombok.var;

import org.dataloader.DataLoader;
import org.dataloader.DataLoaderRegistry;
import org.springframework.stereotype.Component;

import br.ufsc.bridge.springbootgraphql.service.BalanceService;

@Slf4j
@Component
@RequiredArgsConstructor
public class DataLoaderRegistryFactory {

	private final BalanceService balanceService;

	public static final String BALANCE_DATA_LOADER = "BALANCE_DATA_LOADER";
	public static final Executor balanceThreadPool = Executors
			.newFixedThreadPool(Runtime.getRuntime().availableProcessors());

	public DataLoaderRegistry create(String userId) {
		var registry = new DataLoaderRegistry();
		
		registry.register(BALANCE_DATA_LOADER, createBalanceDataLoader(userId));

		return registry;
	}

	private DataLoader<UUID, BigDecimal> createBalanceDataLoader(String userId) {
		log.info("Creating balance data loader for user: {}", userId);

		return DataLoader.newMappedDataLoader((Set<UUID> bankAccountIds) ->
			CompletableFuture.supplyAsync(() ->
					balanceService.getBalanceFor(bankAccountIds, userId),
					balanceThreadPool
			)
		);
	};

}
