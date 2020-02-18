import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';

const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  return createStore(rootReducer, applyMiddleware(...middlewares));
};
export default configureStore;
