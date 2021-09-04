# ES6 avançado

_**Instrutor**: Celso Henrique da Silva_

_**Cargo**: Front-end Lead | Easynvest_



### Introdução a Generators

#### 1. Symbols e Iterators

Symbols são uma forma de gerar um identificador único. Podem ser utilizados para gerar proriedades privadas (por convenção, mas não na prática).

É possível utilizar propriedades do Symbol para adicionar algumas características imporantes a objetos. Por exemplo, com o `Symbol.iterator`, é possível tornar um objeto iterável, assim como um array ou uma string, que já possuem nativamente um atriuto que lhe confere esta característica.

```javascript
const obj = {
    values: [1, 2, 3, 4],
	[Symbol.iterator]() {
    	let i = 0
    	return {
    		next: () => {		
                i++
				return {
                    value: this.values[i-1],
                    done: i > this.values.length
                }
            }
		}
	} 
}
for (let value of obj) {
    console.log(value)
}
//1
//2
//3
//4
```



#### 2. Generators

São funções que podem ser pausadas ao longo de sua execução e que funcionam com a mesma interface de um Iterator.

```javascript
function* hello() {
    console.log('Eai')
    yield 1;
    console.log('Galera')
    yield 2;
    console.log('Do Batizado')
}
```

Também pode ser aproveitado para criar Iterators de forma mais simples 

```javascript
const obj = {
    values: [1, 2, 3, 4],
	*[Symbol.iterator]() {
    	for(let i = 0; i < this.values.length; i++) {
			yield this.values[i]
        }
	} 
}
for (let value of obj) {
    console.log(value)
}
//1
//2
//3
//4
```

