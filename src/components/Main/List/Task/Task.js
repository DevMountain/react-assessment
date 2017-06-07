import React from "react";
import './Task.css';

export default function Task( { id, title } ) {
  return (
    <div id="Task__container">
      <span> { title } </span>
      <span id="Task__delete"> x </span>
    </div>
  )
}