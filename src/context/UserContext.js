import React, {useContext, useReducer} from 'react';
import {auth, googleAuth} from '../firebase';
import UserReducer, {UserinitialState} from '../reducers/UserReducer';
import {
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  ON_LOADING,
  SET_ERROR,
} from '../utils/action';

const UserContext = React.createContext();

const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, UserinitialState);

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
    <UserContext.Provider
      value={{
        ...state,
        loginAuth,
        logoutAuth,
        stayLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
