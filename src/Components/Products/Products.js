import React, { useEffect, useState } from "react";
import axios from "axios";
import AllInventory from "../AllInventory/AllInventory";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fast-river-48046.herokuapp.com/allbooks")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDelete = async (id) => {
    const allAgree = window.confirm(`Are You Sure Delete Item ?`);
    if (allAgree) {
      await axios.delete(`https://fast-river-48046.herokuapp.com/book/${id}`);
      const books = products.filter((item) => item._id !== id);
      setProducts(books);
    }
  };

  return (
    <div id="services" className="container">
      <div className="row">
        <h1 className="text-primary text-center my-5"> Our WareHouses</h1>
        <div className="services-container grid md:grid-cols-3 grid-cols-1 gap-3">
          {products.map((product) => (
            <AllInventory
              key={product._id}
              handleDelete={handleDelete}
              product={product}
            ></AllInventory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
