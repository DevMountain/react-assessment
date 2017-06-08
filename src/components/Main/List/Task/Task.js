import React from "react";
import './Task.css';

export default function Task( { id, title, remove, complete, isComplete } ) {
  return (
    <div className={"Task__container " + (isComplete ? "completed" : '')}>
      <span> { title } </span>
      <span id="Task__complete" onClick={ () => complete( id ) }> Complete </span>
      <span id="Task__delete" onClick={ () => remove( id ) }> Delete </span>
    </div>
  )
}