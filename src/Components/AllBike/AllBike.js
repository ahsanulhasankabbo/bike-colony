import React from 'react';

const AllBike = (props) => {
    const {name,picture} = props.product;
    return (
        <div>
            <img className='w-25' src={picture} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default AllBike;