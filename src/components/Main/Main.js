import React, { Component } from "react";
import './Main.css';

import AddTask from './AddTask/AddTask';
import List from './List/List';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      taskID: 0
    }

    this.addTask = this.addTask.bind( this );
    this.removeTask = this.removeTask.bind( this );
  }

  addTask( title ) {
    const { tasks, taskID } = this.state;
    this.setState({ tasks: [ ...tasks, { id: taskID, title } ], taskID: taskID + 1 });
  }

  removeTask( id ) {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter( task => task.id !== id ) });
  }

  render() {
    return (
      <div id="Main__container">
        <div id="Main__header">
          <span> To Do </span>
        </div>

        <AddTask add={ this.addTask } />
        <List tasks={ this.state.tasks } remove={ this.removeTask } />
      </div>
    )
  }
}