import React from 'react'

function Title(props) {
  const { content, children } = props

  return (
    <h1>{children}</h1>
  )
}

export default Title