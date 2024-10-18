import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome
import "tailwindcss/tailwind.css"; // Import Tailwind
import { useDispatch, useSelector } from "react-redux";
import { getAllitems } from "../actions/itemsAction";
import { Link } from 'react-router-dom'; // Import Link for navigation
import Header from "./Header"; // Import Header component
import Navbar from "./Navbar"; // Import Navbar component

const Home = () => {
  const dispatch = useDispatch();
  const itemstate = useSelector((state) => state.getAllItemReducer);
  const { loading, items, error } = itemstate; // Correct destructuring here
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    dispatch(getAllitems());
  }, [dispatch]);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Fixed Header */}
      <Header />

      {/* Main content */}
      <div className="flex-grow mt-[70px] p-4 bg-gray-100">
        <div className="mb-4 px-4">
          <p className="text-lg">Hi, Andrea</p>
          <h1 className="text-2xl font-semibold leading-tight">
            What are you looking for today?
          </h1>
        </div>

        {/* Featured Products */}
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>ERROR WHILE FETCHING ITEMS</h1>
          ) : Array.isArray(items) && items.length > 0 ? (
            <div className="px-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Featured Products</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    to={{
                      pathname: `/review/${item.name}`, // Navigate to review page with product name in URL
                    }}
                    state={{ item }} // Pass item data via state
                    className="p-4 bg-white rounded-lg shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mb-2 w-full object-cover"
                    />
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">₹{item.price}/-</p>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <h2>No products available</h2>
          )}
        </div>
      </div>

      {/* Fixed Navbar */}
      <Navbar />
    </div>
  );
};

export default Home;
