import {combineReducers} from 'redux';
import News from './News';
import User from './User';

const reducers = combineReducers({
  news: News,
  user: User
});

export default reducers;