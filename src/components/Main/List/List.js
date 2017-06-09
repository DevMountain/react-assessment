import React, { Component } from "react";
import './List.css';

import Task from './Task/Task';
import { connect } from 'react-redux';

import { getTasks } from '../../../ducks/tasks';

class List extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const { tasks } = this.props;

    const Tasks = tasks.map( task => (
      <Task key={ task.id } id={ task.id } title={ task.title } completed={ task.completed } />
    ));

    return (
      <div id="List__container">
        <div id="List__tasksContainer">
          { Tasks }
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    tasks: state.tasks
  }
}

export default connect( mapStateToProps, { getTasks } )( List );