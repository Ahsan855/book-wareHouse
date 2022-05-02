import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`product.json/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  return (
    <div>
      <h2>Product : {productId}</h2>
      <h3>Price: {product.price}</h3>
      <h3>Quantity: </h3>
    </div>
  );
};

export default ProductDetails;
