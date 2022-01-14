package br.ufsc.bridge.springbootgraphql.domain.bank;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.UUID;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class BankAccount {

	UUID id;
	Client client;
	Currency currency;
	LocalDate createdOn;
	ZonedDateTime createdAt;
	BigDecimal balance;

}
