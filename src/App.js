import React from 'react';

import './App.css';

import AddTodoContainer from './Containers/AddTodoContainer';

import TodoListContainer from './Containers/TodoListContainer';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <AddTodoContainer />
      <TodoListContainer />
      <Footer />
    </div>
  );
}

export default App;
