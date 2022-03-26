import React from "react";

const Product = (props) => {
  console.log(props);
  const { picture, name, price } = props.product;
  return (
    <div className="col-6 my-3">
      <div className="card">
        <img src={picture} className="img-fluid" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-title">Price: ${price}</h5>
        </div>
        <div>
          <button className="btn-secondary rounded mb-4">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
