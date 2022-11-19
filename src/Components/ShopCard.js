import React from 'react';

const ShopCard = ({data,handleClick}) => {
   
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure><img src={data.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p>category : {data.category}</p>
          <p>Price : {data.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=>handleClick(data)}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default ShopCard;