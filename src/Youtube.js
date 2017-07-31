import React, { Component } from 'react';

const API = ''
var Youtube   = React.createClass({
  render () {
    return (
    <div>
      <div className = "youtube">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/c9V3FBJ8FoA"
        frameBorder="0"
        allowFullScreen>
        </iframe>

      </div>
      <button>Get youtube video</button>
    </div>
    )
  }
})


export default Youtube;
