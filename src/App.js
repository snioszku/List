import React from 'react';

import './App.css';

import { Provider } from 'react-redux';
import store from './Reducers/store';
import AddTodoContainer from './Containers/AddTodoContainer';

import TodoListContainer from './Containers/TodoListContainer';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddTodoContainer />
        <TodoListContainer />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
