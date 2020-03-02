import * as api from '../fake_api/index';
import { normalize } from 'normalizr';
import * as Schema from './Schema';
const addTodoAction = text => dispatch =>
  api.addTodo(text).then(response => {
    dispatch({
      type: 'ADD_TODO_SUCCES',
      response: normalize(response, Schema.todo),
    });
  });

export default addTodoAction;
