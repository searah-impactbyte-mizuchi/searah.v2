import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import allReducer from './reducers';

const initialState = {};

const middleware = [thunk, logger];

const store = createStore(
    allReducer,
    initialState,
    compose(
        applyMiddleware(
          thunk,
          logger
        ),
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
