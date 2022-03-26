import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';
import './AllBike.css'

const AllBike = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  const showDetails = (product) => {
    let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            newCart = [...cart , product]
        }
        else{
            const rest = cart.filter(pd => pd.id !== product.id);
            newCart = [...rest,exists]
        }
        setCart(newCart);
  }
  const removeAll = () =>{
    setCart([]);
  }
  const chooseOne = () =>{
    let choose  = [];
    const picker = Math.floor(Math.random()*cart.length);
    choose.push(cart[picker]);
    setCart(choose);
  }
  return (
    <div className='products mx-5'>
      <div className='product-container'>
        {
          products.map(product => <Bike showDetails={showDetails} key={product.id} product={product}></Bike>)
        }
      </div>
      <div className='text-center ms-3'>
        <div className='cart bg-light'>
          <h3 className='pt-3'>Selected Bike</h3>
          {
            cart.map(product => <Cart key={product.id} product={product}></Cart>)
          }
          <button onClick={chooseOne} className='btn bg-success w-100 text-white my-2'>Choose 1 for me</button>
          <button onClick={removeAll} className='btn bg-success w-100 text-white'>Choose Again</button>
        </div>
      </div>
    </div>
  );
};

export default AllBike;