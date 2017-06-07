import apiURL from '../api';
import axios from 'axios';
import store from '../store';

import { getTasks, addTask, patchTask, deleteTask, completeTask } from '../ducks/tasks';

export function dispatchGetTasks() {
  const promise = axios.get( apiURL ).then( response => response.data );
  return store.dispatch( getTasks( promise ) );
}

export function dispatchAddTask( title ) {
  const promise = axios.post( apiURL, { title } ).then( response => response.data );
  return store.dispatch( addTask( promise ) );
}

export function dispatchPatchTask( id, obj ) {
  const promise = axios.patch( apiURL + id, { task: obj } ).then( response => response.data );
  return store.dispatch( patchTask( promise ) );
}

export function dispatchDeleteTask( id ) {
  const promise = axios.delete( apiURL + id ).then( response => response.data );
  return store.dispatch( deleteTask( promise ) );
}

export function dispatchCompleteTask( id ) {
  const promise = axios.put( apiURL + id ).then( response => response.data );
  return store.dispatch( completeTask( promise ) );
}