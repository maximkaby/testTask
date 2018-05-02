import $ from 'jquery';
import Cookie from 'util/cookie';
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_RESPONSE,
  ADD_TASK_REQUEST,
  ADD_TASK_RESPONSE,
  CHANGE_STATUS_TASK_REQUEST,
  CHANGE_STATUS_TASK_RESPONSE,
  SET_DEVELOPER_TASK_REQUEST,
  SET_DEVELOPER_TASK_RESPONSE,
  API_URL
} from 'constants/ActionTypes';

export default store => next => action => {
  const result = next(action);
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      fetch(API_URL + '/getTasksProject', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          projectId: action.projectId
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'FETCH_TASKS_RESPONSE');
        store.dispatch({ type: FETCH_TASKS_RESPONSE, result: res});
      });
      break;
    case ADD_TASK_REQUEST:
      fetch(API_URL + '/addTask', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          title: action.title,
          description: action.description,
          projectId: action.projectId
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'ADD_TASK_RESPONSE');
        store.dispatch({ type: ADD_TASK_RESPONSE, result: res});
      });
      break;
    case CHANGE_STATUS_TASK_REQUEST:
      fetch(API_URL + '/setStatusTask', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          task_id: action.taskId,
          status: action.status
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'CHANGE_STATUS_TASK_RESPONSE');
        store.dispatch({ type: CHANGE_STATUS_TASK_RESPONSE, result: res});
      });
      break;
    case SET_DEVELOPER_TASK_REQUEST:
      fetch(API_URL + '/setDeveloperTask', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          task_id: action.taskId,
          developer_id: action.developerId
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'CHANGE_STATUS_TASK_RESPONSE');
        store.dispatch({ type: SET_DEVELOPER_TASK_RESPONSE, result: res});
      });
      break;
  }
  return result;
}