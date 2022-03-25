import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';
import './AllBike.css'

const AllBike = () => {
    const [products , setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  const showDetails = (product) =>{
    // console.log(product)
    const newCart = [...cart,product]
    setCart(newCart);
  }
    return (
      <div className='products'>
        <div className='product-container'>
        {
        products.map(product => <Bike showDetails={showDetails} key={product.id} product={product}></Bike>)
        }
        </div>
        <div className='text-center ms-3'>
        <h3>Selected Bike</h3>
          {
            cart.map(product => <Cart key={product.id} product={product}></Cart>)
          }
          <button className='btn bg-light m-2'>Choose 1 for me</button>
          <button className='btn bg-light'>Choose Again</button>
        </div>
      </div>
    );
};

export default AllBike;