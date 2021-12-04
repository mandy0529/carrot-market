import React, {useEffect} from 'react';
import {BsPlus} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Error, Loader} from '.';
import {useGlobalContext} from '../context/AppContext';
import {HEADER_LOGO} from '../utils/constant';

const Header = () => {
  const {user, loginAuth, error, logoutAuth, stayLogin, loading} =
    useGlobalContext();
  const {name, photo, email} = user;
  const isLoggedIn = name !== '' && photo !== '' && email !== '';

  useEffect(() => {
    stayLogin();
  }, []);

  if (error.state) {
    return <Error />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Link className="header__btn" to="/">
        <img src={HEADER_LOGO} alt="logo" />
      </Link>

      {isLoggedIn && (
        <div className="header__menu-list">
          <span>Sell your things</span>
          <BsPlus className="header__create-icon" />
        </div>
      )}

      <div className="header__profile">
        {isLoggedIn ? (
          <>
            <img className="header__profile-img" src={photo} alt={name} />
            <button onClick={logoutAuth}>Logout</button>
          </>
        ) : (
          <button onClick={loginAuth}>Login</button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 10rem;

  .header__btn {
    cursor: pointer;
    &:hover img {
      transform: scale(0.97);
    }
    img {
      height: 40px;
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

  .header__menu-list {
    display: flex;
    align-items: center;
    margin: 0 1rem;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1rem;
    span {
      margin-left: 2rem;
    }
    .header__create-icon {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 991px) {
    .header__menu {
      display: none;
    }
  }
`;
export default Header;
