import styled from 'styled-components';

const Wrapper = styled.div`
  .toggle-bar {
    display: none;
    position: fixed;
    bottom: 50px;
    right: 30px;
    color: white;
    font-size: 1.9rem;
    font-weight: bold;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 50px;
    border: none;
    outline: none;
    background: #fb8500;
    cursor: pointer;
    .toggle-icon {
      transition: all 0.3s ease-out;
    }
    &:hover .toggle-icon {
      transform: rotate(90deg);
    }
  }
  @media screen and (max-width: 991px) {
    .toggle-bar {
      display: block;
      bottom: 140px;
      z-index: 100;
    }
  }
`;
export {Wrapper};
