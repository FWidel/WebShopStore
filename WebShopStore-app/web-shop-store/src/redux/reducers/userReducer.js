import {
   SHOW_USER_PANEL,
   SET_ACTIVE_PANEL
  } from '../actions/types';
  
  const initialState = {
    isOpen: false,
    active: 'log in'
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SHOW_USER_PANEL:
        return {
          ...state,
          isOpen: !state.isOpen
        };
        case SET_ACTIVE_PANEL:
        return {
          ...state,
          active: action.payload
        };
      default:
        return state;
    }
  };
  