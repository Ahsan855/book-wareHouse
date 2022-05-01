import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const AddItem = () => {


  return (
    <div className="register-form mb-5">
      <h2 className="text-center text-blue-500">Please AddItem</h2>
      <form>
        <input type="text" name="name" id="" placeholder="Product Name" />
        <input type="text" placeholder='image-url' />
        <input type="text" name="Description" id="" placeholder="Description" />
        <input type="text" name="Quantity" id="" placeholder="Quantity" />
        <input type="text" name="Supliaer" id="" placeholder="Suplier Name" />
        <input
          className="w-50 mx-auto btn btn-primary mt-2"
          type="submit"
          value="Add-Item"
        />
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};


export default AddItem;