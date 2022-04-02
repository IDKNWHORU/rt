import './App.css';

function App() {
  return (
    <>
      <span>
        Hello, React
      </span>
    </>)
    ;
}

function Login({ saveInfo }) {
  const autoLoadUserInfo = (saveInfo) => {
    if (saveInfo === true) {
      return <span>admin</span>
    } else {
      return null;
    }
  }

  return (
    <>
      <span>
        id
      </span>
      <span>
        password
      </span>
      <span>
        Login
      </span>
      {autoLoadUserInfo(saveInfo)}
    </>
  )
}

export default App;

export { Login };