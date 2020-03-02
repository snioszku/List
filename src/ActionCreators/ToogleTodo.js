import * as api from '../fake_api/index';
import { normalize } from 'normalizr';
import * as Schema from './Schema';
const toggleTodo = id => dispatch =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: 'TOOGLE_TODO',
      response: normalize(response, Schema.todo),
    });
  });

export default toggleTodo;
