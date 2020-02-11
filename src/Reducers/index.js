import { combineReducers } from 'redux';
import addTodoReducer, * as fromAddTodoReducer from './addTodoReducer';

const rootReducer = combineReducers({
  todos: addTodoReducer,
});
export default rootReducer;
export const getVisibleTodos = (state, filter) => {
  return fromAddTodoReducer.getVisibleTodos(state.todos, filter);
};
