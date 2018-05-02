import {
  FETCH_TASKS_REQUEST,
  ADD_TASK_REQUEST,
  CHANGE_STATUS_TASK_REQUEST,
  SET_DEVELOPER_TASK_REQUEST
} from "constants/ActionTypes";

export const fetchTasks = (projectId) => {
  return {
    type: FETCH_TASKS_REQUEST,
    projectId
  }
}

export const addTask = (title, description, projectId) => {
  return {
    type: ADD_TASK_REQUEST,
    title,
    description,
    projectId
  }
}

export const changeStatus = (taskId, status) => {
  return {
    type: CHANGE_STATUS_TASK_REQUEST,
    taskId,
    status
  }
}

export const setDeveloper = (developerId, taskId) => {
  return {
    type: SET_DEVELOPER_TASK_REQUEST,
    developerId,
    taskId
  }
}