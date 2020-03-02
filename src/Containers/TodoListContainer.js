import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../Components/TodoList';
import toggleTodo from '../ActionCreators/ToogleTodo';
import { withRouter } from 'react-router';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../Reducers';
import { fetchTodos } from '../ActionCreators/fetchTodos';
import FetchError from '../Components/Error';

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
    const { todos, onToogleTodo, errorMessage, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      );
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
    errorMessage: getErrorMessage(state, filter || 'all'),
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
