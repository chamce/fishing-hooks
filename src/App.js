import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ProductsPage from './ProductsPage.js';

function App() {
  return (
    <>
      <ProductsPage></ProductsPage>
    </>
  );
}

export default App;
