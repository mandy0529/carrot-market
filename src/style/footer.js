import styled from 'styled-components';

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
  @media (max-width: 776px) {
    display: none;
  }
`;

export {Wrapper};
