import React from "react";
import './Task.css';

import { connect } from "react-redux";
import { completeTask, deleteTask } from '../../../../ducks/tasks';
import { Link } from 'react-router-dom';

function Task( { id, title, completed, completeTask, deleteTask } ) {
  return (
      <div className={"Task__container " + (completed ? 'complete' : '') }>
        <Link className={"Task__link " + (completed ? 'complete' : '') } to={ `details/${id}` }>
          <span> { title } </span>
        </Link>
        <span id="Task__complete" onClick={ () => completeTask( id ) }> Complete </span>
        <span id="Task__delete" onClick={ () => deleteTask( id ) }> Delete </span>
      </div>
  )
}

export default connect( state => state, { completeTask, deleteTask } )( Task );
