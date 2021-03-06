import styled from 'styled-components';

const Wrapper = styled.div`
  .modal {
    background-color: #000000ce;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    visibility: hidden;
    width: 100%;
    height: 100%;
  }
  .openModal {
    z-index: 1000;
    visibility: visible;
  }
  .box {
    margin: 8rem auto 0 auto;
    max-width: 100vw;
    position: relative;
    .modal-image {
      width: 100%;
    }
  }
  .close-btn {
    position: absolute;
    background-color: #ffa486;
    border: none;
    border-radius: 5px;
    font-size: 1.9rem;
    cursor: pointer;
    color: white;
    transition: all 300ms linear;
    font-weight: bold;
    padding: 0;

    &:hover {
      color: #ffa486;
      background-color: white;
    }
  }
  @media (min-width: 776px) {
    .box {
      margin-top: 2rem;
      width: 55vw;
      height: 50vh;
    }
  }
  @media (min-width: 1256px) {
    .box {
      margin-top: 1rem;
      width: 35vw;
      height: 50vh;
    }
  }
`;

export {Wrapper};
