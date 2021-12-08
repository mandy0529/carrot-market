import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Error, Loader} from '.';
import {useUserContext} from '../context/UserContext';
import {Wrapper} from '../style/header';
import {HEADER_LOGO} from '../utils/constant';
import {headerList} from '../utils/helper';

const Header = () => {
  const {loading, error, user, loginAuth, logoutAuth, stayLogin} =
    useUserContext();
  const {pathname} = useLocation();
  const {name, photo, email} = user;
  const isLoggedIn = name !== '' && photo !== '' && email !== '';

  useEffect(() => {
    stayLogin();
    // eslint-disable-next-line
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
            const {id, text, icon, path} = item;
            return (
              <Link className="header__menu-link" id={id} key={id} to={path}>
                <div
                  style={{
                    borderBottom: `3px solid ${
                      path === pathname ? '#FFA468' : 'transparent'
                    }`,
                  }}
                  className="header__menu-list"
                >
                  {icon}
                  <span>{text}</span>
                </div>
              </Link>
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
          const {id, text, icon, path} = item;
          return (
            <Link className="header__menu-link" id={id} key={id} to={path}>
              <div
                style={{
                  borderBottom: `3px solid ${
                    path === pathname ? 'white' : 'transparent'
                  }`,
                }}
                className="header__menu-list"
              >
                {icon}
                <span>{text}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Header;
