import {
  FETCH_PROJECTS_REQUEST,
  ADD_PROJECT_REQUEST,
  SET_CUR_PROJECT_ID,
  ADD_DEV_TO_PROJECT_REQUEST,
  SEARCH_DEVELOPER_REQUEST,
  FETCH_PROJECTS_DEV_REQUEST
} from "constants/ActionTypes";

export const fetchProjectsRequest = () => {
  return {
    type: FETCH_PROJECTS_REQUEST
  }
}

export const fetchProjectDev = () => {
  return {
    type: FETCH_PROJECTS_DEV_REQUEST
  }
}

export const addProject = (title) => {
  return {
    type: ADD_PROJECT_REQUEST,
    title
  }
}

export const setCurProjectId = (projectId) => {
  return {
    type: SET_CUR_PROJECT_ID,
    projectId
  }
}

export const addDeveloper = (projectId, developerId) => {
  return {
    type: ADD_DEV_TO_PROJECT_REQUEST,
    projectId,
    developerId
  }
}

export const searchDeveloper = (devName, devSurname) => {
  return {
    type: SEARCH_DEVELOPER_REQUEST,
    devName,
    devSurname
  }
}