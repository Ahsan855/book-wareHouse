import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { supplier,Discriptions , name, image, price } = product;
  return (
    <div className="border-gray-300 text-left border-2 mb-10 rounded-lg p-4">
      <img className="w-50 mx-auto" src={image} alt="" />
      <h3 className="mt-3">{name}</h3>
      <p>Price:$ {price}</p>
      <p>{Discriptions.slice(0,180)}...</p>
      <h5 className="text-blue-500">Supplier: {supplier}</h5>
      <button className="px-4 mt-3 py-2 rounded-full hover:bg-blue-800 duration-300 bg-blue-500 text-white">
        Update
      </button>
    </div>
  );
};

export default Product;
