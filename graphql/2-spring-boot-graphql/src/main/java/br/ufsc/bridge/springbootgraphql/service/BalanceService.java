package br.ufsc.bridge.springbootgraphql.service;

import static java.util.UUID.fromString;

import java.math.BigDecimal;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;

@Slf4j
@Service
public class BalanceService {
	public Map<UUID, BigDecimal> getBalanceFor(Set<UUID> bankAccountIds, String userId) {
		log.info("Requesting bank account ids: {} for user Id: {}", bankAccountIds, userId);

		return Stream.of(new Object[][] {
				{fromString("c6aa269a-812b-49d5-b178-a739a1ed74cc"), BigDecimal.ONE},
				{fromString("410f5919-e50b-4790-aae3-65d2d4b21c77"), new BigDecimal("123456.78")}
		}).collect(Collectors.toMap(
				data -> (UUID) data[0],
				data -> (BigDecimal) data[1]
		));
	}
}
