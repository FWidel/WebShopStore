import {
    SET_TOKEN,
    GET_TOKEN
   } from './types';
   

 
   export const setToken = (token) => {

    if(token == null) {
        localStorage.removeItem("authorization");
    }else{
     localStorage.setItem("authorization", token);
    }
     return {
       type: SET_TOKEN,
       payload: token
     };
   };

   export const getToken = () => {
    return { type: GET_TOKEN };
  };
   