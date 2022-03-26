import React from "react";

const Products = () => {
  return (
    <div className="col-8">
      <div className="row gx-5">
        <div class="card col-lg-4 m-5">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
          <div className="card-footer">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
