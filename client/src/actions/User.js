import {
  FETCH_USER_REQUEST,
  REGISTER_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOGOUT_USER
} from "constants/ActionTypes";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const registerUser = (email, password, role, name, surname) => {
  return {
    type: REGISTER_USER_REQUEST,
    email,
    password,
    role,
    name,
    surname
  }
}

export const loginUser = (email, password) => {
  return {
    type: LOGIN_USER_REQUEST,
    email,
    password
  }
}

export const logout = () => {
  return {
    type: LOGOUT_USER
  }
}