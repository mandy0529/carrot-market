import React, {useContext, useReducer} from 'react';
import {CLOSE_MODAL, SHOW_MODAL} from '../utils/action';
import AppReducer, {initialState} from '../reducers/AppReducer';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const openModal = (e) => {
    const url = e.target.src;
    dispatch({type: SHOW_MODAL, payload: url});
  };

  const closeModal = () => {
    dispatch({type: CLOSE_MODAL});
  };

  const handleClick = (event) => {
    const {nodeName} = event.target;
    if (nodeName === 'IMG') {
      return;
    }
    closeModal();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openModal,
        closeModal,
        handleClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
