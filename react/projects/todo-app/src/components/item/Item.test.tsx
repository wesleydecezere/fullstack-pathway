import { render, screen } from '@testing-library/react';
import { Item } from './Item';

test('renders an checkbox and it\'s label', () => {
  const itemContent = 'Item 1';

  render(<Item>{itemContent}</Item>);
  const checkboxEl = screen.getByRole('checkbox');
  const labelEl = screen.getByText(itemContent);
  expect(checkboxEl).toBeInTheDocument();
  expect(labelEl).toBeInTheDocument();
})