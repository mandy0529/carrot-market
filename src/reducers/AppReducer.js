import {CLOSE_MODAL, HIDE_DOT, SHOW_DOT, SHOW_MODAL} from '../utils/action';

export const initialState = {
  showDot: false,
  isModalOpen: false,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case SHOW_DOT:
      return {...state, showDot: true};

    case HIDE_DOT:
      return {...state, showDot: false};

    case SHOW_MODAL:
      return {...state, isModalOpen: true};

    case CLOSE_MODAL:
      return {...state, isModalOpen: false};

    default:
      throw new Error(`not matched any ${action.type}`);
  }
};

export default AppReducer;
