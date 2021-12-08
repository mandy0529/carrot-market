import React from 'react';
import styled from 'styled-components';
import {MARKET1, MARKET2} from '../utils/constant';

function Market() {
  return (
    <Wrapper>
      <div className="market__info-images">
        <img src={MARKET1} className="market__cta-img" alt="cta-image1" />
        <img src={MARKET2} className="market__cta-img" alt="cta-image2" />
      </div>

      <div className="market__info-p">
        <h1>
          내 근처에서 찾는
          <br />
          동네 가게
        </h1>
        <p>
          우리 동네 가게를 찾고 있나요?
          <br />
          동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e6f3e6;
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

  .market__info-images {
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
    .market__info-images {
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
export default Market;
