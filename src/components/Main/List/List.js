import React from "react";
import './List.css';

import Task from './Task/Task';

export default function List( { tasks } ) {
  return (
    <div id="List__container">
      <div id="List__tasksContainer">
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
        <Task title="Manual Task" />
      </div>
    </div>
  )
}