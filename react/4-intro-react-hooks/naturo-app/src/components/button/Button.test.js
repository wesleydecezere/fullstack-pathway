import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'
import { Button } from './Button'

test('rebders button with text', () => {
  render(<Button>Test</Button>)

  const buttonEl = screen.getByText('Test')

  expect(buttonEl).toBeInTheDocument()
})

