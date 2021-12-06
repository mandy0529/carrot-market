import React from 'react';
import styled from 'styled-components';
import {LOADING_LOGO} from '../utils/constant';

function Loader() {
  return (
    <Wrapper>
      <img src={LOADING_LOGO} alt="loading-logo" />
      <div className="loader"></div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 25rem auto;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
  }
  .loader {
    border: 10px solid #f3f3f3;
    border-top: 10px solid #ffa265;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
