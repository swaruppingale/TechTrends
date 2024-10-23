import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
// Direct import from the ES module version

import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllItemReducer } from './reducers/itemReducer';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer,loginUserReducer } from './reducers/userReducer'; 

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null; // Fixed typo

const rootReducer = combineReducers({
  getAllItemReducer:getAllItemReducer, // Simplified object shorthand
  cartReducer:cartReducer,
  registerUserReducer:registerUserReducer,
  loginUserReducer:loginUserReducer,
});

const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

const initialState = {
  cartReducer:{
    cartItems:cartItems
  },
  loginUserReducer:{
    currentUser:currentUser,
  }
};
const middleware = [thunk];

// Create the store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) // Correct application of middleware
);

export default store;
