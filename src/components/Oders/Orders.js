import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h2>This is order page : {products.length}</h2>
        </div>
    );
};

export default Orders;