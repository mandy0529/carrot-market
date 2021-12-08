import React from 'react';
import styled from 'styled-components';

function Error() {
  return (
    <Wrapper>
      <h3>목록이 없습니다.</h3>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 10rem;
  text-align: center;
  min-height: 78vh;
`;
export default Error;
