import React from "react";
import './Task.css';

import { dispatchDeleteTask } from '../../../../services/task_service';
import { Link } from 'react-router-dom';

export default function Task( { id, title, completed } ) {
  return (
      <div className={"Task__container " + (completed ? 'complete' : '') }>
        <Link className={"Task__link " + (completed ? 'complete' : '') } to={ `details/${id}` }>
          <span> { title } </span>
        </Link>
        <span id="Task__delete" onClick={ () => dispatchDeleteTask( id ) }> x </span>
      </div>
  )
}
