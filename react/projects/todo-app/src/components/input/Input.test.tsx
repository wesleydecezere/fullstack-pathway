import { render, screen } from '@testing-library/react';
import { Input } from './Input';

test('renders an input field and an button', () => {
  render(<Input />);
  const inputEl = screen.getByRole('textbox');
  const buttonEl = screen.getByRole('button');
  expect(inputEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
})