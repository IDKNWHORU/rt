import { act, fireEvent, render, screen } from '@testing-library/react';
import App, {
  isAllocated,
  isMaxLength,
  isMinLength,
  isNotEmptyString,
  isSpecialCharacterIncludes,
  Login,
} from './App';

test('renders react app', () => {
  render(<App />);

  expect(screen.getByText('Hello, React')).toBeInTheDocument();
});

describe('Login Page test', () => {
  test('renders Login Page', () => {
    act(() => {
      render(<Login />);
    });

    const title = screen.getByText(/sign in/);
    const idLabel = screen.getByText('id');
    const passwordLabel = screen.getByText('password');
    const loginLabel = screen.getByText('Login');

    expect(title).toBeInTheDocument();
    expect(idLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(loginLabel).toBeInTheDocument();
  });

  test('input data', () => {
    act(() => {
      render(<Login />);
    });

    const idTextBox = screen.getByLabelText('id');
    const passwordTextBox = screen.getByLabelText('password');

    fireEvent.change(idTextBox, { target: { value: 'admin' } });
    expect(idTextBox.value).toBe('admin');

    fireEvent.change(passwordTextBox, { target: { value: '1234' } });
    expect(passwordTextBox.value).toBe('1234');
  });

  test('fire button click event', () => {
    const handleClick = jest.fn();
    act(() => {
      render(<Login onLoginButtonClick={handleClick} />);
    });
    const loginButton = screen.getByRole('button');

    fireEvent.click(loginButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  describe('validation test', () => {
    test('empty string test', () => {
      const emptyStringWillFalse = isNotEmptyString('');

      expect(emptyStringWillFalse).toBeFalsy();
    });

    test('allocate test', () => {
      const nullWillFalse = isAllocated(null);
      const undefinedWillFalse = isAllocated(undefined);
      const emptyStringWillTrue = isAllocated('');

      expect(nullWillFalse).toBeFalsy();
      expect(undefinedWillFalse).toBeFalsy();
      expect(emptyStringWillTrue).toBeTruthy();
    });

    test('length test', () => {
      const fourMinCharViolate = isMinLength('asdf', 5);
      const fiveMinCharPass = isMinLength('asdfg', 5);
      const elevenMaxCharViolate = isMaxLength('asdfghjkl;A', 10);
      const sevenMaxCharPass = isMaxLength('asdfghj', 10);

      expect(fourMinCharViolate).toBeFalsy();
      expect(fiveMinCharPass).toBeTruthy();
      expect(elevenMaxCharViolate).toBeFalsy();
      expect(sevenMaxCharPass).toBeTruthy();
    });

    test('special character includes test', () => {
      const alphabetViolate = isSpecialCharacterIncludes('abcdefg');
      const exclamationMarkPass = isSpecialCharacterIncludes('abcdefg!');

      expect(alphabetViolate).toBeFalsy();
      expect(exclamationMarkPass).toBeTruthy();
    });
  });
});
