import { act, cleanup, render, screen } from '@testing-library/react';
import App, { Login } from './App';

test('renders react app', () => {
  render(<App />);

  expect(screen.getByText('Hello, React')).toBeInTheDocument();
});

test('renders Login Page', () => {

  act(() => {
    render(<Login />);
  })

  expect(screen.getByText('id')).toBeInTheDocument();
  expect(screen.getByText('password')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();

  act(() => {
    render(<Login saveInfo={true} />);
  });

  expect(screen.getByText('admin')).toBeInTheDocument();
})