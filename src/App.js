
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom" ;
import CardsDetails from './components/Cart';
import Cards from './components/Cards';




import 'react-toastify/dist/ReactToastify.css';
//toast.configure()


function App() {
  return (
   <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/cart' element = {<CardsDetails/>} />
      </Routes>
   </>
  );
}

export default App;
