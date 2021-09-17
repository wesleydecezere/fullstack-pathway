import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <p>Olá! Selecione a aula abaixo:</p>
      <p>
        <Link to='/styles-state-forms'>Aula 1</Link>
        <span>: styles, state e forms</span>
      </p>
      <p>
        <Link to='/redux-and-arch'>Aula 2</Link>
        <span>: redux and architecture</span>
      </p>
      <p>
        <Link to='/'>Aula 3</Link>
        <span>: </span>
      </p>
      <p>
        <Link to='/'>Aula 4</Link>
        <span>: </span>
      </p>

    </>
  )
}


export default Home