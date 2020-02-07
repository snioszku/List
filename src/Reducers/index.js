import { combineReducers } from 'redux';
import addTodoReducer from './addTodoReducer';
import visibilityFilterReducer from './visibilityFilerReducer';

const rootReducer = combineReducers({
  todos: addTodoReducer,
  filter: visibilityFilterReducer,
});
export default rootReducer;
