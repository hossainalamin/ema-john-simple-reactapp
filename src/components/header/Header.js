import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import './Header.css'; 
const Header = ()=>{
    return(
        <div className="header">
            <div className="image">
                <img src={logo} alt="header logo"></img>
            </div>
            <div className="nav-bar">
            <nav>
                <Link to ={'/'}>Shop</Link>
                <Link to ={'/product'}>Product</Link>
                <Link to ={'/orders'}>Orders</Link>
                <Link to ={'/about'}>About</Link>
                <Link to={'/manage'}>Manage Inventory</Link>
            </nav>
            </div>
             
        </div>
    )
}
export default Header;