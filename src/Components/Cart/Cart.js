import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
  const { name, picture } = props.product;
  const { removeOne } = props;
  return (
    <div className='cart-product d-flex align-items-center m-3'>
      <img src={picture} alt="" />
      <h6 className='ms-2'>{name} <FontAwesomeIcon className='ps-2' onClick={() => removeOne(props.product)} icon={faTrash}></FontAwesomeIcon></h6>
    </div>
  );
};

export default Cart;