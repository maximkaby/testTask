import $ from 'jquery';
import Cookie from 'util/cookie';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_RESPONSE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_RESPONSE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_RESPONSE,
  API_URL
} from 'constants/ActionTypes';

export default store => next => action => {
  const result = next(action);
  switch (action.type) {
    case FETCH_USER_REQUEST:
      fetch(API_URL + '/user', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        }
      }).then(res => {
        return res.json();
      }).then(res => {
        console.log(res, 'FETCH_USER_RESPONSE');
        store.dispatch({ type: FETCH_USER_RESPONSE, result: res});
      });
      break;
    case REGISTER_USER_REQUEST:
      fetch(API_URL + '/register', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          "email": action.email,
          "password": action.password,
          "role": action.role,
          "name": action.name,
          "surname": action.surname
        })
      }).then(res => {
        return res.json();
      }).then(res => {
        console.log(res, 'REGISTER_USER_RESPONSE');
        store.dispatch({ type: REGISTER_USER_RESPONSE, result: res});
      });
      break;
    case LOGIN_USER_REQUEST:
      fetch(API_URL + '/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          "email": action.email,
          "password": action.password
        })
      }).then(res => {
        return res.json();
      }).then(res => {
        console.log(res, 'LOGIN_USER_RESPONSE');
        store.dispatch({ type: LOGIN_USER_RESPONSE, result: res});
        store.dispatch({ type: FETCH_USER_REQUEST, result: res});
      });
      break;
  }
  return result;
}