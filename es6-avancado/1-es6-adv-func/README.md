# ES6 avançado

_**Instrutor**: Celso Henrique da Silva_

_**Cargo**: Front-end Lead | Easynvest_



### Funções avançadas do ES6 

#### 1. Arrow functions

* são funções *anônimas*, que só podem ser atribuídas a variáveis ou passadas como parâmetro
* *this* não recupera o contexto de invocação, mas sim o contexto léxico (que envolve a arrow function por {})
* não fazem *hoisting*

#### 2. Default function arguments

```javascript
function soma(a, b = a){
    return a + b;
}

console.log(soma(1)) 
// 2
```

* Leazy evaluation: a variável default também pode receber uma função que retorna algum valor; ela é executada toda vez que o parâmetro não é atribuído.



#### 3. Enchanced Object Literals

* Quando uma propriedade/comportamento tem a mesma label que seu valor, esta label não precisa mais ser repetida
* Uma função pode ser declarada diretamente dentro de um objeto
* A label de uma propridade por ser definida por uma variável externa ao objeto, envolvendo a label da variável por conchetes 

```javascript
var obj = {
    var_1, // alternativa a var_1: var_1
    soma, // alternativa a soma: soma
    mutiplica(a, b) { return a + b } // sem o function
    [prop_name]: prop_val // anteriormente era possível declarar somente após o objeto    
}
```





