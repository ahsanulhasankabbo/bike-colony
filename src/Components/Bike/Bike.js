import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Bike = (props) => {
    const {picture,name,price} = props.product;
    // console.log(props)
    return (
        <div className='card'>
            <img className='w-100 h-100 mb-3 mx-auto d-block' src={picture} alt="" />
            <h5 className='text-center'>{name}</h5>
            <p className='text-center fs-5'>Price : ${price}</p>
            <button className='bg-success text-white btn w-75 mx-auto'>Add to Cart 
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> 
            </button>
        </div>
    );
};

export default Bike;