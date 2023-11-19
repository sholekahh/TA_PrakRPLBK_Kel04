import Dashboard from "../dashboard/Dashboard";
import Product from '../products/product';


export const ListRoutes = [
    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
    {
        path: "/product",
        element: <Product/>,
    },
];