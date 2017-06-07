import React, { Component } from "react";
import './AddTask.css';

export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( event ) {
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <div id="AddTask__container">
        <input id="AddTask__input" placeholder="Task Title" value={ title } onChange={ this.handleChange } />
        <button id="AddTask__btn"> Add </button>
      </div>
    )
  }
}
