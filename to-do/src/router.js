import React from 'react';
import {Route, Switch} from 'react-router-dom';
/* Components */
import List from './components/List/List';
import Details from './components/Details/Details';

export default (
  <Switch>
    <Route exact path='/' component={List}/>
    <Route path='/details/:id' component={Details}/>
  </Switch>
);
