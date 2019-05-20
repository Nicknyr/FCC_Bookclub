import React from 'react';
import NavigationBar from './components/Nav';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Join from './components/Join.js';
import Landing from './components/Landing.js';
import Features from './components/Features.js';
import Review from './components/Review.js';
import About from './components/About.js';
import {
  faCheckSquare,
  faCoffee,
  faBookReader,
  faUsers,
  faThumbsUp,
  faArrowRight,
  faComment } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

library.add(fab, faCheckSquare, faCoffee, faBookReader, faUsers, faThumbsUp, faArrowRight, faComment);

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
      <About />
      <Features />
      <Review />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
