import * as api from '../fake_api/index';
const addTodoAction = text => dispatch =>
  api.addTodo(text).then(response => {
    dispatch({ type: 'ADD_TODO_SUCCES', response });
  });

export default addTodoAction;
