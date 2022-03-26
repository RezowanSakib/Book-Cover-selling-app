import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Body = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="row">
      <div className="col-8">
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
};

export default Body;
