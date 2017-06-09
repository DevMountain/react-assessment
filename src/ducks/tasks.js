const port = 3005;
const apiURL = `http://localhost:${port}/api/tasks/`;

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

export function getTasks() {
  const promise = axios.get( apiURL ).then( response => response.data );
  return {
    type: GET_TASKS,
    payload: promise
  }
}

export function addTask( title ) {
  const promise = axios.post( apiURL, { title } ).then( response => response.data );
  return {
    type: ADD_TASK,
    payload: promise
  }
}

export function patchTask( id, obj ) {
  const promise = axios.patch( apiURL + id, obj ).then( response => response.data );
  return {
    type: PATCH_TASK,
    payload: promise
  }
} 

export function deleteTask( id ) {
  const promise = axios.delete( apiURL + id ).then( response => response.data );
  return {
    type: DELETE_TASK,
    payload: promise
  }
}

export function completeTask( id ) {
  const promise = axios.put( apiURL + id ).then( response => response.data );
  return {
    type: COMPLETE_TASK,
    payload: promise
  }
}