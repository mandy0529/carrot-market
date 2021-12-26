import {
  EDIT_MODE,
  EMPTY_FORM,
  NO_EDIT_MODE,
  SET_ERROR_FILE,
  SET_FILE,
  UPDATE_FILTERS,
} from '../utils/action';

export const ProductsInitialState = {
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

  editMode: false,
  editId: '',
  like: 0,
};

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case SET_FILE:
      return {
        ...state,
        file: {
          ...state.file,
          data: action.payload,
          message: 'succeed  upload ',
        },
      };

    case SET_ERROR_FILE:
      return {
        ...state,
        file: {
          ...state.file,
          data: null,
          message: 'please upload file format (png /jpeg)',
        },
      };

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
        file: {
          ...state.file,
          data: '',
          message: '',
        },
        editMode: false,
        editId: '',
      };

    case EDIT_MODE:
      const {title, category, price, text, url, id} = action.payload;
      return {
        ...state,
        valueContent: {
          ...state.valueContent,
          title,
          category,
          price,
          text,
          url,
        },
        editId: id,
        editMode: true,
      };

    case NO_EDIT_MODE:
      return {
        ...state,
        editMode: false,
      };

    default:
      throw new Error(`not matched any ${action.type}`);
  }
};

export default ProductsReducer;
