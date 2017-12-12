import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateTemporaryTask, createNewTask, completeTask, deleteTask} from '../../ducks/reducer';

function displayList(list, updateTemporaryTask, deleteTask){
  return list.map((task, index)=>{
    return (
      <li key={index} style={{'marginBottom': '30px'}}>
        <h3>{task.title}</h3><section onClick={()=>completeTask(task.id)}>{task.completed?'Complete':'Not Complete'}</section>
        <Link to={`/details/${task.id}`}>
          <button onClick={()=> updateTemporaryTask(task)}>view details</button>
        </Link>
        <button onClick={()=> deleteTask(task.id)}>delete</button>
      </li>
    );
  });
}

function List(props){
  const {list, updateTemporaryTask, createNewTask, completeTask, deleteTask} = props;
  return (
    <main>
      <button onClick={()=>createNewTask({title: 'New Task', description: '', completed: false})}>add new to-do</button>
      <ul>
        {displayList(list, updateTemporaryTask, deleteTask, completeTask)}
      </ul>
    </main>
  );
}

function mapStateToProps(state){
  const {list} = state;
  return {
    list
  }
}

export default connect(mapStateToProps,{deleteTask, completeTask, createNewTask, updateTemporaryTask})(List);
