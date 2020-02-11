import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../Components/TodoList';
import toggleTodo from '../ActionCreators/ToogleTodo';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../Reducers';

const mapStateToProps = (
  state,
  {
    match: {
      params: { filter },
    },
  },
) => ({
  todos: getVisibleTodos(state, filter || 'all'),
});

const mapDispatchToProps = dispatch => {
  return { onToogleTodo: id => dispatch(toggleTodo(id)) };
};
const TodoListContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoList),
);

export default TodoListContainer;
