import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'src/redux/reducers/index';

const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));
}
