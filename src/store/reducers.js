import { combineReducers } from 'redux';
import user from './user/reducer';

export const reducers = {
  user
};

export default combineReducers(reducers);
