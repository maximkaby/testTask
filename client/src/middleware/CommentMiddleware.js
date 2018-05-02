import $ from 'jquery';
import Cookie from 'util/cookie';
import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_RESPONSE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_RESPONSE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_RESPONSE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_RESPONSE,
  API_URL
} from 'constants/ActionTypes';

export default store => next => action => {
  const result = next(action);
  switch (action.type) {
    case ADD_COMMENT_REQUEST:
      console.log('ADD_COMMENT_REQUEST');
      fetch(API_URL + '/addComment', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          message: action.comment,
          user_id: action.userId,
          task_id: action.taskId
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'ADD_COMMENT_RESPONSE');
        store.dispatch({ type: ADD_COMMENT_RESPONSE, result: res});
      });
      break;
    case FETCH_COMMENTS_REQUEST:
      fetch(API_URL + '/getComments', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          task_id: action.taskId
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'FETCH_COMMENTS_REQUEST');
        store.dispatch({ type: FETCH_COMMENTS_RESPONSE, result: res});
      });
      break;
    case DELETE_COMMENT_REQUEST:
      fetch(API_URL + '/deleteComment', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          comment_id: action.commentId
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'FETCH_COMMENTS_REQUEST');
        store.dispatch({ type: DELETE_COMMENT_RESPONSE, result: res});
      });
      break;
    case UPDATE_COMMENT_REQUEST:
      fetch(API_URL + '/updateComment', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          comment_id: action.commentId,
          new_message: action.newMessage
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'UPDATE_COMMENT_RESPONSE');
        store.dispatch({ type: UPDATE_COMMENT_RESPONSE, result: res});
      });
      break;
  }

  return result;
}