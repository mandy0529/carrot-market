import React from 'react';
import styled from 'styled-components';

function Error() {
  return (
    <Wrapper>
      <h3>판매 목록이 없습니다.</h3>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 20rem;
  text-align: center;
  min-height: 78vh;
  @media screen and (max-width: 768px) {
    margin-top: 10rem;
  }
`;
export default Error;
