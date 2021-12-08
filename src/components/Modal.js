import React from 'react';
import {IoMdClose} from 'react-icons/io';
import {useGlobalContext} from '../context/AppContext';
import {Wrapper} from '../style/modal';

const Modal = ({url}) => {
  const {isModalOpen, closeModal, handleClick} = useGlobalContext();

  return (
    <Wrapper onClick={handleClick}>
      <div className={`modal ${isModalOpen && 'openModal'}`}>
        <div className="box">
          <img className="modal-image" src={url} alt="name" />
          <button onClick={closeModal} className="close-btn">
            <IoMdClose />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
