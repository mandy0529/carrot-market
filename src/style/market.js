import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e6f3e6;
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

  .market__info-images {
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
    .market__info-images {
      margin: 3rem 0;
      img {
        height: 300px;
      }
    }

    h1 {
      margin-top: 2rem;
      font-size: 2.2rem;
    }
    p {
      letter-spacing: 0.1rem;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 2rem 3rem;
    h1 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 0.8rem;
    }
    .market__info-images {
      img {
        height: 200px;
      }
    }
  }
`;

export {Wrapper};
