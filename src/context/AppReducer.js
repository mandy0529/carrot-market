import {
  CLOSE_MODAL,
  HIDE_DOT,
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  ON_LOADING,
  SET_ERROR,
  SHOW_DOT,
  SHOW_MODAL,
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
  showDot: false,
  isModalOpen: false,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case ON_LOADING:
      return {...state, loading: true};

    case OFF_LOADING:
      return {...state, loading: false};

    case SET_ERROR:
      return {...state, error: {state: true, text: action.payload}};

    case SHOW_DOT:
      return {...state, showDot: true};

    case HIDE_DOT:
      return {...state, showDot: false};

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

    case SHOW_MODAL:
      return {...state, isModalOpen: true};

    case CLOSE_MODAL:
      return {...state, isModalOpen: false};

    default:
      throw new Error(`not matched any ${action.type}`);
  }
};

export default AppReducer;
