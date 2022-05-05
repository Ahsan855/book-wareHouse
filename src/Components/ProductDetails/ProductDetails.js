import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/book/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  const { supplier, quantity, price, Discriptions, image, name } = product;
  console.log(product);
  return (
    <div className="border-gray-300bg-gray-300 text-left container flex justify-center p-4 border-2 rounded-lg">
      <div>
        <img className="img-fluid" src={image} alt="" />
      </div>
      <div className="mx-5">
        <h6 className="text-blue-800 font-bold mt-3">{name}</h6>
        <p>Price:$ {price}</p>
        <p>{Discriptions?.slice(0, 70)}...</p>
        <p>Quantity: {quantity}</p>
        <p className="text-blue-500">Supplier: {supplier}</p>
        <form action="">
        <input className="bg-blue-100 border-2 rounded-lg px-4 py-3" type="number" name="quantity" id="" placeholder="Quantity" />
        </form>
        <div className="flex justify-around mt-5">
        <button className="btn btn-primary">Delivered</button>
        <button className="btn btn-primary">Add Quantity</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
