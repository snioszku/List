import React from 'react';

import './App.css';

import AddTodoContainer from './Containers/AddTodoContainer';

import TodoListContainer from './Containers/TodoListContainer';
import Footer from './Components/Footer';

function App({ match }) {
  return (
    <div className="App">
      <AddTodoContainer />
      <TodoListContainer filter={match.params.filter || 'all'} />
      <Footer />
    </div>
  );
}

export default App;
