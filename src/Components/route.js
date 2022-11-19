import { createBrowserRouter } from "react-router-dom";
import { getProductAndCart } from "../utilites/loader";
import Cart from "./Cart";
import Home from "./Home";
import Root from "./Root";
import Shop from "./Shop";

export const router=createBrowserRouter([
    {
        path:'/',
        loader:getProductAndCart,
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
             }
            ,{
                path:'shop',
                element:<Shop></Shop>
            },
            {
                path:'cart',
                element:<Cart></Cart>
            }
        ]
    }
])