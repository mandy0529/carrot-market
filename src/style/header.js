import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  width: 94%;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 5rem;
  background: white;
  z-index: 200;

  .header__btn {
    cursor: pointer;
    &:hover img {
      transform: scale(0.97);
    }
    img {
      height: 70px;
      transition: all 0.3s linear;
    }
  }

  .header__profile {
    display: flex;
    margin-left: auto;
    button {
      max-width: 200px;
      padding: 0.5rem 1.8rem;
      border-radius: 5px;
      background: white;
      border: 2px solid #ffa468;
      font-size: 1rem;
      font-weight: bold;
      color: #ffa468;
      transition: all 0.3s linear;
      letter-spacing: 0.2rem;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: white;
        background: #ffa468;
        transform: scale(0.97);
      }
    }
    img {
      width: 50px;
      height: 50px;
      border: 2px solid white;
      border-radius: 50%;
      margin: 0 1rem;
    }
  }
  .header__menu {
    display: flex;
    margin-left: 2rem;

    .header__menu-list {
      display: flex;
      align-items: center;
      margin: 0 1rem;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 1.2rem;
      border-bottom: 3px solid transparent;
      transition: all 0.3s linear;

      &:hover {
        border-bottom: 3px solid red;
      }
      span {
        margin: 0 0.6rem;
        padding: 0.7rem 0;

        cursor: pointer;
      }
    }
  }
  .mobile {
    display: none;
  }

  @media screen and (max-width: 991px) {
    justify-content: space-between;
    padding: 0.5rem;
    width: 100%;
    .header__btn {
      img {
        height: 30px;
      }
    }
    .header__menu {
      display: none;
    }
    .header__profile {
      display: none;
    }

    .mobile {
      display: flex;
      width: 100%;
      margin: 0 auto;
      justify-content: space-around;
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 0;
      background: #ffa468;
      color: white;
      .fixed {
        font-size: 2rem;
        cursor: pointer;
        transition: all 0.3s ease-in;
        border-bottom: 3px solid transparent;
        &:hover {
          transform: scale(0.94);
          border-bottom: 3px solid white;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .header__menu {
      .header__menu-list {
        flex-direction: column;
        text-align: center;
        font-size: 1.5rem;
      }
      span {
        display: none;
      }
    }
  }
  @media screen and (max-width: 1500px) {
    .header__menu {
      padding: 0.9rem 0;
      .header__menu-list {
        flex-direction: column;
        text-align: center;
        font-size: 1.5rem;
        padding: 0.3rem;
      }
    }
  }
`;

export {Wrapper};
