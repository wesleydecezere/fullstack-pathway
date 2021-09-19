import React from 'react'
import styled from 'styled-components'
import XisForm from './components/XisForm'

const Body = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
`

const Forms = () => {
  return (
    <Body>
      <XisForm />
    </Body>
  )
}


export default Forms