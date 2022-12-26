import React, { useState } from 'react';
import './shop.css';
import Product from '../product/Product';
const Shop = () => {
    const first10 = [
        {"name":"mobile","specification":"Nice mobile phone","price":"20000"},
        {"name":"television","specification":"Nice television","price":"200000"},
        {"name":"computer","specification":"Nice computer","price":"2000000"},
        {"name":"laptop","specification":"Nice laptop","price":"20000"},
        {"name":"watch","specification":"Nice watch","price":"200"},
        {"name":"wallet","specification":"Nice wallet","price":"201200"},
        {"name":"speaker","specification":"Nice speaker","price":"2000"},
        {"name":"cloths","specification":"Nice cloths","price":"2000"},
        {"name":"shoe","specification":"Nice shoe","price":"200"},
    ]
    const addEventHander = (products)=> {
        const newCart = [...cart, products];
        setCart(newCart);
    }
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    return (
        <div className='div-container'>
            <div className='shop-container'>
            <ul>
                {products.map(pd => <Product name={pd.name} specification = {pd.specification} 
                price = {pd.price} addEventHander = {addEventHander}></Product>)}            
            </ul>
            </div>
            <div className='card-container'>
                <h3>Add to Cart</h3>
                <p>Order summery : {cart.length}</p>
            </div>
        </div>
    );
};
export default Shop;