import { connect } from 'react-redux';

import TodoList from '../Components/TodoList';
import toggleTodo from '../ActionCreators/ToogleTodo';
import { VisibilityFilters } from '../ActionCreators/visibilityFilters';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.filter),
});

const mapDispatchToProps = dispatch => {
  return { onToogleTodo: id => dispatch(toggleTodo(id)) };
};
const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
