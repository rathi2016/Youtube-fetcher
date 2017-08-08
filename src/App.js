import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Youtube from'./Youtube';
import Calculator from './Calculator';
import FontAwesome from './FontAwesome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome Youtube Fetcher</h2>

        </div>
        <Youtube/>
   <Calculator/>
     <FontAwesome/>

      </div>



    );
  }
}

export default App;