import React, {useEffect} from 'react';
import {RiPencilLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Error, Loader} from '.';
import {useGlobalContext} from '../context/AppContext';
import {HEADER_LOGO} from '../utils/constant';
import {headerList} from '../utils/helper';

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
        <div className="header__menu">
          {headerList.map((item) => {
            const {id, text, icon} = item;
            return (
              <div id={id} key={id} className="header__menu-list">
                {icon}
                <span>{text}</span>
              </div>
            );
          })}
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

      <div className="header__menu mobile">
        {headerList.map((item) => {
          const {id, text, icon} = item;
          return (
            <div id={id} key={id} className="header__menu-list fixed">
              {icon}
              <span>{text}</span>
            </div>
          );
        })}
      </div>
      {isLoggedIn && (
        <Link to="/create">
          <button className="toggle-bar">
            <RiPencilLine className="toggle-icon" />
          </button>
        </Link>
      )}
    </Wrapper>
  );
};

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
      span {
        margin: 0 0.6rem;
        padding: 0.7rem 0;
        border-bottom: 3px solid transparent;
        transition: all 0.3s linear;
        cursor: pointer;
        &:hover {
          border-bottom: 3px solid #ffa468;
        }
      }
    }
  }
  .mobile {
    display: none;
  }

  @media screen and (max-width: 991px) {
    justify-content: space-between;
    padding: 2rem;
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
    .toggle-bar {
      display: block;
      bottom: 140px;
      z-index: 100;
    }
    .mobile {
      display: flex;
      width: 100%;
      margin: 0 auto;
      justify-content: space-around;
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 1rem 0;
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
  @media screen and (max-width: 1500px) {
    .header__menu {
      .header__menu-list {
        flex-direction: column;
        text-align: center;
      }
      span {
        font-size: 1rem;
      }
    }
  }
`;
export default Header;
