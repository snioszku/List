import * as api from '../fake_api';
import receiveTodos from './receiveTodos';
import { requestTodos } from './requestTodos';
import { getIsFetching } from '../Reducers/createList';

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  dispatch(requestTodos(filter));
  return api
    .fetchTodos(filter)
    .then(response => dispatch(receiveTodos(filter, response)));
};
