import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import Projects from './Projects';
import User from './User';
import Tasks from './Tasks';
import Comments from './Comments';
import Developers from './Developers';

const reducers = combineReducers({
  routing: routerReducer,
  projects: Projects,
  tasks: Tasks,
  user: User,
  comments: Comments,
  developers: Developers
});

export default reducers;