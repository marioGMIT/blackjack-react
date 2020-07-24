import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './root-reducer';

const logger = createLogger();

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;