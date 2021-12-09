import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 90vh;
  padding-top: 8rem;
  text-align: center;
  background: #fbf7f2;

  .create__header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5rem;
  }

  .toggle-btn {
    display: none;
    border: none;
    outline: none;
    color: #ff8c40;
    background: transparent;
    font-size: 2rem;
    padding-top: 0.3rem;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
    &:hover {
      background: #ff8c40;
      color: white;
    }
  }
  @media screen and (max-width: 991px) {
    background: white;
    .toggle-link {
      margin-left: auto;
    }
    .toggle-btn {
      display: block;
    }
  }
`;

export {Wrapper};