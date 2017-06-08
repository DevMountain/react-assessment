import React from "react";
import './List.css';

import Task from './Task/Task';

export default function List( { tasks, remove } ) {
  return (
    <div id="List__container">
      <div id="List__tasksContainer">
        {
          tasks.map( task => (
            <Task key={ task.id } title={ task.title } remove={ remove } id={ task.id } />
          ))
        }
      </div>
    </div>
  )
}