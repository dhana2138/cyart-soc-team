import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Team 4 attack path intelligence console', () => {
  render(<App />);
  expect(screen.getByText(/Attack Path Intelligence Console/i)).toBeInTheDocument();
});
