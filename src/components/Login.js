import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';
import {HERO1, HERO2, HERO3} from '../utils/constant';

function Login() {
  const {loading} = useGlobalContext();

  if (loading) {
    return null;
  }

  return (
    <Wrapper>
      <div className="login">
        <div className="login__info-p">
          <h1>당신 근처의 당근마켓</h1>
          <p>
            중고 거래부터 동네 정보까지, 이웃과 함께해요. 가깝고 따뜻한 당신의
            근처를 만들어요.
          </p>
        </div>

        <div className="login__info-images">
          <img src={HERO1} className="login__cta-img" alt="cta-image1" />
          <img src={HERO2} className="login__cta-img" alt="cta-image2" />
          <img src={HERO3} className="login__cta-img" alt="cta-image3" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  .login {
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
    h1 {
      font-size: 3rem;
    }
    .login__info-images {
      img {
        height: 400px;
      }
    }
  }
`;
export default Login;
