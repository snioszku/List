const addTodoReducer = (state = [], action) => {
  if (action.type === 'ADD_TODO') {
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false,
      },
    ];
  } else if (action.type === 'TOGGLE_TODO') {
    return state.map(todo => {
      if (todo.id === action.id) {
        return Object.assign({}, todo, {
          completed: !todo.completed,
        });
      }
      return todo;
    });
  } else {
    return state;
  }
};

export default addTodoReducer;
