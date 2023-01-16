import React, { useState } from 'react';
import './shop.css';
import Product from '../product/Product';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import '../../utilities/fakedb';
const Shop = () => {
    const products = useLoaderData();
    return (
        <div className='div-container'>
            <div className='shop-container'>
                <div className='row'>
                    {products.length}
                    <div className = "col-md-4">
                {/* {products.map(pd => <Product name={pd.name} ></Product>)}   */}
                </div>
                </div>          
            </div>
            <div className='card-container'>
               {/* <Cart cart={cart}></Cart> */}
            </div>
        </div>
    );
};
export default Shop;