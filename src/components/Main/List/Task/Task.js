import React from "react";
import './Task.css';

import { connect } from "react-redux";
import { removeTask } from '../../../../ducks/tasks';

function Task( { id, title, removeTask } ) {
  return (
    <div id="Task__container">
      <span> { title } </span>
      <span id="Task__delete" onClick={ () => removeTask( id ) }> x </span>
    </div>
  )
}

export default connect( state => state, { removeTask } )( Task );