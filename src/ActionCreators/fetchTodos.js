import * as api from '../fake_api';
import receiveTodos from './receiveTodos';

export const fetchTodos = filter =>
  api.fetchTodos(filter).then(response => receiveTodos(filter, response));
