import React from 'react';
import {Wrapper} from '../style/footer';

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> 당근마켓 </span>
      </h5>
      <h5> This is Live Demo </h5>
    </Wrapper>
  );
};

export default Footer;
