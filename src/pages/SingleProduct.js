import React from 'react';
import styled from 'styled-components';
import {Error} from '../components';
import Products from '../components/Products';
import {useProductsContext} from '../context/ProductsContext';

function SingleProduct() {
  const {images} = useProductsContext();

  if (images.length === 0) {
    return <Error />;
  }

  return (
    <Wrapper>
      <div>
        {images &&
          images.map((item) => {
            return <Products key={item.id} {...item} />;
          })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 6rem 0 2rem 0;
  min-height: 78vh;
  max-width: 40vw;
  margin: 2rem auto;
  text-align: center;
  p,
  h4 {
    margin: 0.5rem;
  }
  .single-product {
    width: 100%;
    padding: 2rem 0;
    border-bottom: 3px dotted black;
  }
  .product-img {
    position: relative;
    object-fit: cover;
    overflow: hidden;
    height: 400px;
    border-radius: 10px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      transform: scale(0.98);
    }
  }

  .detail__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .detail__icon {
      font-size: 2rem;
      color: green;
    }
    .detail__user-info {
      display: flex;
      align-items: center;
      margin: 1rem 0;
    }
  }
  .detail__products {
    text-align: left;
    .text {
      margin: 1rem 0 0 0;
      min-width: 300px;
    }
    h4 {
      margin: 0;
    }
    .like__icon {
      font-size: 2rem;
      margin-left: 1rem;
      transition: all 0.2s linear;
      cursor: pointer;
      &:hover {
        opacity: 1;
        color: #ffa468;
      }
    }
    .interest {
      display: flex;
      align-items: center;
      justify-content: space-between;
      opacity: 0.5;
      margin-top: 2rem;
      .interest__list,
      .detail__control {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 991px) {
    max-width: 80vw;
    .product-img {
      min-width: 100%;
      height: 200px;
    }
    .detail__products {
      h1 {
        font-size: 1.5rem;
      }
      .like__icon {
        font-size: 1.4rem;
      }
    }
  }
`;
export default SingleProduct;
