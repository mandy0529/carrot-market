import React from 'react';
import {Hero, Loader} from '.';
import {useGlobalContext} from '../context/AppContext';

function Home() {
  const {loading} = useGlobalContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
    </>
  );
}

export default Home;
