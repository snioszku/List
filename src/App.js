import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './Reducers/store';
import AddTodoContainer from './Containers/AddTodoContainer';

import TodoListContainer from './Containers/TodoListContainer';
import Footer from './Components/Footer';
import { saveState } from './localStorage';
import throttle from 'lodash/throttle';
function App() {
  store.subscribe(
    throttle(() => {
      saveState({ todos: store.getState().todos });
    }, 1000),
  );

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
