import {createBrowserRouter} from "react-router-dom";
import Main from '../layouts/Main';
import Shop from '../components/shop/Shop';
import Product from "../components/product/Product";
import Inventory from "../components/Inventory/Inventory"
import Orders from "../components/Oders/Orders";
import About from  "../components/About/About";
import '../utilities/fakedb';
export const router = createBrowserRouter([
{
  path : '/',
  element : <Main></Main>,
  children : [
    {
      path : '/',
      loader:()=>fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'),
      element : <Shop></Shop>
    },
    {
      path : '/product',
      element : <Product></Product>
    },
    {
      path : '/orders',
      loader : async()=>{
        return fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
      },
      element : <Orders></Orders>
    },
    {
      path : '/about',
      element : <About></About>
    },
    {
      path : '/manage',
      element : <Inventory></Inventory>
    }
  ]
}
])