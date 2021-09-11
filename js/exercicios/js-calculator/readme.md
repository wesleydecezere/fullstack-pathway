# Calculadora JavaScript

### Bugs

1. Por algum motivo sombrio, não consegui criar uma função, invocada pelo evento `onClick`, que se chamava `clear`. Tive que alterar seu nome para `eraseAll`.

## Etapas

### Implementar funcionalidades

- [X] Adicionar número
- [ ] Operações básicas
  * Conta atual no visor ou no histórico?
    * windows: numero atual no visor, operação completa no buffer; todas as operações no histórico
    * ios: operação completa no buffer, resultado imediato no visor
    * cassio: operação completa no buffer (srollable 2D), resultado no visor 
- [ ] Limitar numero de caracteres visor
- [ ] Gerenciar histórico
  - [x] Recuperar somente última operação (a que ainda não tem '=')
  - [x] Adicionar o resultado anterior à frente, quando inserir somente operador em nova linha
    - [ ] Ao inserir sinal de igual, passar o valor para a próxima linha
  - [ ] Efetuar a operação sempre que inserir um numero
  - [ ] Acumular operações
  - [ ] Subir texto quando encher a tela
  - [ ] Deixar caixa srcollabe
- [ ] Limpar histórico
- [ ] Operações avançadas
  - [ ] 1/x
  - [ ] x^2
  - [ ] sqrt
  - [ ] +/-
- [ ] Tornar o`visor-line` uma`input`
- [ ] Permitir inserção de valores e operações por teclado



### Refatoração

1. ``getElementByClassName('visor-hist')` um uma única função, assim como para `visor-line`

