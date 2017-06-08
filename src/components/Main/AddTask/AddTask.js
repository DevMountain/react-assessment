import React, { Component } from "react";
import './AddTask.css';

export default class AddTask extends Component {
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
    const { add } = this.props;
    add( title );
    this.setState({ title: '' })
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
