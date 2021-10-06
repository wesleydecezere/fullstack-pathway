import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds an task item when clicks on the button and when types enter', () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  const textboxEl = screen.getByRole('textbox');

  fireEvent.click(buttonEl)
  fireEvent.keyDown(textboxEl, { key: 'Enter' });
  const taskEls = screen.queryAllByRole('checkbox');

  expect(taskEls.length).toBe(2)
});
