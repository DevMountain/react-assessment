import React, { Component } from "react";
import './AddTask.css';

import { connect } from "react-redux";
import { dispatchAddTask } from "../../../services/task_service";

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
    if ( title.length !== 0 ) {
      dispatchAddTask( title );
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

export default connect( state => state )( AddTask );
