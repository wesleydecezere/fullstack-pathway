import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an input field and an button', () => {
  render(<App />);
  const inputEl = screen.getByRole('textbox');
  const buttonEl = screen.getByRole('button');
  expect(inputEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
})
