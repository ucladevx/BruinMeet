import { combineReducers } from 'redux';
import login from './login';
import meetup from './meetup';

const reducers = combineReducers({
  login,
  meetup
})

export default reducers;
