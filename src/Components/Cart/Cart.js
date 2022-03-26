import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
  const { name, picture } = props.product;
  const { removeOne } = props;
  return (
    <div className='cart-product d-flex align-items-center justify-content-between mx-md-5 mx-0'>
      <img className='my-2' src={picture} alt="" />
      <p className='my-2'>{name} </p>
      <FontAwesomeIcon className='ps-2 my-2' onClick={() => removeOne(props.product)} icon={faTrash}></FontAwesomeIcon>
    </div>
  );
};

export default Cart;