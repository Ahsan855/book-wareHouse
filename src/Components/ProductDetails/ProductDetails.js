import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [addQuantity, setAddQuantity] = useState(1);
  const { supplier, quantity, price, Discriptions, image, name } =product;
  useEffect(() => {
    fetch(`http://localhost:5000/book/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);


  const updateQuantity = (e) => {
    const qt = e.target.value;
    const total = parseInt(qt);
    // console.log(total)
    setAddQuantity(total);
    console.log(addQuantity);
  };
  // add quantity
  const handleAddQuantity = async () => {
    let deliver = addQuantity;
    let quantityParse = parseInt(product.quantity);
    let quantity = quantityParse + deliver;
    const productinfo = {
      supplier: product.supplier,
      price: product.price,
      Discriptions: product.Discriptions,
      image: product.image,
      name: product.name,
      quantity: quantity,
    };
    const url = `http://localhost:5000/book/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(productinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(productinfo);
      });
  };
  // delivari quantity

  const handleDelivary = async () => {
    let deliver = 1;
    let quantityParse = parseInt(product.quantity);
    let quantity = quantityParse - deliver;
    const productinfo = {
      supplier: product.supplier,
      price: product.price,
      Discriptions: product.Discriptions,
      image: product.image,
      name: product.name,
      quantity: quantity,
    };
    const url = `http://localhost:5000/book/${productId}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(productinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(productinfo);
      });
  };
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
          <input
            onBlur={updateQuantity}
            className="bg-blue-100 border-2 rounded-lg px-4 py-3"
            type="number"
            name="quantity"
            id=""
            placeholder="Quantity"
          />
        </form>
        <div className="flex justify-around mt-5">
          <button onClick={() => handleDelivary()} className="btn btn-primary">
            Delivered
          </button>
          <button
            onClick={() => handleAddQuantity()}
            className="btn btn-primary"
          >
            Add Quantity
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
