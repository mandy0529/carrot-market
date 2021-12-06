import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';
import {HERO1, HERO2, HERO3} from '../utils/constant';

function Hero() {
  const {loading, loginAuth} = useGlobalContext();

  if (loading) {
    return null;
  }

  return (
    <Wrapper>
      <div className="login__info-images">
        <img src={HERO1} className="login__cta-img" alt="cta-image1" />
        <img src={HERO2} className="login__cta-img" alt="cta-image2" />
      </div>

      <div className="login__info-p">
        <h1>
          우리동네
          <br /> 중고 직거래 마켓
        </h1>
        <p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</p>
        <button>물건 판매</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 70vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
  }
  p {
    letter-spacing: 0.3rem;
  }

  button {
    /* display: none; */
    max-width: 200px;
    padding: 0.5rem 1.8rem;
    border-radius: 5px;
    background: #ffa468;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    transition: all 0.3s linear;
    letter-spacing: 0.2rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      transform: scale(0.97);
      background: #fb8500;
    }
  }
  .login__info-images {
    margin: 0 5rem;
    img {
      height: 400px;
      border-radius: 10px;
      box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
      -webkit-box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
      -moz-box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
    .login__info-images {
      margin: 3rem 0;
      img {
        height: 300px;
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
export default Hero;
