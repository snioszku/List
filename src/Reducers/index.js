import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromCreateList from './createList';

const idsByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
});
const todos = combineReducers({ byId, idsByFilter });

export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = fromCreateList.getIds(state.idsByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};
export const getIsFetching = (state, filter) =>
  fromCreateList.getIsFetching(state.idsByFilter[filter]);
export const getErrorMessage = (state, filter) =>
  fromCreateList.getErrorMessage(state.idsByFilter[filter]);
