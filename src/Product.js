import React from 'react';

function Product({ product }) {
  return (
    <>
      <div className='col-4'>
        <div className="card mb-3" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title fs-6">{product.name + ' - $' + product.price}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{product.type}</h6>
            <p className="card-text overflow-auto" style={{height: '5rem'}}>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;