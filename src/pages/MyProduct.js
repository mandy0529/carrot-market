import React from 'react';
import {formatPrice} from '../utils/helper';
import {useProductsContext} from '../context/ProductsContext';
import {MdOutlineEdit, MdDeleteOutline} from '../icons/icons';
import {useUserContext} from '../context/UserContext';
import {useNavigate} from 'react-router';
import {Error} from '../components';
import {Wrapper} from '../style/myProduct';

function MyProduct() {
  const navigate = useNavigate();
  const {editProduct, deleteProduct, images} = useProductsContext();
  const {
    user: {id: loginId},
  } = useUserContext();

  const handleEdit = (item) => {
    navigate('/create');
    editProduct(item);
  };
  const handleDelete = (item) => {
    deleteProduct(item);
  };

  if (images.length === 0) {
    return <Error />;
  }
  return (
    <Wrapper>
      <h1>나의 판매 목록</h1>

      <>
        {images &&
          images.map((item) => {
            const {title, price, id, url, userId} = item;

            return (
              <div key={id} id={id}>
                {loginId === userId && (
                  <div className="products__list">
                    <img src={url} alt={title} />
                    <div className="products__list-info">
                      <div className="products__list-p">
                        <h1>{title}</h1>
                        <h4>{formatPrice(price)}</h4>
                      </div>

                      <div
                        data-id={id}
                        data-url={url}
                        className="products__list-icons"
                      >
                        <span className="icons">
                          <MdOutlineEdit onClick={() => handleEdit(item)} />
                        </span>
                        <span className="icons">
                          <MdDeleteOutline onClick={() => handleDelete(item)} />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </>
    </Wrapper>
  );
}

export default MyProduct;
