// import React from 'react';
// import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";

// import LoginForm from './login';
import './App.css';
import { Chat } from './componets/Chat';
import { Welcome } from './componets/Welcome';

function App() {
  // const handleLogin = (username: string, password: string) => {
  //   // This function will handle the login logic
  //   // You can add your own implementation here
  //   console.log(`Logging in with username: ${username} and password: ${password}`);
  // };

  return (
    <Container className="mt-5 text-center">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/Home" element={<Welcome />}/>
          <Route path="/Chat" element={<Chat />}/>
        </Routes>
      </Router>
          
    </Container>
  );
}

export default App;
