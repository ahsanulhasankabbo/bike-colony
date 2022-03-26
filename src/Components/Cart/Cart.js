import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name,picture} = props.product;
    // console.log(props.product)  
    return (
        <div className='cart-product d-flex align-items-center m-3'>
          <img src={picture} alt="" />
          <p className='ms-2'>{name}</p>
        </div>
    );
};

export default Cart;