import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from './components/Main/Main';
import Details from './components/Details/Details';

export default (
  <Switch>
    <Route component={ Main } path="/" exact />
    <Route component={ Details } path="/details/:id" />
  </Switch>
)