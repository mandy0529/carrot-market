import React from 'react';
import {ImQuestion} from 'react-icons/im';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';
import {HERO1, HERO2, PLACE1, PLACE2, PLACE3} from '../utils/constant';
import {placeList} from '../utils/helper';

function Place() {
  const {loading} = useGlobalContext();

  if (loading) {
    return null;
  }

  return (
    <Wrapper>
      <div className="place__info-p">
        <h1>
          이웃과 함께 하는
          <br /> 동네생활
        </h1>
        <p>
          우리 동네의 다양한 이야기를 <br />
          이웃과 함께 나누어요.
        </p>
        <div className="place__menu">
          {placeList.map((item) => {
            const {id, text, content, icon} = item;
            return (
              <div key={id} className="place__menu-list">
                <span>{icon}</span>
                <h3>{text}</h3>
                <div className="list-p">{content}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="place__info-images">
        <img src={PLACE1} className="place__cta-img" alt="cta-image1" />
        <img src={PLACE2} className="place__cta-img" alt="cta-image2" />
        <img src={PLACE3} className="place__cta-img" alt="cta-image2" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  .place__info-p {
    margin-right: 30rem;
    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0;
    }
    p {
      letter-spacing: 0.3rem;
      margin: 2rem 0;
    }
  }
  .place__info-images {
    position: relative;

    img {
      height: 500px;
      border-radius: 10px;
      position: absolute;
      box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
      -webkit-box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
      -moz-box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
      &:nth-child(1) {
        top: -200px;
        left: -300px;
      }
      &:nth-child(2) {
        top: -250px;
        left: -200px;
        z-index: 100;
      }
      &:nth-child(3) {
        top: -230px;
        left: -100px;
        height: 200px;
        z-index: 100;
      }
    }
  }
  .place__menu {
    display: flex;
    margin-top: 3rem;
    h3 {
      font-size: 0.8rem;
      margin: 1rem 0;
    }
    span {
      font-size: 1.7rem;
      background: #c2e8c2;
      color: #489f48;
      padding: 0.5rem 0.7rem;
      border-radius: 50%;
    }
    .list-p {
      max-width: 100px;
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
      margin: 1.5rem 0;
    }
    .place__menu-list {
      margin: 0 1rem;
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
    .place__info-p {
      margin: 2rem auto;
    }
    .place__info-images {
      img {
        display: none;
      }
    }

    h1 {
      margin-top: 2rem;
      font-size: 2.2rem;
    }
    p {
      letter-spacing: 0.1rem;
      font-size: 1.2rem;
    }
  }
`;
export default Place;
