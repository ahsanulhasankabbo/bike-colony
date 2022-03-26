import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Bike = (props) => {
    const { picture, name, price, } = props.product;
    const { showDetails } = props;
    return (
        <div className='card'>
            <img className='w-100 h-100 mb-3' src={picture} alt="" />
            <h5 className='text-center'>{name}</h5>
            <p className='text-center fs-5'>Price : ${price}</p>
            <button onClick={() => showDetails(props.product)} className='bg-success text-white btn w-75 mx-auto'>Add to Cart
                <FontAwesomeIcon className='ps-2' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Bike;