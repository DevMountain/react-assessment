import React from "react";
import './Task.css';

export default function Task( { id, title, remove } ) {
  return (
    <div id="Task__container">
      <span> { title } </span>
      <span id="Task__delete" onClick={ () => remove( id ) }> x </span>
    </div>
  )
}