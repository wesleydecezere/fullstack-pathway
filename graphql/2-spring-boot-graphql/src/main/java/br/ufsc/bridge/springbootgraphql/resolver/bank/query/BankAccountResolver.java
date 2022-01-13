package br.ufsc.bridge.springbootgraphql.resolver.bank.query;

import java.awt.Cursor;
import java.time.Clock;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import lombok.var;

import org.springframework.stereotype.Component;

import br.ufsc.bridge.springbootgraphql.connection.CursorUtil;
import br.ufsc.bridge.springbootgraphql.domain.bank.BankAccount;
import br.ufsc.bridge.springbootgraphql.domain.bank.Currency;
import br.ufsc.bridge.springbootgraphql.repository.BankAccountRepository;

import graphql.kickstart.tools.GraphQLQueryResolver;
import graphql.relay.Connection;
import graphql.relay.DefaultConnection;
import graphql.relay.DefaultEdge;
import graphql.relay.DefaultPageInfo;
import graphql.relay.Edge;
import graphql.schema.DataFetchingEnvironment;
import io.micrometer.core.lang.Nullable;

@Slf4j
@Component
@RequiredArgsConstructor
public class BankAccountResolver implements GraphQLQueryResolver {

	private final Clock clock;
	private final BankAccountRepository bankAccountRepository;
	private final CursorUtil cursorUtil;

	public BankAccount bankAccount(UUID id, DataFetchingEnvironment environment) {
		log.info("Retrieving bank account id: {}", id);

		return BankAccount.builder()
				.id(id)
				.currency(Currency.BRL)
				.createdOn(LocalDate.now(clock))
				.createdAt(ZonedDateTime.now(clock))
				.build();
	}

	public Connection<BankAccount> bankAccounts(int first, @Nullable String cursor) {
		List<Edge<BankAccount>> edges = getBankAccounts(cursor)
				.stream()
				.map(bankAccount -> new DefaultEdge<>(bankAccount, cursorUtil.createCursorWith(bankAccount.getId())))
				.limit(first)
				.collect(Collectors.toList());

		var pageInfo = new DefaultPageInfo(
				cursorUtil.getFirstCursorFrom(edges),
				cursorUtil.getLastCursorFrom(edges),
				cursor != null,
				edges.size() >= first);

		return new DefaultConnection<>(edges, pageInfo);
	}

	public List<BankAccount> getBankAccounts(String cursor) {
		if (cursor == null || cursor.isEmpty()) {
			return bankAccountRepository.getBankAccounts();
		}
		return bankAccountRepository.getBankAccountsAfter(cursorUtil.decode(cursor));
	}

}
