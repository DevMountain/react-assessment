import React, { Component } from 'react';
import { getAllTasks, addTask, resetWizard, deleteTask, markCompleted } from './../../ducks/reducer';
import { connect } from 'react-redux';
import './List.css';
import Check from '../Check/Check';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskTitle: this.props.taskObject.title || ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendTask = this.sendTask.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.props.getAllTasks();
  }

  componentWillReceiveProps() {
    this.reset();
  }

  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }

  sendTask() {
    this.props.taskObject.title = this.state.taskTitle;

    this.props.addTask(this.props.taskObject);
  }

  reset() {
    this.setState({
      taskTitle: ''
    })
  }

  render() {
    const { taskTitle } = this.state;
    const tasks = this.props.tasks;
    const taskList = tasks.map((task, i) => {
      return (
        <div key={i}>
          <div className='item'>
            <div className='start'>
              <Check checkedOff={tasks[i].completed} />
              <p>{task.title}</p>
            </div>
            <div className='end'>
              <button onClick={() => {
                if (tasks[i].completed === false) {
                  this.props.markCompleted(tasks[i].id)
                }
              }}>Complete</button>
              <button onClick={() => this.props.deleteTask(tasks[i].id)}>X</button>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className='list'>
        <div className='top'>
          <h1>To-Do:</h1>
          <h4>Add Task</h4>
          <input type="text" value={taskTitle} onChange={(e) => this.handleChange('taskTitle', e.target.value)} />
          <button className='add' onClick={() => {
            if (this.state.taskTitle === '' || this.state.taskTitle === null) {
              alert('Please add a title');
            } else {
              this.sendTask();
            }
          }}>Add new To-do</button>
        </div>
        {taskList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    taskObject: state.taskObject
  }
}

const mapDispatchToProps = { getAllTasks, addTask, resetWizard, deleteTask, markCompleted }

export default connect(mapStateToProps, mapDispatchToProps)(List);