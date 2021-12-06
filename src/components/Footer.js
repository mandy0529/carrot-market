import React from 'react';
import styled from 'styled-components';

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

const Wrapper = styled.footer`
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffa468;
  color: white;
  text-align: center;

  h5 {
    color: white;
    margin: 0.1rem;
    font-weight: bold;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
