import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ProductsPage from './ProductsPage.js';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  const getProducts = () => {
    let url = 'https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/store/products';
    axios.get(url)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  
  useEffect(getProducts, []);
  
  const showProductPage = (product) => {
    
  }
  
  const addToCart = (product, quantity) => {
    
  }
  
  const removeFromCart = (product, quantity) => {
    
  }
  
  const showCart = () => {
    
  }
  
  return (
    <>
      <div className='container-fluid'>
        <ProductsPage products={products}></ProductsPage>
      </div>
    </>
  );
}

export default App;
