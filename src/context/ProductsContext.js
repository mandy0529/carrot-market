import React, {useContext, useReducer} from 'react';
import {useState} from 'react/cjs/react.development';
import {SET_ERROR_FILE, SET_FILE, UPDATE_FILTERS} from '../utils/action';
import {imgTypes} from '../utils/helper';
import ProductsReducer, {
  ProductsInitialState,
} from '../reducers/ProductsReducer';

const ProductsContext = React.createContext();

const ProductsProvider = ({children}) => {
  const [state, dispatch] = useReducer(ProductsReducer, ProductsInitialState);
  const [preview, setPreview] = useState(null);

  const editProduct = () => {
    console.log('edited!');
  };

  const deleteProduct = () => {
    console.log('deleted!');
  };

  const handleImgUpload = (e) => {
    let selected = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const data = finishedEvent.currentTarget.result;
      setPreview(data);
    };
    reader.readAsDataURL(selected);
    if (selected && imgTypes.includes(selected.type)) {
      dispatch({type: SET_FILE, payload: selected});
    } else {
      dispatch({type: SET_ERROR_FILE});
    }
  };

  const updateValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch({type: UPDATE_FILTERS, payload: {name, value}});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        preview,
        editProduct,
        deleteProduct,
        handleImgUpload,
        updateValue,
        handleSubmit,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
