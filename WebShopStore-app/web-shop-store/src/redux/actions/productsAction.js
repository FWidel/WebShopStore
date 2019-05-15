import {
    ADD_PRODUCTS,
    SHOW_PRODUCTS,
    DELETE_PRODUCTS
  } from './types';
  
  export const showProducts = () => {
    return { type: SHOW_PRODUCTS };
  };
  
  export const addProducts = products => dispatch => {
    dispatch({
      type: ADD_PRODUCTS,
      payload: products
    });
  };
  
  export const deleteProduct = id => dispatch => {
    dispatch({
      type: DELETE_PRODUCTS,
      payload: id
    });
  };

  
  