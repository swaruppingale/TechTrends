import React from "react";
import Home from "../pages/Home.jsx";
import Review from '../pages/Review.jsx';
import Cart from "../pages/cart.jsx"
import Login from "../pages/SignIn.jsx"
import SignUp from "../pages/SignUp.jsx"
import CHKOUT from "../pages/cktout.jsx"; //ok eror
import MYORDERS from "../pages/myorders.jsx";
const Routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/review/:name", // Add dynamic parameter for product name
    element: <Review />,
  },
  {
    path:"/cart",
    element: <Cart/>
  },
  {
    path:"/",
    element: <Login/>
  },
  {
    path:"/signup",
    element: <SignUp/>
  },
  {
    path:"/checkout",
    element: <CHKOUT/>
  },
  {
    path:"/orders",
    element: <MYORDERS/>
  }
];

export default Routes;
