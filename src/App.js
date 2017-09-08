import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Youtube from'./Youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome Youtube Search</h2>
        </div>
        <Youtube/>
      </div>
    );
  }
}

export default App;
