import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Title from './Title'

import './styles.css'

const soma = (a, b) => {
  alert(a + b)
}

const App = () => {
  return (
    <div className='App'>
      <Title>Titulo</Title>
      <Button onClick={() => soma(10, 20)} name='Clique aqui' />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)