import React from 'react';
import logo from './logo.svg';
import './App.scss';
import BestSellers from './components/BestSellers.js';
import NavigationBar from './components/Nav';
import Jumbotron from './components/Jumbotron';
import { Container, Row, Col } from 'reactstrap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Jumbotron />
        <Container>
          <BestSellers />
        </Container>
      <Footer />
    </div>
  );
}

export default App;
