import React, {useEffect} from 'react';
import {AiOutlineCamera} from 'react-icons/ai';
import styled from 'styled-components';
import {ProgressBar} from '.';
import {useGlobalContext} from '../context/AppContext';

function Form() {
  const {
    file,
    handleImgUpload,
    updateValue,
    handleSubmit,
    valueContent: {title, category, price, text},
  } = useGlobalContext();

  // useEffect(() => {
  //   putFormToDb();
  // }, []);

  return (
    <Wrapper>
      <form onSubmit={(e) => handleSubmit(e)} className="picture__text">
        {file.data && (
          <div className="img-flex">
            <ProgressBar />
          </div>
        )}

        <input
          type="text"
          id="title"
          name="title"
          placeholder="글 제목"
          required
          className="title"
          value={title}
          onChange={updateValue}
        />
        <input
          type="text"
          id="category"
          name="category"
          className="category"
          required
          placeholder="카테고리"
          value={category}
          onChange={updateValue}
        />
        <input
          type="number"
          id="price"
          name="price"
          placeholder="￦ 가격 (선택사항)"
          required
          className="price"
          value={price}
          onChange={updateValue}
        />
        <textarea
          id="text"
          name="text"
          className="text"
          required
          onChange={updateValue}
          value={text}
          placeholder="올릴 게시글 내용을 작성해주세요. (가품 및 판매 금지 품목은 게시가 제한 될 수 있습니다.)"
        />
        <div className="picture__text-upload">
          <div className="upload__info">
            <AiOutlineCamera className="upload__icon" />
          </div>
          <label className="input-file-button" htmlFor="input-file">
            업로드
          </label>
          <input
            required
            type="file"
            id="input-file"
            style={{display: 'none'}}
            className="upload"
            onChange={handleImgUpload}
          />
        </div>
        <input className="submit" type="submit" value="완료" />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: calc(80vh - 7rem);
  max-width: 800px;
  padding: 2rem 4rem;
  text-align: center;
  margin: 2rem auto;
  background: white;
  border-radius: 30px;

  input {
    border: none;
    padding: 1.5rem 0;
    margin: 0.6rem 0;
    outline: none;
    font-size: 1.3rem;
    border-bottom: 2px solid lightgray;
  }
  .picture__text {
    display: flex;
    flex-direction: column;
    .picture__text-upload {
      display: flex;
      padding-bottom: 1rem;

      .upload__info {
        margin: 0 0.7rem;
      }
      .input-file-button {
        padding: 6px 25px;
        width: 50px;
        background-color: #ff8c40;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: #ff6600;
        }
      }
      .upload__icon {
        font-size: 2rem;
      }
    }

    .text {
      height: 8rem;
      max-width: 800px;
      border: none;
      outline: none;
      resize: none;
      margin: 2rem 0;
      font-size: 1.3rem;
      border-bottom: 2px solid lightgray;
    }
    .submit {
      max-width: 150px;
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
      text-align: center;
      margin: 3rem 0;
      &:hover {
        color: white;
        background: #ffa468;
        transform: scale(0.97);
      }
    }
    @media screen and (max-width: 991px) {
      max-width: 500px;
      padding: 0;
      margin: 0;
      background: white;
      .text {
        font-size: 0.9rem;
        min-width: 400px;
      }
      .picture__text {
        margin: 0 auto;
      }
      input {
        font-size: 0.9rem;
        background: white;
      }
    }
  }
`;
export default Form;
