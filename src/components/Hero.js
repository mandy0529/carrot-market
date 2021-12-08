import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper} from '../style/hero';
import {MAIN1, MAIN2} from '../utils/constant';

function Hero() {
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

export default Hero;
