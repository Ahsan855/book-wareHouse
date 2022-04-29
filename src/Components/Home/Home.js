import React from "react";

const Home = () => {
  return (
    <div>
      <div className="grid mx-auto p-32 bg-pink-100 md:grid-cols-2 sm:grid-cols-1 px-20 text-left">
        <div className="h-50 my-auto">
          <h1>
            The Art of <span className="text-blue-500">Thinking Clearly</span>
          </h1>

          <h5 className="text-stone-700 py-4">
            Clear thinking is the ability to express ideas in a simple and
            straightforward manner. It also involves the ability to analyse
            statements and follow logical arguments. Some people imagine it
            means being super-clever or having a high...
          </h5>
          <button className="px-4 py-2 rounded-lg hover:bg-blue-800 duration-300 bg-blue-500 text-white ">
            Read More
          </button>
        </div>
        <div className="md:ml-48">
          <img
            src="https://static-01.daraz.com.bd/p/96e9ba93b6e1025e4a71273250542e65.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="p-20 bg-gray-200">
          <h1 className="text-center text-primary mb-10">AS FEATURED ON</h1>
          <div className="grid md:grid-cols-6 sm:grid-cols-1 w-4/6 mx-auto">
              <img src="https://covers.powells.com/9780593300237.jpg" alt="" />
              <img src="https://covers.powells.com/1110000358363.jpg" alt="" />
              <img src="https://covers.powells.com/9780593321447.jpg" alt="" />
              <img src="https://covers.powells.com/9780465062881.jpg" alt="" />
              <img src="https://covers.powells.com/9780807003466.jpg" alt="" />
              <img src="https://covers.powells.com/9780593300237.jpg" alt="" />

          </div>

      </div>
    </div>
  );
};

export default Home;
