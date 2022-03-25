import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AllBike from './Components/AllBike/AllBike';
function App() {
  // console.log(products);
  return (
    <div className='container'>
      <Header></Header>
      <AllBike></AllBike>
          
    </div>
  );
}

export default App;
