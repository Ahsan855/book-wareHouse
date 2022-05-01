import React, { useEffect, useState } from 'react';
import AllInventory from '../AllInventory/AllInventory';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div id="services" className='container'>
            <div className="row">
            <h1 className='text-primary text-center my-5'> Our WareHouses</h1>
            <div className="services-container grid md:grid-cols-3 grid-cols-1 gap-3">
            {
                products.map(product => <AllInventory
                    key={product._id}
                    product={product}
                >
                </AllInventory>)
            }
            </div>
            </div>
        </div>
    );
};

export default Products;