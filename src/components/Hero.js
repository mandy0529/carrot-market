import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';
import {MAIN1, MAIN2} from '../utils/constant';

function Hero() {
  const {loading} = useGlobalContext();

  if (loading) {
    return null;
  }

  return (
    <Wrapper>
      <div className="hero__info-images">
        <img src={MAIN2} className="hero__cta-img" alt="cta-image1" />
        <img src={MAIN1} className="hero__cta-img" alt="cta-image2" />
      </div>

      <div className="hero__info-p">
        <h1>
          우리 동네
          <br /> 중고 직거래 마켓
        </h1>
        <p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</p>

        <Link to="/create">
          <button className="create__btn"> 나의 물건 판매</button>
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbf7f2;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    letter-spacing: 0.2rem;
  }
  p {
    letter-spacing: 0.2rem;
    margin-bottom: 2rem;
  }

  .create__btn {
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
      transform: scale(0.95);
      background: #fb8500;
    }
  }
  .hero__info-images {
    margin: 0 10rem;

    img {
      height: 500px;
      border-radius: 10px;
      box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
      -webkit-box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
      -moz-box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
    .hero__info-images {
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
