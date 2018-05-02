import $ from 'jquery';
import Cookie from 'util/cookie';
import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_RESPONSE,
  ADD_PROJECT_RESPONSE,
  ADD_PROJECT_REQUEST,
  ADD_DEV_TO_PROJECT_REQUEST,
  ADD_DEV_TO_PROJECT_RESPONSE,
  FETCH_PROJECTS_DEV_REQUEST,
  FETCH_PROJECTS_DEV_RESPONSE,
  API_URL
} from 'constants/ActionTypes';

export default store => next => action => {
  const result = next(action);
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      // debugger;
      fetch(API_URL + '/getUserProjects', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        }
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'FETCH_PROJECTS_RESPONSE');
        store.dispatch({ type: FETCH_PROJECTS_RESPONSE, result: res});
      });
      break;
    case ADD_PROJECT_REQUEST:
      fetch(API_URL + '/addProject', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          title: action.title
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res, 'ADD_PROJECT_RESPONSE');
          store.dispatch({ type: ADD_PROJECT_RESPONSE, result: res});
        });
      break;
    case ADD_DEV_TO_PROJECT_REQUEST:
      fetch(API_URL + '/addProjectDeveloper', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          project_id: action.projectId,
          developer_id: action.developerId
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'ADD_DEV_TO_PROJECT_RESPONSE');
        store.dispatch({ type: ADD_DEV_TO_PROJECT_RESPONSE, result: res});
      });
      break;
    case FETCH_PROJECTS_DEV_REQUEST:
      fetch(API_URL + '/getDevProjects', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          project_id: action.projectId,
          developer_id: action.developerId
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'ADD_DEV_TO_PROJECT_RESPONSE');
        store.dispatch({ type: FETCH_PROJECTS_DEV_RESPONSE, result: res});
      });
      break;
  }

  return result;
}