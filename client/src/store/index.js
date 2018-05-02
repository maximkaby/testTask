import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/index';
import ProjectsMiddleware from '../middleware/ProjectsMiddleware';
import TasksMiddleware from '../middleware/TasksMiddleware';
import UserMiddleware from '../middleware/UserMiddleware';
import CommentMiddleware from '../middleware/CommentMiddleware';
import DevelopersMiddleware from '../middleware/DevelopersMiddleware';

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    applyMiddleware(
      ProjectsMiddleware,
      UserMiddleware,
      TasksMiddleware,
      CommentMiddleware,
      DevelopersMiddleware
    )
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer)
    });
  }
  return store;
}