import React from "react";
import Item from "../CartItem/Item";

const Cart = ({ cart }) => {
  let selected = [];
  

  for (const product of cart) {
    selected = [...selected, product];
  }
 

  return (
    <div className=" bg-white rounded ">
      <h3>Selected Items {cart.length}</h3>
      {selected.map((item) => (
        <Item item={item} key={item.id}></Item>
      ))}
      <button className="bg-secondary rounded mb-2 text-white">Choose One</button>
    </div>
  );
};

export default Cart;
