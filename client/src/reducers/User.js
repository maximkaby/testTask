const initialState = {
  "first_name": '',
  "last_name": '',
  "points": 28549
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_RESPONSE':
      return action.result;
    default:
      return state;
  }
}