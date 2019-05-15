import {
   ADD_PRODUCTS,
   SHOW_PRODUCTS,
   DELETE_PRODUCTS
  } from '../actions/types';
  
  const initialState = {
    products: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SHOW_PRODUCTS:
        return {
          ...state
        };
      case ADD_PRODUCTS:
        return {
          ...state,
         products : action.payload
        };
        
      case DELETE_PRODUCTS:
        return {
          ...state,
          cartItems: state.products.filter(product => product.id !== action.payload)
        };

      default:
        return state;
    }
  };
  