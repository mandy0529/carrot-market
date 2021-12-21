import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbf7f2;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    letter-spacing: 0.2rem;
  }
  p {
    letter-spacing: 0.2rem;
    margin-bottom: 2rem;
  }

  .create__btn {
    max-width: 200px;
    padding: 0.5rem 1.8rem;
    border-radius: 5px;
    background: #ffa468;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    transition: all 0.3s linear;
    letter-spacing: 0.2rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      transform: scale(0.95);
      background: #fb8500;
    }
  }
  .hero__info-images {
    margin: 0 10rem;

    img {
      height: 500px;
      border-radius: 10px;
      box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
      -webkit-box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
      -moz-box-shadow: 0px 2px 46px -12px rgba(0, 0, 0, 0.8);
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
    padding: 5rem 3rem;
    .hero__info-images {
      margin: 3rem 0;
      img {
        height: 200px;
      }
    }

    h1 {
      margin-top: 2rem;
      font-size: 1.8rem;
    }
    p {
      letter-spacing: 0.1rem;
      font-size: 1rem;
    }
  }
`;
export {Wrapper};
