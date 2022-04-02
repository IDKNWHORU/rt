import './App.css';

function App() {
  return (
    <>
      <span>Hello, React</span>
    </>
  );
}

function Login({ onLoginButtonClick }) {
  return (
    <>
      <span>sign in</span>
      <label>
        id
        <input name="id" type="text" />
      </label>
      <label>
        password
        <input name="password" type="password" />
      </label>
      <button
        onClick={() => {
          onLoginButtonClick();
        }}
      >
        Login
      </button>
    </>
  );
}

export const isNotEmptyString = (value) => {
  return value !== '';
};

export const isAllocated = (value) => {
  return value != null;
};

export const isMinLength = (value, length) => {
  return value.length >= length;
};

export const isMaxLength = (value, length) => {
  return value.length <= length;
};

export const isSpecialCharacterIncludes = (value) => {
  const specialCharacter = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  return specialCharacter.test(value);
};

export default App;

export { Login };
