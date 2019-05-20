import { combineReducers } from 'redux';
import todos from './todos';
import input from './input';
import filter from './filter';

const rootReducer = combineReducers({ input, todos, filter });
export default rootReducer;
