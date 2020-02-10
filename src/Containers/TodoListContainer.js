import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../Components/TodoList';
import toggleTodo from '../ActionCreators/ToogleTodo';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.filter),
}); //todos:todos - jak te same nazwy key value tomozna pominac value

const mapDispatchToProps = dispatch => {
  return { onToogleTodo: id => dispatch(toggleTodo(id)) };
};
const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
