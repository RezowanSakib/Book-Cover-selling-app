import React, { useState } from "react";
import Item from "../CartItem/Item";

const Cart = ({ cart }) => {
  let selected = [];

  for (const product of cart) {
    selected = [...selected, product];
  }
  const [lucky, setLucky] = useState([]);
  const luckyItem = () => {
    const item = selected[Math.floor(Math.random() * selected.length)];
    setLucky(item);
  };

  return (
    <div className=" bg-white rounded ">
      <h3>Selected Items {cart.length}</h3>
      {selected.map((item) => (
        <Item item={item} key={item.id}></Item>
      ))}
      {<h1> {lucky.name}</h1>}
      <button
        onClick={luckyItem}
        className="bg-secondary rounded mb-2 text-white mx-2"
      >
        Choose One
      </button>
      <button className="bg-secondary rounded mb-2 text-white">
        Clear Item
      </button>
    </div>
  );
};

export default Cart;
