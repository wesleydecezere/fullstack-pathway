import { useState } from 'react'
import Button from '../Button'
import './index.css'

const Card = () => {
  const [value, setValue] = useState(0)

  function Adicionar() {
    setValue(value + 1)
  }

  function Subtrair() {
    setValue(value - 1)
  }

  function Zerar() {
    setValue(0)
  }

  return (
    <div className="card">
      <div className="card-header">
        Meu primeiro card
      </div>
      <div className="card-body">
        <p>{value}</p>
        <div className='card-buttons'>
          <Button className="btn-danger" onClick={Subtrair}>Subtrair</Button>
          <Button className="btn-light" onClick={Zerar}>Zerar</Button>
          <Button className="btn-success" onClick={Adicionar}>Adicionar</Button>
        </div>
      </div>
    </div>
  )
}

export default Card