import React from "react";
import { Link } from "react-router-dom";
import Products from "../Products/Products";

const ManageItem = () => {
  return (
    <div className="p-8">
      <Link to="/additem" className="btn btn-outline-primary w-48 mx-auto">
        Add Item
      </Link>
      <Products></Products>
    </div>
  );
};

export default ManageItem;
