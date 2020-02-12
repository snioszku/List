import { combineReducers } from 'redux';
import todos, * as fromAddTodoReducer from './addTodoReducer';

const rootReducer = combineReducers({
  todos,
});
export default rootReducer;
export const getVisibleTodos = (state, filter) => {
  return fromAddTodoReducer.getVisibleTodos(state.todos, filter);
};
