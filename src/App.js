import './styles/App.css';
import './styles/Header.css';
import './styles/NavBar.css';
import './styles/ProductCard.css';
import './styles/ProductGrid.css';
import './styles/Carousel.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import Products from "./pages/Products";
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Order from './pages/Order';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ProductPage from './pages/ProductPage';
import { prettyDOM } from '@testing-library/react';
import Grid from './pages/ProductPage';
import Register from './pages/Register';
import LogIn from './pages/LogIn'
import Grid from './pages/ProductPage'
import AdminPage from './pages/AdminPage';

const URL = 'http://localhost/store/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  
 
  }, [])
  
  function addToCart(product){
    if(cart.some(item => item.id === product.id)){
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) +1, product);
    }
    else{
      product['amount'] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount, product){
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart'.JSON.stringify(modifiedCart)); 
  }

  return (
    <>
      <Router>
      <Header />
      <NavBar URL={URL}/>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart}/>}/>
          <Route path="/AboutUs" element={<AboutUs />}/>
          <Route path="/products/:categoryId" element={<Products URL={URL} addToCart={addToCart}/>}/>
          <Route path="/ProductPage" element={<ProductPage />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Login" element={<LogIn />}/>
          <Route path="/order" element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount}/>} />
          <Route path="/products" element={<Products URL={URL}/>}/>
          <Route path="/search/:keywords" element={<Search URL={URL} addToCart={addToCart} />}/>
          <Route path='/AdminPage' element={<AdminPage />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
  
    </>
  );
}

export default App;
