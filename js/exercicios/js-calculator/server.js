const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 8080;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.render('/index')
})

app.listen(port, () => console.log(`Rodando na porta ${port}...`))
