const initialState = {
  tasks: []
}

const GET_TASKS = "GET_TASKS";
const ADD_TASK = "ADD_TASK";
const PATCH_TASK = "PATCH_TASK";
const DELETE_TASK = "DELETE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";

export default function tasks( state = initialState, action ) {
  console.log('State', state);
  console.log('Action', action);
  switch( action.type ) {
    case GET_TASKS + "_FULFILLED":
      return {
        tasks: action.payload
      }
    case ADD_TASK + "_FULFILLED":
      return {
        tasks: action.payload
      }
    case PATCH_TASK + "_FULFILLED": 
      return {
        tasks: action.payload
      }
    case DELETE_TASK + "_FULFILLED":
      return {
        tasks: action.payload
      }
    case COMPLETE_TASK + "_FULFILLED":
      return {
        tasks: action.payload
      }
    default: return state;
  }
}

export function getTasks( promise ) {
  return {
    type: GET_TASKS,
    payload: promise
  }
}

export function addTask( promise ) {
  return {
    type: ADD_TASK,
    payload: promise
  }
}

export function patchTask( promise ) {
  return {
    type: PATCH_TASK,
    payload: promise
  }
} 

export function deleteTask( promise ) {
  return {
    type: DELETE_TASK,
    payload: promise
  }
}

export function completeTask( promise ) {
  return {
    type: COMPLETE_TASK,
    payload: promise
  }
}