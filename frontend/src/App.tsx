// import React from 'react';
// import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import ScrollToTop from 'react-scroll-to-top';

import './App.css';
import { Chat } from './componets/Chat';
import { Welcome } from './componets/Welcome';


function App() {

  return (
      <Container className="mt-5 text-center w-75">
        <ScrollToTop smooth/>
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
