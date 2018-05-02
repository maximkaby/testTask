import $ from 'jquery';
import Cookie from 'util/cookie';
import {
  SEARCH_DEVELOPER_REQUEST,
  SEARCH_DEVELOPER_RESPONSE,
  API_URL
} from 'constants/ActionTypes';

export default store => next => action => {
  const result = next(action);
  switch (action.type) {
    case SEARCH_DEVELOPER_REQUEST:
      fetch(API_URL + '/searchDeveloper', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${Cookie.getCookie('access_token')}`
        },
        body: JSON.stringify({
          dev_name: action.devName,
          dev_surname: action.devSurname
        })
      })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'SEARCH_DEVELOPER_RESPONSE');
        store.dispatch({ type: SEARCH_DEVELOPER_RESPONSE, result: res});
      });
      break;
  }

  return result;
}