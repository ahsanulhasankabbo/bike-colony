import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AllBike from './Components/AllBike/AllBike';
import Question from './Components/Question/Question';
function App() {
  // console.log(products);
  return (
    <div>
      <Header></Header>
      <AllBike></AllBike>
      <Question></Question>

    </div>
  );
}

export default App;
