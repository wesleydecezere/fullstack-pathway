import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

test('renders an input field and an button', () => {
  render(<Input />);

  const inputEl = screen.getByRole('textbox');
  const buttonEl = screen.getByRole('button');

  expect(inputEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
})
test('calls an given function when click on the button', () => {
  const fn = jest.fn();

  render(<Input onSubmit={fn} />);
  const buttonEl = screen.getByRole('button');
  fireEvent.click(buttonEl);

  expect(fn).toHaveBeenCalledTimes(1);
})
test('calls an given function on keydown event in the textbox', () => {
  const fn = jest.fn();

  render(<Input onSubmit={fn} />);
  const inputEl = screen.getByRole('textbox');
  fireEvent.keyDown(inputEl);

  expect(fn).toHaveBeenCalledTimes(1);
})