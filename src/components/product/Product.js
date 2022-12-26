import React from 'react';
import logo from '../../images/giphy.gif'
import './product.css';

const Product = (probs) => {
    const style = {
        'width':'100px',
        'height':'100px',
    }
    return (
        <div className='div-container'>
            <div>
               <img src={logo} alt="logo" style={style}></img>
            </div>
            <div>
                <h1>Name : {probs.name}</h1>
                <h4>Specification : {probs.specification}</h4>
                <p>Price : {probs.price}</p>
                <button className='cart-button' 
                onClick={ () => probs.addEventHander(probs.name)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;