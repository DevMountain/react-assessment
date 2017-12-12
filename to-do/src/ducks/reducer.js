import axios from 'axios'

const _FULFILLED            = '_FULFILLED'
    , GET_LIST              = 'GET_LIST'
    , CREATE_NEW_TASK       = 'CREATE_NEW_TASK'
    , UPDATE_TASK           = 'UPDATE_TASK'
    , DELETE_TASK           = 'DELETE_TASK'
    , COMPLETE_TASK         = 'COMPLETE_TASK'
    , UPDATE_TEMPORARY_TASK = 'UPDATE_TEMPORARY_TASK'
    , initialState    = {
      list: [],
      tempTask: {}
    };

export function updateTemporaryTask(taskObj){
  return {
    type: UPDATE_TEMPORARY_TASK,
    payload: taskObj
  }
}

export function getList(){
  let response = axios.get('https://practiceapi.devmountain.com/api/tasks')
    .then(res=>res.data);
  return {
    type: GET_LIST,
    payload: response
  };
};

export function createNewTask(taskObj){
  let response = axios.post('https://practiceapi.devmountain.com/api/tasks', taskObj)
    .then(res=>res.data);
  return {
    type: CREATE_NEW_TASK,
    payload: response
  };
};

export function updateTask(id, taskObj){
  const {title, description, completed} = taskObj;
  let response = axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {title, description, completed})
    .then(res=>res.data);
  return {
    type: UPDATE_TASK,
    payload: response
  };
};

export function deleteTask(id){
  let response = axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`)
    .then(res=>res.data);
  return {
    type: DELETE_TASK,
    payload: response
  };
};

export function completeTask(id){
  let response = axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`,{completed: true})
    .then(res=>res.data);
  return {
    type: COMPLETE_TASK,
    payload: response
  };
};

export default function reducer(state=initialState, action){
  const {type, payload} = action;
  switch (type) {
    case GET_LIST + _FULFILLED:
      return Object.assign({}, state, {list: payload});
    case CREATE_NEW_TASK + _FULFILLED:
      return Object.assign({}, state, {list: payload});
    case UPDATE_TASK + _FULFILLED:
      return Object.assign({}, state, {list: payload});
    case DELETE_TASK + _FULFILLED:
      return Object.assign({}, state, {list: payload});
    case COMPLETE_TASK + _FULFILLED:
      return Object.assign({}, state, {list: payload});
    case UPDATE_TEMPORARY_TASK:
      const newTemp = Object.assign({}, state.tempTask, payload)
      return Object.assign({}, state, {tempTask: newTemp});
    default:
      return state;
  }
}
