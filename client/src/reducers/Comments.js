import {
  ADD_COMMENT_RESPONSE,
  FETCH_COMMENTS_RESPONSE,
  DELETE_COMMENT_RESPONSE,
  UPDATE_COMMENT_RESPONSE
} from "constants/ActionTypes"

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS_RESPONSE:
      return action.result;
    case ADD_COMMENT_RESPONSE:
      return [
        ...state,
        action.result
      ];
    case DELETE_COMMENT_RESPONSE:
      let index = state.findIndex((value) => {
        if(value.id === action.result.id) {
          return true;
        }
      });
      state.splice(index, 1);
      return [...state];
    case UPDATE_COMMENT_RESPONSE:
      let value = state.findIndex((value) => {
        if(value.id === action.result.id) {
          return true;
        }
      });
      state.splice(index, 1, action.result);
      return [...state];
    default:
      return state;
  }
}