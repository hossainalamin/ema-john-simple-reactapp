import React from "react";
const Cart = (probs)=>{
    const cart = probs.cart;
    console.log(cart);
    let total = 0;
    for(let i = 0 ;i<cart.length ; i++)
    {
        const product = cart[i];
        total = total+Number(product.price);
    }

    return(
        <div>
            <h3>Add to Cart</h3>
            <p>Ordered Item : {cart.length}</p>
            <p>Total : {total}</p>
        </div>
    )
}
export default Cart;