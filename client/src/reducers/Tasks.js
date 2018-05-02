import {
  FETCH_TASKS_RESPONSE,
  ADD_TASK_RESPONSE,
  CHANGE_STATUS_TASK_RESPONSE,
  SET_DEVELOPER_TASK_RESPONSE
} from "constants/ActionTypes";

const initialState = {
  tasks: [],
  tasksById: new Map()
};

export default (state = initialState, action) => {
  let taskIndex;
  switch (action.type) {
    case FETCH_TASKS_RESPONSE:
      return {
        tasks: action.result,
        tasksById: action.result.reduce((map, task) => {
          map.set(task.id, task);
          return map;
        }, new Map())
      };
    case ADD_TASK_RESPONSE:
      state.tasks.push(action.result);
      state.tasksById.set(action.result.id, action.result);
      return {
        ...state
      }
    case CHANGE_STATUS_TASK_RESPONSE:
      taskIndex = state.tasks.findIndex(task => {
        if(task.id === action.result.id)
          return true;
      });
      state.tasks.slice(taskIndex, 1, action.result);
      state.tasksById.set(action.result.id, action.result);
      return {
        ...state
      };
    case SET_DEVELOPER_TASK_RESPONSE:
      taskIndex = state.tasks.findIndex(task => {
        if(task.id === action.result.id)
          return true;
      });
      state.tasks.slice(taskIndex, 1, action.result);
      state.tasksById.set(action.result.id, action.result);
      return {
        ...state
      };

    default:
      return state;
  }
}