import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({ handleClick, product }) => {
  const { picture, name, price } = product;
  return (
    <div className="col-lg-6 col-md-6 my-3">
      <div className="card">
        <img src={picture} className="img-fluid" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-title">Price: ${price}</h5>
        </div>
        <div>
          <button
            onClick={() => handleClick(product)}
            className="btn-secondary rounded mb-4"
          >
            Add To Cart <FontAwesomeIcon  icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
