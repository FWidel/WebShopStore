import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import cartReducer from '../reducers/cartReducer';
import sortingReducer from '../reducers/sortingReducer';
import productsReducer from '../reducers/productsReducer';
import userReducer from '../reducers/userReducer';
import authReducer from '../reducers/authReducer';



const rootReducer = combineReducers({
  cart: cartReducer,
  sorting: sortingReducer,
  products : productsReducer,
  user : userReducer,
  auth : authReducer
});

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
