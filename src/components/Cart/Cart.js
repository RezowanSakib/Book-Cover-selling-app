import React from "react";
import Item from "../CartItem/Item";

const Cart = ({ cart }) => {
  let selected = [];
  let name;
  let price;
  let picture;
  for (const product of cart) {
    selected = [...selected, product];
    name = product.name;
    price = product.price;
    picture = product.picture;
  }

  return (
    <div className=" bg-white">
      <p>Selected Items {cart.length} </p>
      {selected.map((item) => (
        <Item item={item} ></Item>
        
        // <Item key={item.id}></Item>
      ))}
      {/* <div className="row">
        <div className="col-lg-6 col-md-6 my-3"></div>
        
      </div>

      
       */}
    </div>
  );
};

export default Cart;
