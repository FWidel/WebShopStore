import {
   SHOW_USER_PANEL,
   SET_ACTIVE_PANEL
  } from './types';
  
  export const showUserPanel = () => {
    return { type: SHOW_USER_PANEL };
  };

  export const setActivePanel = activePanel => {
    
    return {
      type: SET_ACTIVE_PANEL,
      payload: activePanel
    };
  };
  