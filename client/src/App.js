import React from 'react';
import BestSellers from './components/BestSellers.js';
import NavigationBar from './components/Nav';
import Jumbotron from './components/Jumbotron';
import { Container, Row, Col } from 'reactstrap';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Join from './components/Join.js';
import Landing from './components/Landing.js';
import './App.scss';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
        {/*
          <Container>
            <BestSellers />
          </Container>
          */}
      <Join />
      <Footer />
    </div>
  );
}

export default App;
