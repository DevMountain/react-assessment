import React from "react";
import './Task.css';

import { connect } from "react-redux";
import { removeTask, completeTask } from '../../../../ducks/tasks';

function Task( { id, title, completed, removeTask, completeTask } ) {
  return (
    <div className={"Task__container " + ( completed ? "completed" : "")}>
      <span> { title } </span>
      <span id="Task__complete" onClick={ () => completeTask( id ) }> Complete </span> 
      <span id="Task__delete" onClick={ () => removeTask( id ) }> Delete </span>
    </div>
  )
}

export default connect( state => state, { removeTask, completeTask } )( Task );