import React, {useContext, useEffect, useReducer} from 'react';
import {useState} from 'react/cjs/react.development';
import {imgTypes} from '../utils/helper';
import ProductsReducer, {
  ProductsInitialState,
} from '../reducers/ProductsReducer';
import {db, storage, timestamp} from '../firebase';
import {
  EDIT_MODE,
  EMPTY_FORM,
  SET_ERROR_FILE,
  SET_FILE,
  UPDATE_FILTERS,
} from '../utils/action';

const ProductsContext = React.createContext();

const ProductsProvider = ({children}) => {
  const [state, dispatch] = useReducer(ProductsReducer, ProductsInitialState);
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState([]);

  const handleCollection = () => {
    db.collection('images')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({...doc.data(), id: doc.id});
        });
        setImages(documents);
      });
  };

  const editProduct = async (item) => {
    dispatch({type: EDIT_MODE, payload: item});
  };

  const handleEditSubmit = async () => {
    const id = state.editId;
    const {title, price, text, category} = state.valueContent;
    await db.doc(`images/${id}`).update({
      title,
      price,
      text,
      category,
    });
  };

  const deleteProduct = async (item) => {
    const {id, url} = item;
    await db.doc(`images/${id}`).delete();
    await storage.refFromURL(url).delete();
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

  const handleSubmit = (user) => {
    const {title, category, price, text} = state.valueContent;
    const {name, photo, email, id} = user;
    const userObj = {
      name,
      photo,
      email,
      id,
    };
    const formObj = {
      title,
      category,
      price,
      text,
    };

    // to firebase storage
    const imgStorage = storage.ref(state.file.data.name);
    const collectionRef = db.collection('images');
    imgStorage.put(state.file.data).on(
      'state_changed',
      (snap) => {},
      (error) => {
        console.log(error);
      },
      async () => {
        const url = await imgStorage.getDownloadURL();
        const createdAt = timestamp();

        collectionRef.add({
          url,
          createdAt,
          title: formObj.title,
          category: formObj.category,
          price: formObj.price,
          text: formObj.text,
          userId: userObj.id,
          profile: userObj.photo,
          userName: userObj.name,
        });
      }
    );
  };

  const emptyForm = () => {
    dispatch({type: EMPTY_FORM});
    setPreview('');
  };

  useEffect(() => {
    handleCollection();
    return () => handleCollection();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        preview,
        editProduct,
        deleteProduct,
        handleImgUpload,
        handleSubmit,
        emptyForm,
        updateValue,
        images,
        handleEditSubmit,
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
