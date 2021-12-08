import React from 'react';
import styled from 'styled-components';
import {productsList, formatPrice} from '../utils/helper';
import {useProductsContext} from '../context/ProductsContext';
import useStorage from '../hooks/useStorage';

function MyProduct() {
  const {
    editProduct,
    deleteProduct,
    file,
    valueContent: {title, category, price, text},
  } = useProductsContext();

  const {progress, error, url} = useStorage(file.data && file.data);

  if (file.data) {
    console.log({
      'file upload state': {progress, error, url},
      'value content': {title, category, price, text},
    });
  }

  return (
    <Wrapper>
      <h1>나의 판매 목록</h1>
      <div>
        {productsList.map((item) => {
          const {id, title, where, price, icon1, icon2, img} = item;
          return (
            <div key={id} id={id} className="products__list">
              <img src={img} alt={title} />

              <div className="products__list-info">
                <div className="products__list-p">
                  <h3>{title}</h3>
                  <p>{where}</p>
                  <h4>{formatPrice(price)}원</h4>
                </div>

                <div className="products__list-icons">
                  <span onClick={editProduct} className="icons">
                    {icon1}
                  </span>
                  <span onClick={deleteProduct} className="icons">
                    {icon2}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 78vh;
  max-width: 50vw;
  padding-top: 6rem;
  text-align: left;
  margin: 2rem auto;

  img {
    width: 200px;
    height: 100px;
  }
  .products__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem 2rem;
    border-bottom: 2px solid lightgray;

    .products__list-info {
      margin-left: 2rem;

      .products__list-icons {
        margin-top: 1rem;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        .icons {
          margin-left: 0.3rem;
          transition: all 0.3s linear;
          cursor: pointer;
          padding: 0.3rem;
          border-radius: 10px;
          &:hover {
            background: #ff8c40;
            color: white;
            transform: scale(1.1);
          }
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    text-align: left;
    margin: 2rem;
    max-width: 80vw;
    min-width: 80vw;
    h1 {
      font-size: 1.5rem;
    }
    h3,
    h2 {
      margin: 0;
      font-size: 1.2rem;
    }
    img {
      width: 200px;
      height: 100px;
    }
    .products__list {
      justify-content: flex-start;
      border-bottom: 2px solid transparent;
      padding: 1rem 0;
      .products__list-info {
        margin-top: 0.5rem;
        .products__list-icons {
          font-size: 1.3rem;
          margin-top: 1rem;
          button {
            margin: 0;
          }
          .icons {
            margin-left: 0.3rem;
          }
        }
      }
    }
  }
`;
export default MyProduct;
