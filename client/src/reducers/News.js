export default (state = [], action) => {
  switch (action.type) {
    case 'GET_NEWS_RESPONSE':
      return action.result;
    default:
      return state;
  }
}