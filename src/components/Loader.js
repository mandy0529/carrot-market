import React from 'react';
import styled from 'styled-components';

function Loader() {
  return (
    <Wrapper>
      <div className="loader"></div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 25rem auto;
  text-align: center;
  .loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #ffa265;
    border-radius: 50%;
    width: 50px;
    height: 50px;
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
