import React from 'react';
import {AiOutlineLike} from 'react-icons/ai';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {MdDeleteOutline, MdOutlineEdit} from 'react-icons/md';
import {RiBearSmileLine} from 'react-icons/ri';
import styled from 'styled-components';
import {Modal} from '../components';
import {useGlobalContext} from '../context/AppContext';
import {useUserContext} from '../context/UserContext';

function SingleProduct() {
  const {loading, showDotPopUp, openModal} = useGlobalContext();
  const {user} = useUserContext();
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
  p,
  h4 {
    margin: 0.5rem;
  }
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
    }
  }
  @media screen and (max-width: 991px) {
    max-width: 70vw;
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
