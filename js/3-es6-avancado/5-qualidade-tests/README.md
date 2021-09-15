# ES6 avançado

_**Instrutor**: Celso Henrique da Silva_

_**Cargo**: Front-end Lead | Easynvest_

### Conceitos aplicados a qualidade de código e automação de testes em JS

#### 1. Testes, TDD e BDD

##### Testes

* Testes automatizados

  * Unitários: partes individuais do código, como funções ou módulos
  * Integrados: partes integradas no código
  * Funcionais: integração do código com um sistema externo
* Testes manuais e automatizados

  * UI/UX

##### TDD: Test Driven Development

Consiste construir um teste para cada funcionalidade, antes mesmo de implementar cada uma delas.

1. Criar um teste com basa na regra de negócio
2. Implementar a funcionalidade, somente para fazer o teste passar
3. Refatorar o código da funcionalidade

##### BDD: Behavior Driven Development

Consiste em integrar código com as regras de negócio. 

* É implementado por meio de bibliotecas de**testes** que permitem descrever a funcionalidade testada
* A**documentação** complementar também pode descrever as funcionalidades implementadas
* Devem ser incluídos**exemplos** na documentação, que podem ser reaproveitados dos testes.

#### 2. Mocca, Chai e Sinon

##### Mocca

* Utilizado para fazer BDD



Para testes com **funções assíncronas**, a biblioteca possibilita passar um parâmetro *callable* chamado `done` para a função de teste invocada no `it`, que permite a finalização do teste somente quando a Promisse estiver finalizada.

Neste caso, não é conveniente utilizar arrow functions na função de teste, pois ela não recupera o contexto de invocação e, por isso, não permite alterar o timeot do teste com `this.timeout(new_timeout_value)`



##### Chai

* O Mocca precisa de um`assert`, pois não o implementa-o. O nativo é um tanto quanto limitado.
* Por isso, é interessante utilizar a biblioteca de assert`Chai`, que deixa os testes muito mais legíveis
* Também pode ser utilizado para comparar objetos



##### Simon

* É possível "mocar" funções e testar se elas foram invocadas, de forma mais simples que somente com as bilbiotecas anteriores
