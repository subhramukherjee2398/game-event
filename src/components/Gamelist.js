import React, { useState } from "react";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

const Gamelist = () => {
  const [addGame, setAddgame] = useState([]);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Hi Stricker",
      price: 10.99,
      image: "https://i.imgur.com/WwkgPd5.jpg",
    },
    {
      id: 2,
      name: " Puch Challange",
      price: 14.99,
      image: "https://i.imgur.com/WwkgPd5.jpg",
    },
    {
      id: 3,
      name: "Bow & Arrow",
      price: 12.99,
      image: "https://i.imgur.com/WwkgPd5.jpg",
    },
    {
      id: 4,
      name: "Catch Fish",
      price: 8.99,
      image: "https://i.imgur.com/WwkgPd5.jpg",
    },
  ];

  const AddtoCart = (product) => {
    setAddgame([...addGame, product]);
  };

  return (
    <>
      {/* <div>
        {console.log(addGame,'addgame')}
      <div>
        <button onClick={()=>navigate('/checkout')}>Total Games{addGame.length}</button>
      </div>
      {products.map((product) => (
        <Cart product={product} AddtoCart={AddtoCart} />
      ))}
    </div> */}
      <div>
        <div className="products">
        {products.map((product) => (
        <Cart product={product} AddtoCart={AddtoCart} />
      ))}
          </div>
      </div>
    </>
  );
};

export default Gamelist;
