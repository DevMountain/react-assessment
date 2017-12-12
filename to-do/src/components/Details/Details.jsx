import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateTemporaryTask, updateTask, deleteTask} from '../../ducks/reducer';

class Details extends Component{
  constructor(props){
    super(props);
    this.state = {
      flag: true
    }
  }

  componentDidMount(){
    const {match, list, updateTemporaryTask} = this.props;
    if(list.length !==0 && this.state.flag){
      const {params} = match;
      const filteredTask = list.filter(task=>task.id==params.id);
      const task = filteredTask[0];
      updateTemporaryTask(task);
      this.setState({flag: false});
    }
  }

  componentWillReceiveProps(nextProps){
    const {match, list, updateTemporaryTask} = nextProps;
    if(list.length !==0 && this.state.flag){
      const {params} = match;
      const filteredTask = list.filter(task=>task.id==params.id);
      const task = filteredTask[0];
      updateTemporaryTask(task);
      this.setState({flag: false});
    }
  }

  render(){
    const {match, list, tempTask, updateTemporaryTask} = this.props;
    const {params} = match;
    const filteredTask = list.filter(task=>task.id==params.id);
    const task = filteredTask[0];

    return (
      <section>
        <Link to='/'>
          <h2>Go back</h2>
        </Link>
        <h5>Task</h5>
        <input type='text' value={tempTask.title} onChange={(e)=>updateTemporaryTask({title: e.target.value})}/>
        <h5>Description</h5>
        <input type='text' value={tempTask.description} onChange={(e)=>updateTemporaryTask({description: e.target.value})}/>
        <Link to='/'>
          <button onClick={()=>updateTask(task.id, tempTask)}>save</button>
        </Link>
        <button onClick={()=>updateTemporaryTask(task)}>cancel</button>
        <Link to='/'>
          <button onClick={()=>deleteTask(task.id)}>delete</button>
        </Link>
      </section>
    );
  }
}

function mapStateToProps(state){
  const {list, tempTask} = state;
  return{
    list,
    tempTask
  }
}

export default connect(mapStateToProps, {deleteTask, updateTemporaryTask, updateTask})(Details);
