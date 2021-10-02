# Calculadora JavaScript

### Bugs

1. Por algum motivo sombrio, não consegui criar uma função, invocada pelo evento `onClick`, que se chamava `clear`. Tive que alterar seu nome para `eraseAll`.

## Etapas

### Implementar funcionalidades

- [x] Comando adicionar número

- [x] Limitar numero de caracteres de entrada em 8 unidades

- [ ] Limitar caracteres número de caracteres de saída

  1. Inserir `*10^n` quando `visor-out` ultrapassar x caracteres 
  2. `ERR`
  3. Truncar em duas casas decimais

- [x] Conta atual no visor ou no histórico?

  * windows: numero atual no visor, operação completa no buffer; todas as operações no histórico

  * **ios**: operação completa no buffer, resultado parcial no visor
  * cassio: operação completa no buffer (srollable 2D), resultado no visor 
  
- [x] Gerenciar histórico

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

  - [x] Acumular operações

  - [x] Deixar caixa srcollabe

    - [x] Scroll vertical

    - [x] Subir texto quando encher a tela

    - [ ] Scroll horizonal quando expressão atual ultrapassar largura do visor

      * `  white-space: nowrap;`

      - Teria que alinhar todo o seu conteúdo à esquerda e retornar a `scrollLeft = 0` sempre que iniciar uma nova linha
  
- [x] Gerenciar limpezas

  - [x] `backspace` permite apagar somente os caracteres a expressão atual, um a um
  - [x] `C` limpa todo o histórico
  - [x] `CE` limpa toda a expressão atual
    - [x] Apagar também o `visor-out`?
      1. se sim, ao inserir operador na linha em branco, pega o 0  (ou '') como primeiro operando
      2. se não, pega o resultado parcial da expressão apagada
      3. em ambos os casos, perde a funcionalidade de recuperar o resultado anterior; interessante seria ainda tê-lo disponível, mas acredito que precisaria armazená-lo globalmente
    - [ ] Quando na primeira linha vazia, insere um `<br>` erroneamente
  
- [ ] Operações avançadas
  - [x] 1/x
  - [x] x^2: x**2
  - [x] sqrt: x**1/2
  - [ ] Refinar implementações anteriores
  - [ ] %
  - [ ] +/-
  - [ ] .
  - [ ] ()
  
- [x] Tornar o `visor-out` uma `input`

  - [x] Sempre direcionar entrada de texto à input: `onBlur='this.focus()'`
  - [x] Limitar caracteres: apaga último caractere do `visor-out` quando último operando do `vistor-hist` é maior que 8
  - [x] Eliminar borda e cursor piscante

- [ ] Uso do teclado

  - [x] Permitir inserção de valores e operações por teclado
  - [ ] Gerenciar melhor inserção e identificação dos caracteres
    - [x] Aceitar operações, como Enter ou Backspace
    - [ ] Inserir caracteres de operação (+, =) sem incluí-los no `visor-out`
      * ^ não está funcionando corretamente: insere o numero junto com o resultado
  - [ ] Para funcionar no mobile, pegar o evento beforeInput e o keydown, a depender da tecla

- [ ] Calculate

  - [ ] Tratar o caso `a ** ** b * c` (que excede a recursão)
    1. Retornar ao `visor-hist` a expressão efetivamente calculada, de forma que não  --> isso inviabilizaria a chamada da função ao apagar um numero/operador
    2. Retornar ERR quando não houver nenhum operador
  - [ ] Tratar a associatividade inversa do operador `**`
    1. Inserir os operandos desta operação em parênteses
  - [x] Tratar o número iniciado em zero, que é interpretado como octal
    * primeiros zeros de cada operando removidos

### Estilização

#### `visor-hist`

- [ ] definir `height` e `font-size` de modo que não corte a visualização de nenhuma informação



### Refatoração

- [x] Eliminar `getElementByClassName`
  1. `getElementByClassName('visor-hist')` como variável global, assim como `visor-line`
  
- [x] Tirar os *event handler* dos atributos *onevent* do HTML
  1. Atribuir os eventos com `addEventListener` 
  2. Atribuindo uma função à propriedade *onevent* do elemento correspondente
  
- [x] Verificar onde vale à pena utilizar ReGeX

- [x] Visor

  - [x] Put
    * OBS: Como a `calc` deve tratar expressões com operador sobrando, posso chamá-la sempre que inserir um novo caractere

  - [x] Funções de limpeza

- [ ] Analisar como tratar os eventos de `click` e `keydown` por uma mesma função
