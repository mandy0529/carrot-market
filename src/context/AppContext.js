import React, {useContext, useReducer, useState} from 'react';
import {auth, db, googleAuth, storage, timestamp} from '../firebase';
import useFirestore from '../hooks/useFileStore';
import {imgTypes} from '../utils/helper';
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
import AppReducer, {initialState} from './AppReducer';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [preview, setPreview] = useState(null);

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

  const editProduct = () => {
    console.log('edited!');
  };

  const deleteProduct = () => {
    console.log('deleted!');
  };

  const showDotPopUp = () => {
    dispatch({type: SHOW_DOT});
  };

  const hideDotPopUp = () => {
    dispatch({type: HIDE_DOT});
  };

  const openModal = () => {
    dispatch({type: SHOW_MODAL});
  };

  const closeModal = () => {
    dispatch({type: CLOSE_MODAL});
  };

  const handleClick = (event) => {
    const {nodeName} = event.target;
    if (nodeName === 'IMG') {
      return;
    }
    closeModal();
  };

  const handleImgUpload = (e) => {
    let selected = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const data = finishedEvent.currentTarget.result;
      setPreview(data);
    };
    reader.readAsDataURL(selected);
    dispatch({type: SET_FILE, payload: selected});
  };

  const updateValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch({type: UPDATE_FILTERS, payload: {name, value}});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('sumitted');
    console.log(
      {value: state.valueContent, data: state.file.data},
      'state file'
    );

    const imgStorage = storage.ref(state.file.data.name);
    const collectionRef = db.collection('images');
    imgStorage.put(state.file.data).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log(percentage, 'percentage');
      },
      (error) => {
        console.log(error);
      },
      async () => {
        const url = await imgStorage.getDownloadURL();
        const createdAt = timestamp();
        const formObj = {
          title: state.valueContent.title,
          category: state.valueContent.category,
          price: state.valueContent.price,
          text: state.valueContent.text,
        };
        collectionRef.add({
          url,
          createdAt,
          title: formObj.title,
          category: formObj.category,
          price: formObj.price,
          text: formObj.text,
        });
        console.log(url, 'url');
      }
    );
  };

  // const putFormToDb = () => {
  //   db.collection('images')
  //     .orderBy('createAt', 'desc')
  //     .onSnapshot((item) => {
  //       const newForm = item.docs.map((item) => {
  //         return {
  //           id: item.id,
  //           title: item.data().title,
  //           category: item.data().category,
  //           text: item.data().text,
  //           price: item.data().price,
  //           createdAt: item.data().createdAt,
  //         };
  //       });
  //       dispatch({type: PUT_FORM_TO_DB, payload: newForm});
  //     });
  // };
  return (
    <AppContext.Provider
      value={{
        ...state,
        loginAuth,
        logoutAuth,
        stayLogin,
        editProduct,
        deleteProduct,
        showDotPopUp,
        hideDotPopUp,
        openModal,
        closeModal,
        handleClick,
        handleImgUpload,
        updateValue,
        handleSubmit,
        preview,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
