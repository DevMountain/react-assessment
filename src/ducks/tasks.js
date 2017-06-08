const initialState = {
  tasks: [],
  taskID: 0
}

const ADD_TASK = "ADD_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const REMOVE_TASK = "REMOVE_TASK";

export default function tasks( state = initialState, action ) {
  switch( action.type ) {
    case ADD_TASK:
      return {
        tasks: [ ...state.tasks, { id: state.taskID, title: action.payload, description: "", completed: false } ],
        taskID: state.taskID + 1
      }
    case COMPLETE_TASK:
      const { tasks, taskID } = state;
      var i = tasks.findIndex( task => task.id === action.payload );;
      return {
        tasks: tasks.slice(0, i)
                .concat( Object.assign({}, tasks[i], { completed: true }) )
                .concat( tasks.slice(i + 1, tasks.length) ),
        taskID: taskID
      }
    case REMOVE_TASK:
      return {
        tasks: state.tasks.filter( task => task.id !== action.payload ),
        taskID: state.taskID
      }
    default: return state;
  }
}

export function addTask( title ) {
  return {
    type: ADD_TASK,
    payload: title
  }
}

export function completeTask( id ) {
  return {
    type: COMPLETE_TASK,
    payload: id
  }
}

export function removeTask( id ) {
  return {
    type: REMOVE_TASK,
    payload: id
  }
}