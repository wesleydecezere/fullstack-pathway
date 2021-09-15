# Introdução ao ReactJS

**Instrutor**: Bruno Carneiro | **Posição**: Front-End Architect at Luiza Labs



## 1. Apresentação ao ReactJS

### 1.1 Overview 

> ReactJS é uma **biblioteca** JS para criação de **interfaces de usuário**. 

#### História

* Surgiu em 2011, baseado no XHP (framework HTML no PHP), no Facebook
* Em 2012, passou a ser utilizado no Instagram
* Em 2013, liberada para OpenSource
* Em 2015, surgiu o React Native e o UWP, que permite sua utilização para desktop 

#### Conceitos

* É uma linguagem declarativa
* É baseado em componentes
* Sigle-page application (SPA): só há uma página na aplicação, que é renderizada por partes



### 1.2 Configurando o ReactJS

#### Formas de utilizar

* react creat app

* react scripts
* task runners e bundler sizers

#### Instalação

```bash
npnpm install --save react react-dom react-scripts
```

#### Arquivos básicos

```
└─ public/index.html
└─ src/
   └─ index.js
   └─ styles.css
```



### 1.3 O que é JSX

* Algo como uma junção entre HTML e JS
* Sintax Suggar para `React.createElement()`
* O brower não o interpreta, por isso é necessário utilizar um transpilador, como o Babel
* Dentro do HTML retornado, os trechos em JS deve estar entre `{}` 

```jsx
const sum = (a, b) => a + b

function primeiroJSX() {
    return (
    	<div>Wesley Decezere</div>
        <p>Soma: {sum(3, 4)}</p>
    )
}
```



### 1.4 Renderizando elementos

#### React-DOM

* Responsável pela renderização do pagina HTML
* A menor unidade de uma página é um nó-raíz

```jsx
const element = 'Conteúdo'
const otherElement = <h1>Titulo</h1>

const App = () => {
  return (
    <div className='App'>
      {otherElement}
      {element}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```



### 1.5 Componentes e Props

#### Componentes

* Componentes podem ser funções ou classes
* Devem ser o mais simples possível, sem estados ou regras de negócio, para que possam ser facilmente reaproveitados
* Nome dos arquivos de componentes e páginas no padrão CamelCase

#### Props

* Objeto que contém todos os argumentos passadas a um componente

* Tudo o que é passado dentro da tag do componente pode ser acessado por `props.children`

#### Exemplo

```jsx
const soma = (a, b) => {
  alert(a + b)
}

function Title(props) {
  const { content, children } = props

  return (
    <h1>{children}</h1>
  )
}

function Button(props) {
  const { name, onClick } = props

  return (
    <button onClick={onClick}>
      {name}
    </button>
  )
}

const App = () => {
  return (
    <div className='App'>
      <Title>Titulo</Title>
      <Button onClick={() => soma(10, 20)} name='Clique aqui' />
    </div>
  )
}
```



#### Estado

* Toda vez que uma `prop` ou um `state` é alterado, o componente é renderizado
* O `state` é algo privado de cada componente; quando for necessário trocar informações entre eles, utilizar as `props`

#### Ciclo de vida (parecido com Android)

1. Inicialização
   * criação das props e states
2. Montagem
   * componentWillMount
   * render
   * componentDidMount
3. Atualização
   * props
   * state
4. Desmontagem
   * componentWillUnmount



### 1.6 Os ecossistemas do ReactJS

Existem muitas outras bibliotecas que complementam o React.

* React Router
* Redux
* Material UI
* Amt-Design
* Storybook
* Gatsby
* Jest
* React i18n Next

