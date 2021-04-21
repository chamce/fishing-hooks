import React from 'react';
import Product from './Product.js';

function ProductsPage({ products }) {
  return (
    <>
      <div className='row'>
        <h1 className='text-center'>Products</h1>
      </div>
      <div className='row'>
        {products.map((product, index) => <Product product={product} key={index}></Product>)}
      </div>
    </>
  );
}

export default ProductsPage;