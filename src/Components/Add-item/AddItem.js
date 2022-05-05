import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const AddItem = () => {
  const handleAddItem = async (e) => {
    e.preventDefault();
    const allbooks = {
      productName: e.target.productName.value,
      image: e.target.image.value,
      Discriptions: e.target.Discriptions.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      supplier: e.target.supplier.value,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/books",
        allbooks
      );
      console.log(data);

      if (data.acknowledged === true) {
        return toast.success(`New Product added`);
      }

      toast.success(data.message);
      console.log(allbooks);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="register-form mb-5">
      <h2 className="text-center text-blue-500">Please AddItem</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          name="productName"
          id=""
          placeholder="Product Name"
        />
        <input type="text" name="image" placeholder="image-url" />
        <input type="number" name="price" placeholder="price" />
        <input
          type="text"
          name="Discriptions"
          id=""
          placeholder="Discriptions"
        />
        <input type="text" name="quantity" id="" placeholder="Quantity" />
        <input type="text" name="supplier" id="" placeholder="Suplier Name" />
        <input
          className="w-50 mx-auto btn btn-primary mt-2"
          type="submit"
          value="Add-Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
