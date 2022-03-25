import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import AllBike from './Components/AllBike/AllBike';

function App() {
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  console.log(products);
  return (
    <div>
      <h1 className='text-success text-center'>Bike Depot</h1>
      {/* <img src={product[0].picture} alt="" /> */}
      {
        products.map(product => <AllBike product={product}></AllBike>)
      }
      
    </div>
  );
}

export default App;
