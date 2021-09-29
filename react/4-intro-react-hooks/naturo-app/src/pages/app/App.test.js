import { render, screen, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { App } from './App'

const response = { speaker: 'Speaker', quote: 'test quote' }
const server = setupServer(
  rest.get('http://localhost:5000', (req, res, ctx) => {
    return res(ctx.json(response))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders the app, with a button, an image and a quote', () => {
  render(<App />)

  const buttonEl = screen.getByRole('button')
  const imageEl = screen.getByRole('img')
  const textEl = screen.getByText(/loading speaker/i)

  expect(buttonEl).toBeInTheDocument()
  expect(imageEl).toBeInTheDocument()
  expect(textEl).toBeInTheDocument()
})

test('calls api on button click and update its text', async () => {
  render(<App />)

  const buttonEl = screen.getByRole('button')
  fireEvent.click(buttonEl)
  const quoteEl = await screen.findByText(response.quote)

  expect(quoteEl).toBeInTheDocument()
})

test('calls api on startup and renders it response', async () => {
  render(<App />)

  const quoteEl = await screen.findByText(response.quote)

  expect(quoteEl).toBeInTheDocument()
})
