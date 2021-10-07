import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

test('renders a button and an input field', () => {
  render(<Input onSubmit={() => null} />);

  const buttonEl = screen.getByRole('button');
  const inputEl = screen.getByRole('textbox');

  expect(inputEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
})
describe('callback', () => {
  const inputValue = 'My task'
  let fn: jest.Mock;
  let inputEl: HTMLElement;

  beforeEach(() => {
    fn = jest.fn()

    render(<Input onSubmit={fn} />);
    inputEl = screen.getByRole('textbox');
    fireEvent.input(inputEl, { target: { value: inputValue } })
  })

  test('when clicks on the button, calls the callback with input value as param', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(fn).toHaveBeenCalledTimes(1);
  })

  test('when types enter in the textbox, the callback with input value as param', () => {
    fireEvent.keyDown(inputEl, { key: 'Enter' });
    expect(fn).toBeCalledWith(inputValue);
  })
})