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
    composeWithDevTools(applyMiddleware(thunk,logger))
);

export default store;
