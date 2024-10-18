import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
// Direct import from the ES module version

import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllItemReducer } from './reducers/itemReducer';

const rootReducer = combineReducers({
  getAllItemReducer:getAllItemReducer // Simplified object shorthand
});

const initialState = {};
const middleware = [thunk];

// Create the store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) // Correct application of middleware
);

export default store;
