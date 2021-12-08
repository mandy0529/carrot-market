import React from 'react';
import styled from 'styled-components';

function ProgressBar() {
  return (
    <Wrapper>
      <div className="output"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .output {
    display: flex;
    margin: 2rem 0.5rem;
    max-width: 800px;
    min-width: 400px;
  }
`;
export default ProgressBar;
