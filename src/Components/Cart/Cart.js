import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name,picture} = props.product;  
    return (
        <div className='cart-product d-flex align-items-center m-3 border'>
          <img src={picture} alt="" />
          <p>{name}</p>
        </div>
    );
};

export default Cart;