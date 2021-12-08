import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 78vh;
  max-width: 50vw;
  padding-top: 6rem;
  text-align: left;
  margin: 2rem auto;

  img {
    height: 150px;
  }
  .products__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem 2rem;
    border-bottom: 2px solid lightgray;
    border-radius: 5px;
    .products__list-info {
      margin-left: 3rem;
      text-align: center;

      .products__list-icons {
        margin-top: 1rem;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        .icons {
          margin-left: 0.3rem;
          transition: all 0.3s linear;
          cursor: pointer;
          padding: 0.3rem;
          border-radius: 10px;
          &:hover {
            background: #ff8c40;
            color: white;
            transform: scale(1.1);
          }
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    text-align: left;
    margin: 2rem;
    max-width: 80vw;
    min-width: 80vw;
    h1 {
      font-size: 1.5rem;
    }
    h3,
    h2 {
      margin: 0;
      font-size: 1.2rem;
    }
    img {
      height: 200px;
    }
    .products__list {
      justify-content: flex-start;
      padding: 1rem 0;
      .products__list-info {
        margin-top: 0.5rem;
        .products__list-icons {
          font-size: 1.3rem;
          margin-top: 1rem;
          button {
            margin: 0;
          }
          .icons {
            margin-left: 0.3rem;
          }
        }
      }
    }
  }
`;

export {Wrapper};
