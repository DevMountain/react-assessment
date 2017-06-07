import React, { Component } from 'react';
import './App.css';

import router from '../router';

class App extends Component {
  render() {
    return (
      <div id="App__container">
        { router }
      </div>
    );
  }
}

export default App;
