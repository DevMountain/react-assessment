import React, { Component } from 'react';
import './App.css';
import {getList} from './ducks/reducer';
import {connect} from 'react-redux';
/* Components */
import {BrowserRouter as Router} from 'react-router-dom';
import router from './router';

class App extends Component {

  componentDidMount(){
    this.props.getList();
  }

  componentWillReceiveProps(nextProps){
    this.props.getList();
  }

  render() {
    return (
      <Router>
        {router}
      </Router>
    );
  }
}

function mapStateToProps(state){
  const {list} = state;
  return {
    list
  }
}

export default connect(mapStateToProps,{getList})(App);
