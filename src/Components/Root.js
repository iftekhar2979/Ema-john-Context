import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
// import {products,intialCart} from '../utilites/loader'
export const productContext=createContext([])
export const cartContext=createContext([])
const Root = () => {
    const {products,intialCart}=useLoaderData()
    // console.log(products);
    // console.log(intialCart);
    const [carts,setCarts]=useState(intialCart)
    // console.log(carts);
    return (
     <productContext.Provider value={products}>
        <cartContext.Provider value={[carts,setCarts]}>
                 <Navbar></Navbar>
                <Outlet></Outlet>
        </cartContext.Provider>
     </productContext.Provider>
    );
};

export default Root;