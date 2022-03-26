import React from "react";

const Item = ({ item }) => {
  const { name, picture, price } = item;
  return (
    <div className="row mb-2 ">
      <div className="col-6">
        <img src={picture} className="img-fluid p-2" alt="" />
      </div>

      <div className="col-4">
        <small>{name}</small> <br />
        <small>$ {price}</small>
      </div>
    </div>
  );
};

export default Item;
