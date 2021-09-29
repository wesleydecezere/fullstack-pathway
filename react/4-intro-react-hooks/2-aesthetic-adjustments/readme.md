# Introdução aos React Hooks

**Instrutor**: [Celso Henrique](https://github.com/celso-henrique) | **Posição**: Engineering Lead at Creditas

## 2 Ajustes estéticos

### 2.1 Explorando o *React Styled Components* um pouco mais

#### Unidades de medida CSS

* O `em` respeita a acessibilidade, diferentemente do `px`
* Por isso, essa unidade é recomendada para tamanhos de fonte

#### Tipando propriedades

* Boa prática, que facilita a deputação

* Mesmo quando tipo errado não quebra aplicação, exibe erro no console

  ```js
  import { string } from 'prop-types'
  
  Component.propTypes = {
    prop_1: string,
    prop_2: string
  }
  ```



### 2.2 Abstraindo melhor meus componentes

#### Função espiã

* O Jest pemite cirar funções que podem ser passadas como callback, por exemplo, e no teste unitário pode-se verificar se elas foram chamadas ou não, diante de algum cenário

  ```jsx
  import { render, screen, fireEvent } from '@testing-library/react'
  
  test('calls a callback when button is pressed', () => {
    const callback = jest.fn()
  
    render(<Component onSomething={callback} />)
    const element = screen.getByRole(element-role)
    fireEvent.anotherEvent(element)
  
    expect(callback).toHaveBeenCalledTimes(1)
  })
  ```

  

### 2.3 Mockando uma API REST em meus testes com **msw**

#### Segregar responsabilidades

* Um componente deve ter, idealmente, somente uma responsabilidade

#### Mock Service Worker (MSW)

* Cama de rede

* Ao invés de fazer requisições ao servidor em cada teste unitpario, é possível mockar as a API e definir as respostas desejadas

  ```js
  // service.js
  export const getSomething = () => 
    fetch('URL').then((response) => response.json())
  
  
  // service.test.js
  import { rest } from 'msw'
  import { setupServer } from 'msw/node'
  import { getSomething } from './service'
  
  const response = { key: value }
  
  const server = setupServer(
    rest.get('URL', (req, res, ctx) => {
      return res(ctx.json(response))
    })
  )
  
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  
  test('get something from the server', async () => {
    const quote = await getQuote()
  
    expect(quote).toStrictEqual(response)
  })
  ```

  

#### Variáveis de ambiente

* Em um arquivo `.env`, coloca-se a URL do servidor de desenvolvimento
* Em produção, esta URL deve ser substituída pela URL do servidor hospedado



### 2.4 Evoluindo meu projeto através do controle de estado

#### Testes assíncronos

* O método `screen.findByText` faz uma busca assíncrona de algum elemento na tela renderizada, diferentemente do `getByText`

#### `useState`

* Utilizado para armazenar os dados recebidos da API