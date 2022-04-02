import { render, screen } from '@testing-library/react';
import App, { Login } from './App';

test('renders react app', () => {
  render(<App />);

  expect(screen.getByText('Hello, React')).toBeInTheDocument();
});

test('renders Login Page', () => {
  render(<Login />);

  expect(screen.getByText('id')).toBeInTheDocument();
  expect(screen.getByText('password')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
})