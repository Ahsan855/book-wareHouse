import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { supplier, name, image, price } = product;
  return (
    <div className="border-gray-300 border-2 rounded-lg p-8">
      <img className="w-100" src={image} alt="" />
      <h2>{name}</h2>
      <p>Price:$ {price}</p>
      <p>supplier: {supplier}</p>
      <button className="px-4 py-2 rounded-lg hover:bg-blue-800 duration-300 bg-blue-500 text-white">
        Update Now
      </button>
    </div>
  );
};

export default Product;
