import {
    SET_TOKEN
   } from '../actions/types';
   
   const initialState = {
       token : null
   };
   
   export default (state = initialState, action) => {
     switch (action.type) {
       case SET_TOKEN:
         return {
           ...state,
           token: action.payload
         };
       default:
         return state;
     }
   };
   