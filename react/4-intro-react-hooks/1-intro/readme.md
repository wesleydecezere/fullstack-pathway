# Introdução aos React Hooks

**Instrutor**: [Celso Henrique](https://github.com/celso-henrique) | **Posição**: Engineering Lead at Creditas

## 1 Introdução

### 1.1 Apresentação do projeto

### 1.2 Criando meu projeto

Exportando componentes

* na mesma pasta onde há um ou mais compoentes, sempre há um `index.js`, que exporta todo o conteúdo da pasta

* dentro da pasta de cada compoente, também há um `index.js`, que exporta todo o conteúdo do arquivo do componente

* desta forma, fica mais prático de importar qualquer componente em qualquer ponto do código

  ```bash
  .
  ├─ components
  │	├─ Component.js
  │	└─ index.js
  └─ index.js
  ```
  
  


### 1.3 Criando minha primeira página e seus respectivos testes

Testes unitários

* utiliza os métodos `render` e `screen` da biblioteca `@testing-library/react` para renderizar um componentes e para acessar elementos já renderizados com base em alguma propriedade, respectivamente
* utiliza método `toBeInTheDocument`,  da biblioteca `@testing-library/jest-dom/extend-expect` para informar o cenário esperado pelo teste.

### 1.4 Conhecendo o *React Styled Components* e criando um componente

### 1.5 Evoluindo e testando meu componente

Renderizando um componentes que recebe algumas props a as exibe como texto, é possível utilizar `screen.getByText(text)` para localizá-las nos testes.
