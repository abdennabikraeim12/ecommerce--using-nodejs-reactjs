import logo from './logo.svg';
import './App.css';
import Home from './view/home/home';
import Navbar from './component/navbar';
import Footter from './component/footter';
import Product from './component/product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './view/home/login';
import Register from './view/home/register';
import ShopDetail from './view/home/shopDetaill';
import Cart from './view/home/cart'

function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/"element={ <Home />}></Route>
 

    <Route path="/"element={<Footter></Footter>}></Route>
    <Route path="/"element={<Product></Product>}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path='/ShopDetail/:id' element={<ShopDetail></ShopDetail>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>{/* {<Cart/>} hya nafseha fil ligne 11 bel majuskul */}


    </Routes>

    </BrowserRouter>

  
  );
}

export default App;
