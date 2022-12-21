import './Global.css'
import Navbar from './components/Navbar/Main-Navbar';
import SmallNavBar from './components/Small-Navbar/Small-Nav';
import Mobile from './Pages/mobilep/MobilePhone';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home&kitchen/Home';
import ProductAction from './Pages/ProductAction/ProductAction';
import Info from './Pages/ProductAction/Info';
import AddProduct from './Pages/ProductAction/AddProduct';
import AppCart from './Pages/cart/Cart';
import HomePage from './components/Home-page/Home-page';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SmallNavBar />
      <Routes>
        <Route path='/' element={ <HomePage/>} />
        <Route path="mobile" element={  <Mobile /> } />
        <Route path="productaction" element={ <ProductAction/>} />
        <Route path="home-kitchen" element={  <Home/> } />
        <Route path="info/:productId" element={ <Info/>} />
        <Route path="addproduct" element={ <AddProduct/> } />
        <Route path='cart-app' element={ <AppCart/>} />
      </Routes>
      <Footer/>
      
      
      
      
    </div>
  );
}

export default App;
