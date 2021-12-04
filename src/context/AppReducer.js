import {
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  ON_LOADING,
  SET_ERROR,
} from './action';

export const initialState = {
  loading: true,
  user: {
    name: '',
    photo: '',
    email: '',
  },
  error: {
    state: false,
    text: '',
  },
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case ON_LOADING:
      return {...state, loading: true};

    case OFF_LOADING:
      return {...state, loading: false};

    case SET_ERROR:
      return {...state, error: {state: true, text: action.payload}};

    case LOGIN_AUTH:
      const {displayName, photoURL, email} = action.payload;
      return {
        ...state,
        loading: false,
        error: {
          state: false,
          text: '',
        },
        user: {
          ...state.user,
          name: displayName,
          photo: photoURL,
          email,
        },
      };

    case LOGOUT_AUTH:
      return {
        ...state,
        loading: false,
        error: {
          state: false,
          text: '',
        },
        user: {...state.user, name: '', photo: '', email: ''},
      };

    default:
      throw new Error(`not matched any ${action.type}`);
  }
};

export default AppReducer;
