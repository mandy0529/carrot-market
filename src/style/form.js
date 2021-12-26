import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: calc(80vh - 7rem);
  max-width: 800px;
  padding: 2rem 4rem 0 4rem;
  text-align: center;
  margin: 2rem auto 0 auto;
  background: white;
  border-radius: 30px;

  .img-flex {
    display: flex;
    margin: 2rem 0.5rem;
    max-width: 800px;
    min-width: 400px;
    img {
      height: 10em;
      border-radius: 5px;
    }
  }
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
      border-bottom: 2px solid lightgray;

      .upload__info {
        margin: 0 0.7rem;
      }
      .input-file-button {
        padding: 6px 25px;
        max-width: 200px;
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
      font-size: 1rem;
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
      margin: 3rem 1rem;
      &:hover {
        color: white;
        background: #ffa468;
        transform: scale(0.97);
      }
    }
  }
  @media screen and (max-width: 991px) {
    max-width: 500px;
    padding: 2rem;
    margin: 2rem;
    background: white;
    .text {
      font-size: 0.9rem;
      min-width: 200px;
    }
    .picture__text {
      margin: 0 auto;
      .submit {
        margin: 4rem 0.3rem;
      }
    }
    input {
      font-size: 0.9rem;
      background: white;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

export {Wrapper};
