import {
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  ON_LOADING,
  SET_ERROR,
} from '../utils/action';

export const UserinitialState = {
  loading: true,
  user: {
    name: '',
    photo: '',
    email: '',
    id: '',
  },
  error: {
    state: false,
    text: '',
  },
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case ON_LOADING:
      return {...state, loading: true};

    case OFF_LOADING:
      return {...state, loading: false};

    case SET_ERROR:
      return {...state, error: {state: true, text: action.payload}};

    case LOGIN_AUTH:
      const {displayName, photoURL, email, uid} = action.payload;
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
          id: uid,
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

export default UserReducer;
