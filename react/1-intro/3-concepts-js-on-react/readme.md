# Introdução ao ReactJS

**Instrutor**: Bruno Carneiro | **Posição**: Front-End Architect at Luiza Labs



## 3. Conceitos aplicados aos tipos de dados e condições da biblioteca

### 3.1 Renderização condicional

> Cada componente pode ser renderizado individualmente, a depender do seu estado.

#### Variáveis de elementos

Uma variável pode armazenar um elemento HTML e, entre chaves, pode ser retornada na função TSX. 

```jsx
const element = <button>Click me</button>
const Component = () => {
  return(
    <div>
      {element}
    </div>  
  )
}
```



#### If inline com o operador lógico `&&`

Realizando uma operação AND entre uma variável booleana e um elemento, é possível simular um if. 

```jsx
return(
  <div>
    {isTrue && <p>Cachorro</p>}
  </div>
)
```



#### If-else inline com operador condicional

De forma análoga, é possível implementar um if-else utilizando `{condition ? returnIfTrue : returnIfFalse}`. É uma boa prática separar os os valores de retorno em elementos.

```jsx
return(
  <div>
    {isTrue ? renderSomething : renderAnotherThing}
  </div>
)
```



#### Evitando que um componente seja renderizado

Uma função JSX que retorna `null` não é renderizada pelo React.

```jsx
const doSomething = () => {
  if (!isTrue) return null;

  return (
    <div>
      <h1>Something</h1>
    </div>
  )
}

```



### 3.2 Listas e chaves

#### Renderizando múltiplos componentes

* Para renderizar vários componentes de uma só vez, pode-se executar uma fução tipo `map` para percorrer a lista, e retornando um elemento com base em cada um de seus valores.

#### Chaves

* Em uma lista de elementos, o React exige que seja passado um atributo único entre elementos irmão, denominado `key`

```jsx
const App = () {
  const renderSomeList = (element, index) => {
    return(
      <li key={index}>{element}</li>
    )
  }
    
  return(
    <ul>
      {listCustomer.map(renderCustomers)}
    </ul>
  )    
}

```



### 3.3 Manipulando eventos

> Muito semelhantes aos eventos do DOM, contudo, são nomeados usando camelCase e o manipulador de eventos recebe uma função, entre `{}`, ao invés de um texto. Por isso, também é possível passar qualquer argumento para a função tratadora.



### 3.4 Dicas para pensar do jeito ReactJS

Dicas

* Comece com um Mock: separar os dados dos componentes
* Separar a UI em hierarquia de componentes: uma pasta `components`, para armazenar todos os componentes, o mais genéricos possível

* É comum que as rotas da página fiquem na pasta `containers`; se algum componente tiver alguma regra de negócio específica, também fica nesta pasta.



* Criar uma versão estática do React
* Identificar a representação mínima (mas completa) do State da UI

* Identificar onde o State deve ficar
* Adicionar o fluxo de dados inverso

