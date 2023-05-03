import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

const Gamelist = () => {
  const [addGame, setAddgame] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("purchas", JSON.stringify(addGame));
  }, [addGame]);

  const products = [
    {
      id: 1,
      name: "Hi Stricker",
      price: 10.99,
      image:
        "https://media.istockphoto.com/id/512398888/vector/growing-money.jpg?s=612x612&w=0&k=20&c=zVLZ2aGEFSH_zt9MA8I8-EOw2WM4EoBC_rwHe5KQZfU=",
    },
    {
      id: 2,
      name: " Puch Challange",
      price: 14.99,
      image:
        "https://www.diggysguide.com/maps/new-world/side-quest/ah-puchs-challenge/26-4%20Ah%20Puch_s%20Challenge.jpg",
    },
    {
      id: 3,
      name: "Bow & Arrow",
      price: 12.99,
      image:
        "https://lh3.googleusercontent.com/Zi7qvXXJiWjcZXlAFGtVLyy3iUSn6fs4lFaJsbav2YNqvP5vl59HlHUi4FRfnGKkBXaZLfZhx6NZ9PGXonnOvutY=w640-h400-e365-rj-sc0x00ffffff",
    },
    {
      id: 4,
      name: "Catch Fish",
      price: 8.99,
      image:
        "https://www.improvememory.org/wp-content/uploads/2020/07/fishing-frenzy-game.png",
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
      <div class="sp-cart" onClick={() => navigate("/checkout")}>
        <span class="count">{addGame.length}</span>
        {/*   <span class="count">1</span> */}
        <i class="fa fa-shopping-bag" style={{fontSize:'50px',color:'#FFD95A'}} ></i>
       {/*  <img
          src="https://logowik.com/content/uploads/images/shopping-bag6504.jpg"
          alt="cart"
        /> */}
      </div>
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
