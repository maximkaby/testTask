import {
  SEARCH_DEVELOPER_RESPONSE
} from "constants/ActionTypes"

export default (state = [], action) => {
  switch (action.type) {
    case SEARCH_DEVELOPER_RESPONSE:
      return action.result;
    default:
      return state;
  }
}