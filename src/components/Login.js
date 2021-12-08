import React from 'react';
import {useUserContext} from '../context/UserContext';
import {Wrapper} from '../style/login';
import {HERO1, HERO2, HERO3} from '../utils/constant';

function Login() {
  const {loginAuth, loading} = useUserContext();

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
    </Wrapper>
  );
}

export default Login;
