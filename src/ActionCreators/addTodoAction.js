import { v4 } from 'node-uuid';

const addTodoAction = text => {
  return { type: 'ADD_TODO', text, id: v4(), completed: false };
};

export default addTodoAction;
