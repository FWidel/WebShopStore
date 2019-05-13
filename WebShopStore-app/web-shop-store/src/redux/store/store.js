import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import cartReducer from '../reducers/cartReducer';
import sortingReducer from '../reducers/sortingReducer';



const rootReducer = combineReducers({
  cart: cartReducer,
  sorting: sortingReducer
});

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
