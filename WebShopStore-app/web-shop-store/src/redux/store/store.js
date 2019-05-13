import { createStore, combineReducers} from 'redux';


import cartReducer from '../reducers/cartReducer';
import sortingReducer from '../reducers/sortingReducer';



const rootReducer = combineReducers({
  cart: cartReducer,
  sorting: sortingReducer
});

const initialState = {};

const store = createStore(
  rootReducer,
  initialState
);

export default store;
