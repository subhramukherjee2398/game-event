import React from "react";
import "./style.css";

function Cart({ product, AddtoCart }) {
  return (
    <div className="product">
      <img src={product.image} alt="game" />
      <p>{product.name}</p>
      <p>${product.price}</p>
      <div className="price" onClick={() => AddtoCart(product)}>
        Add to Cart
      </div>
    </div>
  );
}

export default Cart;
