import React, { useEffect, useState } from "react";
import AllInventory from "../AllInventory/AllInventory";
import Product from "../Product/Product";
const AllItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allbooks")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div id="services" className="container">
      <div className="row">
        <h1 className="text-primary text-center my-5">Our WareHouses</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllItems;
