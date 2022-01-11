package br.ufsc.bridge.springbootgraphql.domain.bank;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class CreateBankAccountInput {

	@NotBlank
	String firstName;
	int age;

}
