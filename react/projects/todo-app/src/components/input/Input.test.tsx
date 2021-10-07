import { render, screen, fireEvent, createEvent } from '@testing-library/react';
import { Input } from './Input';

test('renders an input field and an button', () => {
  render(<Input onSubmit={() => null} />);

  const inputEl = screen.getByRole('textbox');
  const buttonEl = screen.getByRole('button');

  expect(inputEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
})
test('calls a given function when click on the button', () => {
  const fn = jest.fn();

  render(<Input onSubmit={fn} />);
  const buttonEl = screen.getByRole('button');
  fireEvent.click(buttonEl);

  expect(fn).toHaveBeenCalledTimes(1);
})
test('calls a given function on keydown event in the textbox', () => {
  const fn = jest.fn();

  render(<Input onSubmit={fn} />);
  const inputEl = screen.getByRole('textbox');
  fireEvent.keyDown(inputEl, { key: 'Enter' });

  expect(fn).toHaveBeenCalledTimes(1);
})
test('calls a given function with the input value as param', () => {
  const fn = jest.fn()
  const inputValue = 'My task'

  render(<Input onSubmit={fn} />);
  const inputEl = screen.getByRole('textbox');
  fireEvent.input(inputEl, { target: { value: inputValue } })
  fireEvent.keyDown(inputEl, { key: 'Enter' });

  expect(fn).toBeCalledWith(inputValue);
})