import React from 'react';

const Item = ({item}) => {
    const {name,picture,price}=item;
    return (
        <div>
           <h1>Name: {name}</h1>
           <img src={picture} className="img-fluid" alt="" />
           <h4>Price: {price}</h4>
        </div>
    );
};

export default Item;