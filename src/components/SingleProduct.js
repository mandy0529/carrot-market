import React from 'react';
import {AiOutlineLike} from 'react-icons/ai';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {MdDeleteOutline, MdOutlineEdit} from 'react-icons/md';
import {RiBearSmileLine} from 'react-icons/ri';
import styled from 'styled-components';
import {Modal} from '.';
import {useGlobalContext} from '../context/AppContext';
import {MdClose} from '../icons/icons';

function SingleProduct() {
  const {user, loading, showDotPopUp, hideDotPopUp, showDot, openModal} =
    useGlobalContext();
  const {name, photo} = user;

  if (loading) {
    return null;
  }

  return (
    <Wrapper>
      <Modal />
      <img
        onClick={openModal}
        className="product-img"
        src="assets/car.jpeg"
        alt="detail-img"
      />
      <span onClick={showDotPopUp} className="dot">
        <BsThreeDotsVertical />
      </span>
      <div className={`dot__popup ${showDot ? 'show' : ''}`}>
        <div className="dot__popup-list">
          <div className="dot__popup-option">
            <div className="control-btn" onClick={hideDotPopUp}>
              수정
            </div>
            <div className="control-btn" onClick={hideDotPopUp}>
              삭제
            </div>
          </div>
          <MdClose onClick={hideDotPopUp} className="close-btn" />
        </div>
      </div>
      <div className="detail__user">
        <div className="detail__user-info">
          <img src={photo} alt={name} />
          <div className="detail__user-pri">
            <h4>{name}</h4>
            <p>운서동</p>
          </div>
        </div>
        <div className="detail__icon">
          <RiBearSmileLine />
        </div>
      </div>
      <div className="detail__products">
        <h1>올드카</h1>
        <h4>스포츠/레저</h4>
        <p className="text">
          오래 된 올드카 입니다. 오래됐지만 주행하는데에는 아무 문제없습니다!
          직거래만 원하고, 오셔서 얼마든지 인스펙션 보셔도 됩니다. 장소는 운서
          카페거리입니다 !
        </p>
        <div className="interest">
          <div className="interest__list">
            <span>관심 1</span>
            <AiOutlineLike className="like__icon" />
          </div>

          <div className="detail__control">
            <MdOutlineEdit className="detail__control-icon" />
            <MdDeleteOutline className="detail__control-icon" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 6rem;
  min-height: 78vh;
  max-width: 40vw;
  margin: 2rem auto;
  text-align: center;
  .product-img {
    position: relative;
    object-fit: cover;
    overflow: hidden;
    max-width: 100%;
    min-width: 100%;
    border-radius: 10px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      transform: scale(0.98);
    }
  }
  .dot {
    display: none;
    position: absolute;
    top: 15%;
    right: 15%;
    color: white;
    z-index: 500;
    font-size: 1.7rem;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      color: #ffa468;
      transform: scale(0.97);
    }
  }
  .dot__popup {
    display: none;

    .dot__popup-list {
      display: flex;
      position: absolute;
      top: 6%;
      right: 3%;
      color: white;
      z-index: 500;
      font-size: 1.7rem;
      cursor: pointer;
      transition: all 0.2s linear;
      background: #ffa468;
      color: white;
      padding: 0.5rem;
      border-radius: 15px 15px 15px 0px;
      .close-btn {
        font-size: 1rem;
        border-radius: 5px;
        padding: 0.3rem;
        transition: all 0.2s linear;
        margin-left: 1rem;
        &:hover {
          background: white;
          color: #ffa468;
        }
      }
    }
    .control-btn {
      font-size: 1.3rem;
      margin: 0.3rem 0;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: black;
      }
    }
  }
  p,
  h4 {
    margin: 0.5rem;
  }
  .detail__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .detail__icon {
      font-size: 2rem;
      color: green;
    }
    .detail__user-info {
      display: flex;
      align-items: center;
      margin: 1rem 0;
    }
  }
  .detail__products {
    text-align: left;
    .text {
      margin: 1rem 0 0 0;
      min-width: 300px;
    }
    h4 {
      margin: 0;
    }
    .like__icon {
      font-size: 2rem;
      margin-left: 1rem;
      transition: all 0.2s linear;
      cursor: pointer;
      &:hover {
        opacity: 1;
        color: #ffa468;
      }
    }
    .interest {
      display: flex;
      align-items: center;
      justify-content: space-between;
      opacity: 0.5;
      margin-top: 2rem;
      .interest__list,
      .detail__control {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      .detail__control {
        font-size: 2rem;
        .detail__control-icon {
          margin-left: 2rem;
          transition: all 0.2s linear;
          &:hover {
            opacity: 1;
            color: #ffa468;
          }
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    max-width: 70vw;
    .dot {
      display: block;
    }
    .dot__popup.show {
      display: block;
    }
    .detail__control-icon {
      display: none;
    }
    .detail__products {
      h1 {
        font-size: 1.5rem;
      }
      .like__icon {
        font-size: 1.4rem;
      }
    }
  }
`;
export default SingleProduct;
