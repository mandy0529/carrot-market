import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';
import {productsList, formatPrice} from '../utils/helper';

function Products() {
  const {editProduct, deleteProduct} = useGlobalContext();
  return (
    <Wrapper>
      <h1>판매내역</h1>
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
                  <h2>{formatPrice(price)}원</h2>
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

              <Link to="/detail">
                <button>detail</button>
              </Link>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 90vh;
  max-width: 50vw;
  padding-top: 6rem;
  text-align: center;
  margin: 2rem auto;

  img {
    width: 300px;
    height: 200px;
  }
  .products__list {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 2rem;
    border-bottom: 2px solid lightgray;
    button {
      max-width: 200px;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      background: #ffa468;
      border: none;
      outline: none;
      font-size: 1rem;
      font-weight: bold;
      color: white;
      transition: all 0.3s linear;
      letter-spacing: 0.2rem;
      font-weight: bold;
      cursor: pointer;
      margin-left: 2rem;
      &:hover {
        transform: scale(0.97);
        background: #fd7e35;
      }
    }
    .products__list-info {
      margin-left: 3rem;
      .products__list-icons {
        margin-top: 2rem;
        font-size: 1.7rem;
        display: flex;

        .icons {
          margin: 0 1.4rem;
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
    margin: 2rem 5rem;
    max-width: 80vw;
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
      padding: 1rem 2rem;
      button {
        padding: 0.3rem 0.6rem;
        font-size: 0.8rem;
      }
      .products__list-info {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        .products__list-icons {
          font-size: 1.3rem;
          margin-top: 0;
          margin-left: 2rem;
          .icons {
            margin: 0 0.5rem;
          }
        }
      }
    }
  }
`;
export default Products;
