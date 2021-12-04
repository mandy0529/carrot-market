import React from 'react';
import {useGlobalContext} from '../context/AppContext';

function Error() {
  const {error} = useGlobalContext();
  return <h1>{error.text}</h1>;
}

export default Error;
