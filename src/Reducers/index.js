import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromCreateList from './createList';

// const todo = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false,
//       };
//     case 'TOGGLE_TODO':
//       if (state.id !== action.id) {
//         return state;
//       }
//       return {
//         ...state,
//         completed: !state.completed,
//       };
//     default:
//       return state;
//   }
//};

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
