import React, { Component } from 'react';
import Youtube from'./Youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Youtube Fetcher</h2>
        </div>
        <Youtube/>
      </div>
    );
  }
}

export default App;
