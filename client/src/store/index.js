import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/index';
import NewsMiddleware from '../middleware/NewsMiddleware';
import UserMiddleware from '../middleware/UserMiddleware';

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    applyMiddleware(
      NewsMiddleware,
      UserMiddleware
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