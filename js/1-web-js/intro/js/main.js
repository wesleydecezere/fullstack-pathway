const nome = 'Wesley'
const lista = ['café', 'cacau', 'leite', 'canela', 'açúcar mascavo']
const pessoa = {
  nome: 'Carlos',
  idade: 34,
  usaCamisaPolo: true
}

//alert('Bem vindo, ' + nome)
console.log('Bem vindo, ' + nome)
console.log(lista)
console.log(lista.toString())
console.log(lista.join(', '))

lista[1] = 'nescau'
console.log(lista)

console.log(pessoa)

var n = 0;
while (n <= 5) {
  console.log(n++)
}

for (n; n <= 10; n++) {
  console.log(n)
}

var d = new Date();
console.log(d.getMonth())

console.log(1 + '-' + 1)

