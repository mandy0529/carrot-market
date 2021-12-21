import React, {useState} from 'react';
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai';
import {RiBearSmileLine} from 'react-icons/ri';
import {Modal} from '.';
import {useGlobalContext} from '../context/AppContext';
import {formatPrice} from '../utils/helper';

function Products({url, text, title, price, category, id, profile, userName}) {
  const {openModal, isModalOpen} = useGlobalContext();
  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike((prev) => prev + 1);
  };

  const handleUnlike = () => {
    if (like <= 0) return 0;
    setLike((prev) => prev - 1);
  };

  return (
    <div className="single-product" key={id} id={id}>
      <img
        onClick={(e) => openModal(e)}
        className="product-img"
        src={url}
        alt={title}
      />
      {isModalOpen && <Modal />}

      <div className="detail__user">
        <div className="detail__user-info">
          <img src={profile} alt={userName} />
          <div className="detail__user-pri">
            <h4>{userName}</h4>
          </div>
        </div>
        <div className="detail__icon">
          <RiBearSmileLine />
        </div>
      </div>

      <div className="detail__products">
        <h1>{title}</h1>
        <h4>{category}</h4>
        <h5>{formatPrice(price)}</h5>
        <p className="text">{text}</p>
        <div className="interest">
          <div className="interest__list">
            <span>관심 {like}</span>
            <AiOutlineLike onClick={handleLike} className="like__icon" />
            <AiOutlineDislike onClick={handleUnlike} className="like__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
