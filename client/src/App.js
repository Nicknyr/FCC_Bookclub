import React from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './components/Books.js';
import NavigationBar from './components/Nav';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Books />
    </div>
  );
}

export default App;
