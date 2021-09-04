# ES6 avançado

_**Instrutor**: Celso Henrique da Silva_

_**Cargo**: Front-end Lead | Easynvest_

### Aplicando conceitos Rest, Spread Operadotor e Destructuring

#### 1. Rest Operator

Para funções que precisam um número variável de parâmetros, é possível passar utilizar o operador `...` seguido de uma label, a qual irá refernciar um array de todos os arugmentos da função, ou ao menos os não nomeados.

```javascript
function soma(...args){
    return rest.reduce((acc, value) => acc + value, 0)
}

console.log(soma(1,2,5,1)) 
// 9
```

#### 2. Spread Operator

Tranforma uma coleção em valores individuais.

```javascript
var str = 'Fala galera'

function LogArgs(...args){
    console.log(args)
}

LogArgs(...str)
// ["F", "a", ..., "r", "a"]
```

Também pode ser utilizado para construir novos objetos com base em outro objeto literal. Contudo,  o clone não funciona para objetos dentro de objetos (neasted); ao invés disso, ele passa a referência ao objeto.

```javascript
const obj  = {
	prop: value
}

const obj2 = {
    ...obj,
    prop2: value2
}

console.log()
```

#### 3. Destructuring

São úteis para escontruir arrays, objetos, objetos neastes, ou combinações destes.

```javascript
var arr = [1, 7, [{ 
    nome: 'Maroca',
    props: {
    	idade: 14
    }
},
{
   	props: {
	    estudando: true
    }
}], '21']

var [stAge, ndAge, [{ nome: name, props: { idade: rdAge } }, { props: { estudando: student } }], thAge] = arr

console.log(stAge, ndAge, rdAge, thAge, name, student)
```

Descontruir uma lista de argumentos de de função, definir valores padrão.

```javascript
function soma([a, b] = [0, 0]) {
    return a + b
}

console.log(sum([5, 5])) 
// 10
console.log(sum([]))
// 0
```
