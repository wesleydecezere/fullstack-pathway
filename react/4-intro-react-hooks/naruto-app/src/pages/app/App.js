import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import narutoImg from '../../images/naruto.png'
import jutsoSound from '../../sounds/jutso.mp3'
import { Quotes } from '../../components'
import { getQuote } from '../../services'

const audio = new Audio(jutsoSound)

export function App() {
  const isMounted = useRef(true)

  const [quoteState, setQuoteState] = useState({
    quote: 'Loading Quote...',
    speaker: 'Loading Speaker...'
  })

  useEffect(() => {
    onUpdate()

    return () => {
      isMounted.current = false
    }
  }, [])

  const onUpdate = async () => {
    const quote = await getQuote()

    if (isMounted.current) {
      audio.play()
      setQuoteState(quote)
    }
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