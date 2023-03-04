import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './login';

function App() {
  const handleLogin = (username: string, password: string) => {
    // This function will handle the login logic
    // You can add your own implementation here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
