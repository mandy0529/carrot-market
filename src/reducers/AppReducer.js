import {CLOSE_MODAL, OFF_LOADING, SHOW_MODAL} from '../utils/action';

export const initialState = {
  showDot: false,
  isModalOpen: false,
  targetUrl: '',
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case OFF_LOADING:
      return {...state, loading: false};

    case SHOW_MODAL:
      return {...state, isModalOpen: true, targetUrl: action.payload};

    case CLOSE_MODAL:
      return {...state, isModalOpen: false};

    default:
      throw new Error(`not matched any ${action.type}`);
  }
};

export default AppReducer;
