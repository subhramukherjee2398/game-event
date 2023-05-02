

import React from 'react';
import './style.css';

function Cart({product,AddtoCart}) {
  return (
    <div className="cart">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={()=>AddtoCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Cart;