

import React from 'react';
import './style.css';

function Cart({product,AddtoCart}) {
  return (
    <div className="product">
            <img src={product.image} alt='game' />
            <h1>Metin2 Refine Window</h1>
            <div className="price">Add to Cart</div>
    </div>
  );
}

export default Cart;