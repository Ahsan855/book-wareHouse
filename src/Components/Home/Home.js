import React from 'react';

const Home = () => {
    return (
        <div className='grid w-4/5 mx-auto md:grid-cols-2 sm:grid-cols-1 p-8 text-left'>
            <div className='h-50 my-auto'>
                <h1>The Art of <span className='text-blue-500'>Thinking Clearly</span></h1>

                <h5 className='text-stone-700 py-4'>Clear thinking is the ability to express ideas in a simple and straightforward manner. It also involves the ability to analyse statements and follow logical arguments. Some people imagine it means being super-clever or having a high...</h5>
                <button className='px-4 py-2 rounded-lg hover:bg-blue-800 duration-300 bg-blue-500 text-white '>Read More</button>
            </div>
            <div>
                <img src="https://static-01.daraz.com.bd/p/96e9ba93b6e1025e4a71273250542e65.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;