import { useState } from 'react'
import styled from 'styled-components'
import narutoImg from '../../images/naruto.png'
import { Quotes } from '../../components'
import { getQuote } from '../../services'

export function App() {
  const [quoteState, setQuoteState] = useState({
    quote: 'Ok Google',
    speaker: 'Speaker'
  })

  const onUpdate = async () => {
    const quote = await getQuote()

    setQuoteState(quote)
  }

  return (
    <Content>
      <Quotes
        quote={quoteState.quote}
        speaker={quoteState.speaker}
        onUpdate={onUpdate} />
      <NarutoImg src={narutoImg} alt='Naruto' />
    </Content>
  )
}

const Content = styled.div`
  box-sizing: border-box;
  height: 100vh;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`