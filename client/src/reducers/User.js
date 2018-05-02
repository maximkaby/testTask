import {
  FETCH_USER_RESPONSE,
  REGISTER_USER_RESPONSE,
  LOGIN_USER_RESPONSE,
  LOGOUT_USER
} from "constants/ActionTypes";
import Cookie from 'util/cookie';


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_RESPONSE:
      return {
        ...action.result,
        login: true
      };
    case REGISTER_USER_RESPONSE:
      return {
        ...action.result,
        isAuth: true,
        login: false
      };
    case LOGIN_USER_RESPONSE:
      Cookie.setCookie('access_token', action.result.token, {
        expires: 360000
      });
      return {
        ...state,
        login: true
      };
    case LOGOUT_USER:
      Cookie.deleteCookie('access_token');
      return {};
    default:
      return state;
  }
}