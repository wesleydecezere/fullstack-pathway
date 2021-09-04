# ES6 avançado

_**Instrutor**: Celso Henrique da Silva_

_**Cargo**: Front-end Lead | Easynvest_

### Aplicando conceitos de Promisses e Fetch

#### 1. Callbacks e Promises

Funções de *callback* são a maneira clássica de fazer tarefas assícnronas, executadas pela `setTimeout` dentro de uma função definida, que recebe a callback. A `setTimeout` recebe uma função que executa a callback e o valor de timeout, como segundo parâmetro.

```javascript
function doSomething(callback) {
	setTimeout(function() {
		callback('data received')
	}, 1000)
}

doSomething(function(data) {
	var processedData = data.split('')
	console.log(processedData)
})
```

Para tratar os erros de cada callback, utiliza-se um `try-catch`, o que acaba deixando o código bem amarrado e pouco legível quando muitas callbacks estão encadeadas.

##### Promisses

```javascript
new Promisse((resolve, reject) => {})
```

Promisses tem 3 etados:

1. Pending: ainda não teve o timeout finalizado
2. Fulfilled: timeout finalizado
3. Rejected: houve erro antes de finalizar o timeout

O parâmetro *resolve* está associado ao estado *fulfilled*, enquanto o *reject* ao estado *rejected*.

```javascript
const doSomethinPromise = () => 
	new Promisse((resolve, reject) => {
		setTimeout(function() {
			callback('data received')
		}, 1000)
	})

doSomethingPromise()
	.then(data => {
		var processedData = data.split('')
		console.log(processedData)
	})
```

Com promisses, basta utilizar `.catch`  para fazer o tratamento do erro.

Para fazer **processamento paralelo**, basta passar um array com as promisses para `Promise.all()`. Neste caso, o `.then` só será executado quando/se ambas as as promises estiverem *fulfilled*.

Para que o `.then` execute após a primiera promisse *fulfilled* (processamento paralelo concorrente), passar o array para `Promisse.race()`.

#### 2. Fetch e Async/Await

###### Fetch

`fetch` é uma API que faz requisições `HTTP` utilizando promisses. Por isso, é possível utilizar os métodos `.then` e `.catch` de Promise para trabalhar com ela.

Contudo, é importante notar que o `.catch` só tem efeito em erros de rede, em que não há resposta `HTTP`.  Se houver, mesmo que ela seja 4xx, o `.then` será executado. Para sanar este problema, é interessante verificar o `responseStream.status`.

```javascript
fetch('URL', {})
	.then(responseStream => {
		if (responseStream.status == 200) {
			return responseStream.json() // exemplo de tratamento processamento da resposta
		} else {
			throw new Error('Request error')
		}
	})
	.then(data => {
		console.log(data) // tratamento da resposta processada
	})
	.catch(err => {
		console.log('Error: ', err)
	})
```

Para utilizar métodos `HTTP` diferentes de GET, utilizar o objeto passado como segundo parâmetro.

###### Assync/Await

* Surgiram no ES7, inspiradas em linguagens como C#
* Formas de fazer promise de maneira ainda mais simplificada
* Basta adicionar`assync` à frente da declaração da função para torná-la uma`Promise`
* Basta adicionar`await` à frente de uma promise para aguardar sua mudança de*pending* para*fulfilled* ou*rejected*
* Para encaderar promises de forma paralela, utilizar`await` à frente de`Promise.all()` ou`Promise.race()`

#### 3. EventEmitter

* Disponíveis exclusivamente no Node.js
* Utilizado para trabalhar de forma mais simplificada e padronizada com processamento assíncrono, na forma de eventos
* Para permitir somente o tratamento de um evento, pode-se utilizar o`EventoEmitter.once()` ao invés do`EventEmitter.on()`

```javascript
const EventEmitter = require('events') // importa a classe

class Users extends EventEmitter {
	userLogged(data) {
		this.emit('User logged', data) //ao chamar a função, emite um evento (funcao assíncrona)
	}
}

const users = new Users()

users.on('User logged', data => {
	console.log(data) // ao finalizar o evento 'User logged' (mudança estado promise), executa a funcao
})

users.userLogged({ user: 'User name'}) // chama a funcao que dispara o evento, passando um dado 
```



No browser, há o `EventTarget`, que funciona de forma semelhante, mas com menos recursos.
