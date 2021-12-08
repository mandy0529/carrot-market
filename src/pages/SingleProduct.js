import React from 'react';
import {Error} from '../components';
import Products from '../components/Products';
import {useProductsContext} from '../context/ProductsContext';
import {Wrapper} from '../style/singleProduct';

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

export default SingleProduct;
