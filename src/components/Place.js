import React from 'react';
import {Wrapper} from '../style/place';
import {PLACE1, PLACE2, PLACE3} from '../utils/constant';
import {placeList} from '../utils/helper';

function Place() {
  return (
    <Wrapper>
      <div className="place__info-p">
        <h1>
          이웃과 함께 하는
          <br /> 동네 생활
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

export default Place;
