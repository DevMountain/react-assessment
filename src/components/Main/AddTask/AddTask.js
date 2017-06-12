import React, { Component } from "react";
import './AddTask.css';

import { connect } from "react-redux";
import { addTask } from '../../../ducks/tasks';

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind( this );
    this.add = this.add.bind( this );
  }

  handleChange( event ) {
    this.setState({ title: event.target.value });
  }

  add() {
    const { title } = this.state;
    const { addTask } = this.props;
    if ( title.length !== 0 ) {
      addTask( title );
      this.setState({ title: '' });
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div id="AddTask__container">
        <input id="AddTask__input" placeholder="Task Title" value={ title } onChange={ this.handleChange } />
        <button id="AddTask__btn" onClick={ this.add }> Add </button>
      </div>
    )
  }
}

export default connect( state => state, { addTask } )( AddTask );
