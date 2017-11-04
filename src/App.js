import React, { Component } from 'react';
import Youtube from'./Youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className= "header-text">
            <h2> VideoSearch </h2>
          </div>
        </div>
        <Youtube/>
      </div>
    );
  }
}

export default App;
