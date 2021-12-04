import React, {useContext, useReducer} from 'react';
import {auth, googleAuth} from '../firebase';
import {
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  ON_LOADING,
  SET_ERROR,
} from './action';
import AppReducer, {initialState} from './AppReducer';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const loginAuth = async () => {
    dispatch({type: ON_LOADING});
    try {
      const {user} = await auth.signInWithPopup(googleAuth);
      dispatch({type: LOGIN_AUTH, payload: user});
    } catch (error) {
      dispatch({type: SET_ERROR, payload: error.message});
    }
  };

  const logoutAuth = async () => {
    dispatch({type: ON_LOADING});
    try {
      await auth.signOut();
      dispatch({type: LOGOUT_AUTH});
    } catch (error) {
      dispatch({type: SET_ERROR, payload: error.message});
    }
  };

  const stayLogin = () => {
    auth.onAuthStateChanged((user) => {
      if (user === null || user.displayName === '') {
        dispatch({type: OFF_LOADING});
      }
      if (user) {
        dispatch({type: LOGIN_AUTH, payload: user});
      }
    });
  };

  return (
    <AppContext.Provider value={{...state, loginAuth, logoutAuth, stayLogin}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
