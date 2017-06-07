import React from "react";
import './List.css';

import Task from './Task/Task';
import { connect } from 'react-redux';

function List( { tasks } ) {
  const Tasks = tasks.map( task => (
    <Task key={ task.id } id={ task.id } title={ task.title } />
  ));

  return (
    <div id="List__container">
      <div id="List__tasksContainer">
        { Tasks }
      </div>
    </div>
  )
}

function mapStateToProps( state ) {
  return {
    tasks: state.tasks
  }
}

export default connect( mapStateToProps )( List );