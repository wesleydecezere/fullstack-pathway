# Desenvolvimento de aplicação para internet com ReactJS

**Instrutor**: Eduardo Costa | **Posição**: Front-end Engineer na TrackSale



## 4. Conceitos aplicados à qualidade de código e automação de testes em React

### 4.1 TDD com Jest

> **T**est-**D**rive **D**evelopment

* Escrita dos testes antes da implementação da funcionalidade

```mermaid
graph LR
Fail --> Pass
Pass --> Refactor
```

#### Vertentes

* Teste unitário: funções, componentes, serviços
* Teste End-to-End (E2E): teste de fluxo

#### Bibliotecas

* [Jest](http://jestjs.io): usa a linguagem Jasmine, tem *code-coverage*
* React-testing-Library
* Shallow
* Enzyme
* Chai
* Mocha
* Selenium
* Puppeteer

#### Jest

##### `soma.js`

```js
export default function soma(a, b) = {
    return a + b
}
```

##### `soma.test.js`

```js
import { soma } from './soma'

describe('testando função soma', () => {
	it('A soma deve ser 3', () => {
		const res = soma(1, 2)
		expect(res).toBe(3)
	})
})
```



#### React-testing-Library

##### Instalação

```bash
yarn add --dev @testing-library/react
yarn add --dev @testing-library/jest-dom/extend-expect	
```

##### Componente

```js
import React from 'react'

const Basic = (props) => (
	<p>Meu nome é {props.name}</p>
)

export default Basic
```

##### Teste

```jsx
import React from 'react'
import Basic from './Basic'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Testando Basic', () => {
    it('O componente Basic deve renderizar corretamente', () => {
		const {baseElement} = render(<Basic name='Componente' />)
        expect(baseElement).toHaveTextContent('Meu nome é Componente')
    })
})
```

##### Componentes com Redux

* Criar uma store de teste
* Fazer um wrapper



### 4.2 BDD com Jest

> **B**ehavior-**D**riven **D**evelopment

* Une especificação, teste automatizado e premissa de teste

* Sintaxe *Gherkin*

  - Funcionalidade

  - Cenário --> Dados, Quando, E, Então

#### Cucumber

##### Instalação

```bash
yarn add --dev jest-cucumber
```

##### `soma.feature`

```
Feature: Soma um Par
	Scenario: soma 1 + 2 resulta em 3
		Given 1
		When soma 2
		Then a soma é 3
```



### 4.3 Debugging

#### Definição

> Encontrar e reduzir defeitos em um software

#### Formas de fazer

* Manualmente
* De cabeça
* Logging
* Ferramentas
  * Chrome DevTools
  * Redux DevTools
  * React DevTools

#### Ferramentas de Debugging

Inserir a palavra-chave `debugger` em um techo do código insere um breakpoint naquela linha no *DevTools*.



### 4.4 Tratamento de erros

#### Definição

> Confere resiliência e segurança ao software

#### Exemplo em funções

##### `soma.js`

```js
export const soma = (a, b) => a + b
```

##### `somaSegura.js`

```js
export const somaSegura = (a, b) => {
    if (typeof a === 'number' && typeof b == 'number') {
        return a + b
    } else {
        return -1
    }
```

#### Exemplo em Form

##### `Form.jsx`

```jsx
<form onSubmit={this.handleSubmit} style={}>
	<label>
    	Nome:
        <input type='text' value={this.state.value} onChange={this.handleChange} required></input>
    </label>
    <input type='submit' value='Submit'></input>
</form>
```

#### Exemplo em retorno de APIs

##### `exibirMensagem.js`

```js
function exibirMensagem() {
    if(codigo === 401) alert('Faça login para continuar')
    if(codigo === 404) alert('Recurso não encontrado')
    if(codigo === 500) alert('Erro interno de servidor')
}
```

#### Exemplos em Componentes

##### PropTypes

```jsx
import React from 'react'
import PropTypes from 'prop-types'

export const Basic = ({ name }) => {
	<p>Meu nome é {name}</p>
}

Basic.propTypes = {
    name: PropTypes.string
}
```
