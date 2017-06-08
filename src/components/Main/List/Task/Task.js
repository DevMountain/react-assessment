import React from "react";
import './Task.css';

import { dispatchDeleteTask } from '../../../../services/task_service';
import { Link } from 'react-router-dom';

export default function Task( { id, title, completed } ) {
  return (
      <div className={"Task__container " + (completed ? 'complete' : '') }>
        <Link id="Task__link" to={ `details/${id}` }>
          <span> { title } </span>
        </Link>
        <span id="Task__delete" onClick={ () => dispatchDeleteTask( id ) }> x </span>
      </div>
  )
}
