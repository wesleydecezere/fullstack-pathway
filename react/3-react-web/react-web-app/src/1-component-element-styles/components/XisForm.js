import React, { Component } from 'react'
import styled from 'styled-components'

const Options = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 10px;
`

const OptionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px;
`
const Form = styled.form``


class XisForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sabor: 'salada',
      adicionais: {
        fritas: false,
        bife: false,
        maionese: false
      },
      descartaveis: 'sim'
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleInputChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    let ans = name === 'adicionais' ? {
      [name]: {
        ...this.state.adicionais,
        [value]: target.checked
      }
    } : {
      [name]: value
    }

    console.log(ans)
    this.setState(ans)
  }

  handleSubmit(event) {
    const { sabor, adicionais, descartaveis } = this.state;
    alert('Seu sabor escolhido foi ' + sabor + ', adicionais ' + Object.entries(adicionais) + ' e descartaveis ' + descartaveis);
    event.preventDefault();
  }


  render() {

    return (
      <>
        <p>Escolha as opções do seu lanche.</p>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <label for='sabor'>Escolha um sabor: </label>
            <select id='sabor' name='sabor' value={this.state.sabor} onChange={this.handleInputChange}>
              <option value='salada'>Xis Salada</option>
              <option value='coracao'>Xis Coração</option>
              <option value='frango'>Xis Frango</option>
              <option value='tudo'>Xis Tudo</option>
            </select>
          </div>

          <Options>
            <OptionsBlock>
              <span>Adicionais</span>
              <label for='ad1'>
                <input type='checkbox' id='ad1' name='adicionais' value='fritas' checked={this.state.adicionais.fritas} onChange={this.handleInputChange} />
                Fritas no lanche
              </label>
              <label for='ad2'>
                <input type='checkbox' id='ad2' name='adicionais' value='bife' checked={this.state.adicionais.bife} onChange={this.handleInputChange} />
                Bife Extra
              </label>
              <label for='ad3'>
                <input type='checkbox' id='ad3' name='adicionais' value='maionese' checked={this.state.adicionais.maionese} onChange={this.handleInputChange} />
                Potinho de maionese
              </label>
            </OptionsBlock>

            <OptionsBlock>
              <span>Descartáveis</span>
              <label>
                <input type='radio' id='descartaveis' name='descartaveis' value='sim' checked={this.state.descartaveis === 'sim'} onChange={this.handleInputChange} />
                Sim
              </label>
              <label>
                <input type='radio' id='descartaveis' name='descartaveis' value='nao' checked={this.state.descartaveis === 'nao'} onChange={this.handleInputChange} />
                Não
              </label>
            </OptionsBlock>
          </Options>


          <input type="submit" value="Enviar" />
        </Form>
      </>
    )
  }
}

export default XisForm