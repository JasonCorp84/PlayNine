import React, { Component } from 'react';
import Game from './components/Game'
import './App.css';
import './components/style/index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />  
      </div>
    );
  }
}

export default App;
