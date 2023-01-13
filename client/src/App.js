import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './components/Note.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        	<h2 className = "App-header-text">NoterLITE<img src={logo} className="App-logo" alt="logo" /></h2>
        </div>
        
        <div>
        	<Note/>
        </div>
      </div>
    );
  }
}

export default App;
