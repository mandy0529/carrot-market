import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';
import {HERO1, HERO2, HERO3} from '../utils/constant';

function Login() {
  const {loading, loginAuth} = useGlobalContext();

  if (loading) {
    return null;
  }

  return (
    <Wrapper>
      <div className="login__info-p">
        <h1>
          당신 근처의
          <br /> 당근마켓
        </h1>
        <p>
          중고 거래부터 동네 정보까지, 이웃과 함께해요.
          <br /> 가깝고 따뜻한 당신의 근처를 만들어요.
        </p>
      </div>

      <div className="login__info-images">
        <img src={HERO1} className="login__cta-img" alt="cta-image1" />
        <img src={HERO2} className="login__cta-img" alt="cta-image2" />
        <img src={HERO3} className="login__cta-img" alt="cta-image3" />
      </div>
      <button onClick={loginAuth}>Login</button>
      {/* </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 5rem;
  height: 80vh;
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: #fbf7f2;

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
  p {
    letter-spacing: 0.3rem;
  }

  button {
    display: none;
    max-width: 200px;
    padding: 0.5rem 1.8rem;
    border-radius: 5px;
    background: white;
    border: 2px solid #ffa468;
    font-size: 1rem;
    font-weight: bold;
    color: #ffa468;
    transition: all 0.3s linear;
    letter-spacing: 0.2rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: white;
      background: #ffa468;
      transform: scale(0.97);
    }
  }
  .login__info-p {
    margin-top: 10rem;
  }
  .login__info-images {
    margin: 5rem 20rem;
    position: relative;

    img {
      position: absolute;
      border-radius: 20px;
      box-shadow: 0px 2px 40px -14px rgba(0, 0, 0, 0.8);
      -webkit-box-shadow: 0px 2px 40px -14px rgba(0, 0, 0, 0.8);
      -moz-box-shadow: 0px 2px 40px -14px rgba(0, 0, 0, 0.8);
      height: 500px;
      &:nth-child(1) {
        top: 0;
        left: -150px;
      }
      &:nth-child(2) {
        top: -100px;
        z-index: 100;
      }
      &:nth-child(3) {
        top: 50px;
        left: 150px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    display: block;
    align-items: center;
    height: 79.3vh;
    overflow-y: auto;

    .login__info-p {
      margin-top: 0;
    }
    .login__info-images {
      margin: 3rem;

      img {
        position: relative;
        height: 400px;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          top: 0;
          left: 0;
        }
      }
    }
    button {
      display: block;
      margin: auto;
    }
    h1 {
      font-size: 2.2rem;
      margin: 0;
    }
    p {
      letter-spacing: 0.1rem;
      font-size: 1.2rem;
    }
  }
`;
export default Login;
