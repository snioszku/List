import { createStore, applyMiddleware } from 'redux';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import rootReducer from './Reducers/index';

const logger = store => next => action => {
  console.log('action:', action);
  next(action);
  console.log('state after', store.getState());
};

const configureStore = () => {
  const presistedState = loadState();
  const store = createStore(
    rootReducer,
    presistedState,
    applyMiddleware(logger),
  );
  store.subscribe(
    throttle(() => {
      saveState({ todos: store.getState().todos });
    }, 1000),
  );
  return store;
};
export default configureStore;
