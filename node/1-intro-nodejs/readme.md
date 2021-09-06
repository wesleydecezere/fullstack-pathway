# Introdução ao Node.js

**Instrutor**: Myke Brito | **Posição**: RocketSeat



## 1. Conhecendo o Node

### Overview

#### Aplicações

* Back e front end, microserviços, API, scripts e automação e até ML
* Não é recomendável para processamentos muito pesados

#### Vantagens

* Velocidade de execução e prototipação
* Escalabilidade
* Faz parte do ecossistema JS, que possui comunidade enorme e é amplamente difundido no mercado

### Definição

O Node.js é um **ambiente de execução** JavaScript (*JS Runtime Environment*). Ou seja, ele é uma camada de software acima do sistema operacional, pronta para executar código JavaScript, como acontece no browser, porém com muito mais flexibilidade. 

Assim, existem alguns **módulos** que só estão disponíveis para o Node, não sendo implementados por browsers. 

### Google V8

Esta é a engine JS do Chrome, utilizada pelo Node, que interpreta e modifica o código JS para que as informações cheguem até o SO. Ela não implementa a DOM, console ou File System, como o Browser.

### Comunicação cliente-servidor 

#### Apache

Cada *request* do cliente ao servidor é realizada por uma *thread* e as *threads* são **síncronas**. Assim, ao iniciar uma troca de informações, o canal de comunicação cliente-servidor é bloqueado até que a *thread* finalize. Ou seja, mesmo sendo *multi-thread*, o Apache só permite uma *request* por vez.

#### Node

Só existe uma *thread*, que executa quantas *requests* forem necessárias, de forma **assíncrona**. Ou seja, o canal de comunicação entre cliente-servidor permanece aberto durante a comunicação. Por meio do *event loop*, realizado na **libuv** do Node, os estados das *requests*  são processados paralelamente, conferindo muito velocidade ao processo.

#### 

## 2. Configurando o ambiente

### REPL

* Read-Eval-Print-Loop

* Basta digitar `node` em qualquer terminal para poder começar codar em JS

  

## 3. Iniciando na prática

* `global`:  contexto global do node, que possui a classe `console`, por exemplo

* `require`: forma de importar módulos

  ```javascript
  const path = require('path')
  ```

* `exports`: forma de exportar módulos autorais

* `process`:  apresenta diversas informações sobre o processo atual, dentre elas o array `argv`, que, além dos dois primeiros elementos reservados, armazena em cada posição os parâmetros passados por linha de comando

## 4. NPM

*Node Package Manager* é um gerenciador de arquivos para manipular dependências, pacotes e módulos Node.



### Trabalhando com arquivos de terceiros

#### `package.json`

Para criar um pacote, basta rodar o comando e seguir as etapas solicitadas `npm init`. Ou ainda, `npm init -y` para preencher automaticamente todas as opções. Um arquivo chamado `package.json` será incluído no diretório do projeto, por meio do qual pode-se fazer uma série de configurações.

Para instalar um módulo de terceiro, basta rodar `npm install`,  ou o equivalente`npm i`, acompanhado do nome do pacote. Para desinstalar, `npm uninstall`. 

Ainda, para inserir o módulo como uma dependência exclusiva para desenvolvimento, basta o parâmetro passar `-D` ao comando. Analogamente, para instalar um pacote globalmente, ou seja, além de um único projeto, basta passar o parâmetro `-g`. Para consultar onde foi instalado, `npm root -g`. 

Ao manipular manualmente o `package.json`, basta rodar `npm update` para aplicar as alterações.

##### Versão dos pacotes (*major.minor.patch*)

Inserindo um caractere à frente da versão do pacote, é possível informar ao npm até quais versão podemos utilizar.

* major (`*`): versão do projeto, que pode quebrar o pacote quando atualizada
* minor (`^`): alterações relevantes, mas que não chegam quebram o pacote
* patch (`~`): resolução de bugs

Para atualizar todos os pacotes, rodar `npm update`. Para verificar detalhes sobre uma versão, `npm outdated`.



#### `node_modules`

* Onde são armazenadas todas as dependências do projeto
* Diretório que não é armazenado junto com o projeto, pois pode ser facilmente recuperado com `npm install`

#### `package-lock.json`

* Arquivo que traz mais informações acerca das dependências do projeto
* É interessante mantê-lo junto do projeto



### Scripts com NPM

No `package.json`, há uma chave chamada `script`, onde são inseridos atalhos para rodar scipts comuns do projeto. Para isso, dentro dela são inseridas outras chaves, como `start`, `dev` ou `test`, acompanhadas de `node` e o caminho do script a ser rodado. 

Para rodar o script de fato, basta se referenciar a alguma das chave em `script`, como `npm run test`. 



## 5. BestMe App

Aplicação de perguntas e respostas, no qual será utilizado o Event Listener`process.stdin.on `e `process.stdout` para troca de informações e assincronismo.



## 6. Timers

* `setTimeout(f, x)`: roda uma função `f` depois de `x` milissegundos, retorna um objeto `timeout`

* `clearTimeout(to)`: cancela um timeout `to`

* `setInterval(f, t)`: roda uma função `f` a cada `t` milissegundos, retorna um `interval`
* `clearInterval(iv, x)`: cancela um interval `iv` depois de `x` milissegundos



## 7. Events

