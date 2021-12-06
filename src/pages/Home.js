import React from 'react';
import {Hero, Loader, Market} from '../components';
import {useGlobalContext} from '../context/AppContext';
import Place from '../components/Place';
import {CreateComment} from '.';

function Home() {
  const {loading} = useGlobalContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
      <Place />
      <Market />
    </>
  );
}

export default Home;
