import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Add task', () => {
  test('when the input value isn\'t empty and clicks on the input button or types enter, adds it as a task-item', () => {
    render(<App />);
    const buttonEl = screen.getByRole('button');
    const textboxEl = screen.getByRole('textbox');
    const inputValue = 'My task';

    fireEvent.input(textboxEl, { target: { value: inputValue } });
    fireEvent.click(buttonEl)
    fireEvent.keyDown(textboxEl, { key: 'Enter' });
    const taskEls = screen.queryAllByText(inputValue);

    expect(taskEls.length).toBe(2);
  });
  test('when the input value is empty and clicks on the input button or types enter, doesn\'t act', () => {
    render(<App />);
    const buttonEl = screen.getByRole('button');
    const textboxEl = screen.getByRole('textbox');
    const inputValue = '';

    fireEvent.input(textboxEl, { target: { value: inputValue } });
    fireEvent.click(buttonEl)
    fireEvent.keyDown(textboxEl, { key: 'Enter' });
    const taskEls = screen.queryAllByRole('checkbox');

    expect(taskEls.length).toBe(0);
  });
})
