import { createStore } from 'redux';

import { loadState, saveState } from './localStorage';

import throttle from 'lodash/throttle';
import rootReducer from './Reducers/index';
const configureStore = () => {
  const presistedState = loadState();
  const store = createStore(rootReducer, presistedState);
  store.subscribe(
    throttle(() => {
      saveState({ todos: store.getState().todos });
    }, 1000),
  );
  return store;
};
export default configureStore;
