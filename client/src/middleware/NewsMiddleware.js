import $ from 'jquery';

export default store => next => action => {
  const result = next(action);
  switch (action.type) {
    case 'GET_NEWS_REQUEST':
      var url = 'http://iwd-team.ru/lp/data.json';

      $.ajax({
        type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'jsonCallback1',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
          console.log(json);
          store.dispatch({ type: 'GET_NEWS_RESPONSE', result: json });
        },
        error: function(e) {
          console.log(e.message);
        }
      });
      break;
  }
  return result;
}