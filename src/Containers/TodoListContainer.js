import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../Components/TodoList';
import toggleTodo from '../ActionCreators/ToogleTodo';
import { withRouter } from 'react-router';
import { getVisibleTodos, getIsFetching } from '../Reducers';
import { fetchTodos } from '../ActionCreators/fetchTodos';

class TodoListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }
  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { todos, onToogleTodo, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }

    return <TodoList onToogleTodo={onToogleTodo} todos={todos} />;
  }
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { filter },
    },
  },
) => {
  return {
    todos: getVisibleTodos(state, filter || 'all'),
    filter: filter || 'all',
    isFetching: getIsFetching(state, filter || 'all'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToogleTodo: id => dispatch(toggleTodo(id)),
    fetchTodos: filter => dispatch(fetchTodos(filter)),
  };
};
TodoListContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoListContainer),
);

export default TodoListContainer;
