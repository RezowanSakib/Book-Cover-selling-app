import React from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

const Body = () => {
  return (
    <div className="row">
      <Products></Products>
      <Cart></Cart>
    </div>
  );
};

export default Body;
