# Calculadora JavaScript

### Bugs

1. Por algum motivo sombrio, não consegui criar uma função, invocada pelo evento `onClick`, que se chamava `clear`. Tive que alterar seu nome para `eraseAll`.

## Etapas

### Implementar funcionalidades

- [x] Comando adicionar número

- [ ] Limitar numero de caracteres visor

- [x] Conta atual no visor ou no histórico?

  * windows: numero atual no visor, operação completa no buffer; todas as operações no histórico

  * **ios**: operação completa no buffer, resultado parcial no visor
  * cassio: operação completa no buffer (srollable 2D), resultado no visor 

- [ ] Gerenciar histórico

  - [x] Resolução das operações
    1. A cada operando inserido, calcular a operação anterior
    2. A cada novo número inserido, processar toda a expressão
    3. A cada novo número inserido, resgatar resultado anterior e operador atual para fazer operação atual
       * Desta forma, não executaria as operações corretamente

  - [x] Finalização de expressões
    - [x] Ao inserir sinal de igual, passar o valor para a próxima linha
    - [x] Adicionar o resultado anterior à frente, quando inserir somente operador em nova linha
    - [x] Adicionar resultado da expressão ao seu final e nova expressão abaixo da anterior
      * Por enquanto, assim ficou melhor. Depois que inserir srcoll, avaliar se fica legar inserir resultado abaixo da expressão (como no windows) 

  - [ ] Acumular operações
  - [ ] Subir texto quando encher a tela
  - [ ] Deixar caixa srcollabe

- [ ] Gerenciar limpezas

  - [x] `backspace` permite apagar somente a expressão atual
  - [x] `C` limpa todo o histórico
  - [ ] `CE` limpa toda a expressão atual
    - [ ] Apagar também o `visor-out`?
      1. se sim, ao inserir operador na linha em branco, pega o 0  (ou '') como primeiro operando
      2. se não, pega o resultado parcial da expressão apagada
      3. em ambos os casos, perde a funcionalidade de recuperar o resultado anterior; interessante seria ainda tê-lo disponível, mas acredito que precisaria armazená-lo globalmente

- [ ] Operações avançadas
  - [ ] 1/x
  - [ ] x^2
  - [ ] sqrt
  - [ ] +/-
  
- [ ] Tornar o `visor-line` uma `input`

- [ ] Permitir inserção de valores e operações por teclado



### Refatoração

1. ``getElementByClassName('visor-hist')` como variável global, assim como `visor-line`

