import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';
import useFirestore from '../hooks/useFileStore';
import useStorage from '../hooks/useStorage';

function ProgressBar() {
  const {file, preview} = useGlobalContext();
  const {images} = useFirestore('images');

  console.log(images, 'images');
  return (
    <Wrapper>
      <div className="output">
        <div className="img-flex">
          <img className="file-img" src={preview} alt="preview-img" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .output {
    display: flex;
    margin: 2rem 0.5rem;
  }
  .file-img {
    width: 100px;
    height: 70px;
    border-radius: 5px;
  }
  .progress-bar {
    width: ${(props) => props.progress}%;
    margin-top: 20px;
    height: 5px;
    background: orange;
  }
  h4 {
    margin: 3rem 0;
  }
`;
export default ProgressBar;
