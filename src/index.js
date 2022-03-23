import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {
  Switch,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from "./pages/Products";
import NotFound from './pages/NotFound';



ReactDOM.render(
  <BrowserRouter>
  <Routes>
      <Route path="*" element={<NotFound />} />
        <Route path="/" element={<App />} />
        <Route path="products" element={<Products />} />
        <Route path="/Products/:categoryId" element={<Products />} />
    </Routes>
      
</BrowserRouter>,
  document.getElementById('root')

);