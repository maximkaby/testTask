import $ from 'jquery';

export default store => next => action => {
  const result = next(action);
  switch (action.type) {
    case 'GET_USER_REQUEST':
      var url = 'http://iwd-team.ru/lp/user.json';

      $.ajax({
        type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
          console.log(json, 'user');
          store.dispatch({ type: 'GET_USER_RESPONSE', result: json });
        },
        error: function(e) {
          console.log(e.message);
        }
      });
      break;
  }
  return result;
}