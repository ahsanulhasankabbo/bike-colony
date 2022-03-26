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
    if (cart.length < 4) {
      let newCart = [];
      const exists = cart.find(pd => pd.id === product.id);
      if (!exists) {
        newCart = [...cart, product]
      }
      else {
        const rest = cart.filter(pd => pd.id !== product.id);
        newCart = [...rest, exists]
      }
      setCart(newCart);
    }
  }
  const removeAll = () => {
    setCart([]);
  }
  const removeOne = (product) => {
    let empty = [];
    const rest = cart.filter(pd => pd.id !== product.id);
    empty = [...rest]
    setCart(empty);
  }
  const chooseOne = () => {
    let choose = [];
    const picker = Math.floor(Math.random() * cart.length);
    choose.push(cart[picker]);
    setCart(choose);
  }
  return (
    <div className='products'>
      <div className='product-container'>
        {
          products.map(product => <Bike showDetails={showDetails} key={product.id} product={product}></Bike>)
        }
      </div>
      <div className='text-center ms-3'>
        <div className='cart bg-light'>
          <h3 className='pt-3'>Selected Bike</h3>
          {
            cart.map(product => <Cart removeOne={removeOne} key={product.id} product={product}></Cart>)
          }
          <div className='ps-3'>
          <button onClick={chooseOne} className='btn bg-success d-block text-white my-2'>Choose 1 for me</button>
          <button onClick={removeAll} className='btn bg-success d-block text-white'>Choose Again</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBike;