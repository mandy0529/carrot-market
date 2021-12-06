import React from 'react';
import styled from 'styled-components';
import {Form} from '../components';
import {useGlobalContext} from '../context/AppContext';

function CreateComment() {
  const {loading} = useGlobalContext();

  if (loading) {
    return null;
  }

  return (
    <Wrapper>
      <h1>중고거래 글쓰기</h1>

      <Form />
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: calc(80vh - 7rem);
  padding: 8rem 0;
  text-align: center;
`;

export default CreateComment;
