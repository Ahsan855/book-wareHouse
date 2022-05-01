import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="p-20 mt-28">
            <img className='block mx-auto' src="https://static.doofinder.com/main-files/uploads/2019/08/110655-404-not-found-Doofinder.jpg" alt="" />
            <Link
          to="/"
          className="px-4 py-2 no-underline rounded-lg hover:bg-blue-800 duration-300 bg-blue-500 text-white"
        >
          Go Back Home
        </Link>
        </div>
    );
};

export default NotFound;