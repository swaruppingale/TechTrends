import React from "react";
import Home from "../pages/Home.jsx";
import Review from '../pages/Review.jsx';

const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/review/:name", // Add dynamic parameter for product name
    element: <Review />,
  },
];

export default Routes;
