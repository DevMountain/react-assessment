import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import List from '../src/components/List/List';
import Item from '../src/components/Item/Item';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route component={List} exact path='/' />
          <Route component={Item} path='/item' />
        </div>
      </HashRouter>
    );
  }
}

export default App;
