import {
  FETCH_PROJECTS_RESPONSE,
  ADD_PROJECT_RESPONSE,
  ADD_DEV_TO_PROJECT_RESPONSE,
  SET_CUR_PROJECT_ID,
  FETCH_PROJECTS_DEV_RESPONSE
} from "constants/ActionTypes";

const initialState = {
  curProjectId: -1,
  projects: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_RESPONSE:
      return {
        curProjectId: action.result[0].id,
        projects: action.result
      };
    case FETCH_PROJECTS_DEV_RESPONSE:
      return {
        curProjectId: action.result[0].id,
        projects: action.result
      }
    case ADD_PROJECT_RESPONSE:
      if(state.projects.length === 0)
        state.curProjectId = action.result.id;
      return {
        ...state,
        projects: [
          ...state.projects,
          action.result
        ]
      };
    case SET_CUR_PROJECT_ID:
      return {
        ...state,
        curProjectId: action.projectId,
      };
    case ADD_DEV_TO_PROJECT_RESPONSE:
      let projectIndex = state.projects.findIndex(project => {
        if(project.id === action.result.id)
          return true;
      });
      state.projects.slice(projectIndex, 1, action.result);

      return {
        ...state
      };
    default:
      return state;
  }
}