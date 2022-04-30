import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
        <footer className='text-center p-8 bg-gray-700'>
             <h5 className="text-white"> All Rights Reserved By &copy; Ahsan Habib {year}Book-WareHouse | Powered by eBook-WareHouse</h5>
        </footer>
      )
};

export default Footer;
