import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './AllBike.css'

const AllBike = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
    return (
      <div className='products'>
        <div className='product-container'>
        {
        products.map(product => <Bike key={product.id} product={product}></Bike>)
      }
        </div>
        <div className='choose '>
          <h3>Selected Bike</h3>
          <button className='btn bg-light'>Choose 1 for me</button>
          <button className='btn bg-light'>Choose Again</button>
        </div>
      </div>
    );
};

export default AllBike;