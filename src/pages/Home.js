import React from 'react';
import {Hero, Market} from '../components';
import Place from '../components/Place';
import {Link} from 'react-router-dom';
import {RiPencilLine} from 'react-icons/ri';
import {Wrapper} from '../style/home';

function Home() {
  return (
    <Wrapper>
      <Hero />
      <Place />
      <Market />
      <Link to="/create">
        <button className="toggle-bar">
          <RiPencilLine className="toggle-icon" />
        </button>
      </Link>
    </Wrapper>
  );
}

export default Home;
