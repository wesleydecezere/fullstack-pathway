# Desenvolvimento de aplicação para internet com ReactJS

**Instrutor**: Eduardo Costa | **Posição**: Front-end Engineer na TrackSale



## 3. Comunicação avançada entre aplicação

### 3.1 Rest HTTP com React

#### API HTTP

* Servem para conectar a um ou mais servidores HTTP
* Implementação dos métodos GET, POST, DELETE e PUT



#### Principais bibliotecas

##### Ajax

* Usado somente com jQuery

##### Fectch API [[1](./js/3-es6-avancado/4-promises-fetch)]

* Nativa do browser

* Não trabalha com cookies nem rejeita o 4xx

  ```js
  fetch('url', {
      method: 'method_name',
      body: JSON.stringfy({key: 'value'})
  })
  	.then(respose => response.json())
  	.then(data => {
      
  	})
  	.catch(error => {
  	
  	})
  ```

##### Axios

* Lib de HTTP API
* Cross-browser, baseada no XMLHttpRequest

* Melhor tratamento de erros e teste

* Instalada com `yarn add axios`

  ```js
  import axios from 'axios'
  
  axios.method('url', {
  	key: 'value'    
  })
  	.then(data => {
  	
  	})
  	.catch(error => {
  	
  	})
  ```



#### Aplicação no React

* Em um *Funciton Component*, a primeira requisição pode ser feita no método `useEffect`, equivalente ao `componentDidMount` em um *Class Component*



### 3.2 Imutabilidade e Redux

#### Princípios

* Coleções são imutáveis
* Novas coleções podem ser criadas a partir de uma outra
* Novas coleções são criadas com o máximo possível de reaproveitamento

#### Benefícios

* Ganho de performance
* Programação e debugging mais simples

#### Relação com React

* No React, Imutabilidade é sinônimo de performance 
* Obtida por `shouldComponentUpdate` ou `React.PureComponent`, esta que confere menor nível de controle do *re-render*

#### `Immutable.js`

* Fornece coleções persistentes e imutáveis
* Permite a detecção barata de alterações nos objetos

```js
const SomeRecord = Immutable.Reacord({foo: null})
const x = new SomeRecord({foo: 'bar'})
const y = x.set('foo', 'baz')
const z = x.set('foo', 'bar')

x === y // false
x === z // true
```

#### Outras bibliotecas

* Immer
* Immutabilitty-helper
* Seamless-immutable



#### Relação com Redux

* É um pré-requisito no Redux
* A detecção de alterações na *Store* acontece por comparações rasas (`===`)
* `combineReducers` checa as mudanças no objeto de estados, mapeado pelos *reducers*, criando um novo objeto a partir dos retornos de cada *reducer*



* *connect* gera componentes que fazem comparação rasa com o **estado root**
* retorna o valor para `mapStateToProps`, verificando aqueles que precisam de uma operação de re-render



### 3.3 Redux + Rest

#### Redux Middlewares

* Uma camada extra, entre o disparo de uma *action* e o momento em que ela atinge o *reducer*
* Utilizadas em camadas de APIs de serviço, por exemplo
* Permite implementar lógica assíncrona

#### Redux-Thunk

* Um *thunk* é uma função que retorna outra função
* Instalação `yarn add redux-thunk` 





