const express = require('express')

// criação do servidor
const app = express()

app.set('view engine', 'ejs') // ferramenta para utilizar o HTML é o EJS

app.get('/', function (req, res) {
  const items = [
    {
      title: 'O',
      message: 'tempo não está bom :/'
    },
    {
      title: 'V',
      message: 'ivo com medo de chuva...'
    },
    {
      title: 'O',
      message: 'MG, hoje não vou sair de casa!'
    }
  ]
  const subtitle = 'A pipa do vovô não some mais'

  res.render('pages/index', {
    combs: items,
    subtitle: subtitle
  })
}) // criação de uma rota

app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

app.listen(8080) // roda o servidor na porta 8080
console.log('running...')