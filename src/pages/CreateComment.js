import React from 'react';
import {RiCloseFill} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import {Form} from '../components';
import {Wrapper} from '../style/createComment';

function CreateComment() {
  return (
    <Wrapper>
      <div className="create__header">
        <h1>중고거래 글쓰기</h1>
        <Link className="toggle-link" to="/">
          <button className="toggle-btn">
            <RiCloseFill />
          </button>
        </Link>
      </div>

      <Form />
    </Wrapper>
  );
}

export default CreateComment;
