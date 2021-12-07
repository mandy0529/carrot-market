import {
  CLOSE_MODAL,
  EMPTY_FORM,
  HIDE_DOT,
  LOGIN_AUTH,
  LOGOUT_AUTH,
  OFF_LOADING,
  ON_LOADING,
  PUT_FORM_TO_DB,
  SET_ERROR,
  SET_ERROR_FILE,
  SET_FILE,
  SHOW_DOT,
  SHOW_MODAL,
  UPDATE_FILTERS,
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
  file: {
    data: '',
    message: '',
  },
  valueContent: {
    title: '',
    category: '',
    price: '',
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

    case SET_FILE:
      return {
        ...state,
        file: {
          ...state.file,
          data: action.payload,
          message: 'succeed  upload ',
        },
      };

    // case SET_ERROR_FILE:
    //   return {
    //     ...state,
    //     file: {
    //       ...state.file,
    //       data: null,
    //       error: true,
    //       message: 'please upload file format (png /jpeg)',
    //     },
    //   };

    case UPDATE_FILTERS:
      const {name, value} = action.payload;
      return {...state, valueContent: {...state.valueContent, [name]: value}};

    case EMPTY_FORM:
      return {
        ...state,
        valueContent: {
          ...state.valueContent,
          title: '',
          category: '',
          price: '',
          text: '',
        },
      };

    // case PUT_FORM_TO_DB:
    //   const {newForm} = action.payload;
    //   if (newForm) {
    //     console.log(newForm, 'new form context');
    //   }

    //   return {...state, valueContent: {...state.valueContent}};
    default:
      throw new Error(`not matched any ${action.type}`);
  }
};

export default AppReducer;
