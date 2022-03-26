import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleClick = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="row">
      <div className="col-8">
        <div className="row">
          {products.map((product) => (
            <Product
              key={product.id}
              handleClick={handleClick}
              product={product}
            ></Product>
          ))}
        </div>
      </div>
      <div className="col-4 ">
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Body;
