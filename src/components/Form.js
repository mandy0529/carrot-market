import React from 'react';
import {AiOutlineCamera} from 'react-icons/ai';
import {useNavigate} from 'react-router';
import {useProductsContext} from '../context/ProductsContext';
import {useUserContext} from '../context/UserContext';
import {Wrapper} from '../style/form';

function Form() {
  const navigate = useNavigate();
  const {
    handleImgUpload,
    updateValue,
    valueContent: {title, category, price, text},
    preview,
    emptyForm,
    handleSubmit,
    editMode,
    handleEditSubmit,
  } = useProductsContext();
  const {user} = useUserContext();

  const dataSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      handleEditSubmit();
    } else {
      handleSubmit(user);
    }
    emptyForm();
    navigate('/my-product');
  };

  return (
    <Wrapper>
      <form onSubmit={dataSubmit} className="picture__text">
        {preview && (
          <div className="img-flex">
            <img className="file-img" src={preview} alt="preview-img" />
          </div>
        )}

        <div className="picture__text-upload">
          <div className="upload__info">
            <AiOutlineCamera className="upload__icon" />
          </div>
          <label className="input-file-button" htmlFor="input-file">
            {editMode ? '이미지는 변경할 수 없습니다.' : '업로드'}
          </label>
          <input
            disabled={editMode ? true : false}
            required
            type="file"
            id="input-file"
            style={{display: 'none'}}
            className="upload"
            onChange={handleImgUpload}
          />
        </div>

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
        <div className="submits_btn">
          <input className="submit" type="submit" value="완료" />
          {editMode && (
            <input className="submit" type="submit" value="수정 취소" />
          )}
        </div>
      </form>
    </Wrapper>
  );
}

export default Form;
