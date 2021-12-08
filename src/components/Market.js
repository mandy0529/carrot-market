import React from 'react';
import {Wrapper} from '../style/market';
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

export default Market;
