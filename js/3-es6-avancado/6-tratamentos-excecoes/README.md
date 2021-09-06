# ES6 avançado

_**Instrutor**: Celso Henrique da Silva_

_**Cargo**: Front-end Lead | Easynvest_

### Tratamentos de erros e Exceções

#### 1. Tratamento de erros

* O tratamento de erros é feito com`try`/`catch`. Para executar em qualquer caso, é possível utilizar o`finally` (semelhante ao`default` do switch-case)
* Erros pertencem à classe`Erros`. Por isso, podem ser atribuídos à variáveis ou ser extendidos por outras classes que, logicamente, podem possuir propriedades e até mesmo métodos! Também podem ser disparador por`throw`*errorVar*

#### 2. Debbuing

* Adiconando`debugger` em alguma linha do código, o navegador inclui um breakpoint exatamente nesta linha


##### Console

* Outra ferramente muito utilizada para debug é a entidade`console`
  * `.log`
  * `.warn`
  * `.error`
  * `.trace`: onde o código foi executado
  * `.group` e`.endGroup`: agrupar logs
  * `.time` e`.timeEnd`: identificar o tempo para execução da função
  * `.table`: formata arrays e objetos
  * `.assert`: se uma condição for falsa, executa um`.error`
  * segundo parâmetro do`.log`: recebe css :O
  *
