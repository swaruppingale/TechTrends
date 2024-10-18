import React from 'react';
import { FaArrowLeft, FaShoppingCart, FaStar } from 'react-icons/fa';
import { useLocation, useParams } from 'react-router-dom'; // Use to extract state and params
import Header from "./Header"; // Import Header component
import Navbar from "./Navbar"; // Import Navbar component

export default function Review() {
  const location = useLocation();
  const { item } = location.state || {}; // Get the product data from state
  const { name } = useParams(); // Get product name from URL if needed

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Fixed Header */}
      <Header />
      
      {/* Product Price and Name */}
      {item ? (
        <>
          <div className="text-green-500 text-sm mt-16">--back--</div>
          <div className="text-2xl font-bold">{item.name}</div>

          {/* Navigation Tabs
          <div className="flex space-x-4 mt-4">
            <div className="text-black font-medium border-b-2 border-green-500">Overview</div>
            <div className="text-gray-500">Features</div>
            <div className="text-gray-500">Specification</div>
          </div> */}

          {/* Product Image */}
          <div
            className="flex items-center justify-center min-h-80 bg-cover bg-center my-8"
            style={{ backgroundImage: `url(${item.image})` }} // Use the product image
          >
            {/* <img src={item.image} alt="Product" className="w-40 h-40" /> */}
          </div>

          {/* Product Price and Add to Cart Button */}
          <div className="text-center">
            <div className="text-green-600 text-xl font-bold mb-2">₹{item.price}</div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center justify-center">
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <div className="text-lg font-medium">Review (100)</div>
            <div className="mt-4">
              {/* Review 1 */}
              <div className="flex items-start space-x-4">
                <img
                  src="https://placehold.co/50x50"
                  alt="Reviewer 1"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">Madeline</div>
                    <div className="text-gray-500 text-sm">1 Month ago</div>
                  </div>
                  <div className="flex items-center mt-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <div className="text-gray-700 mt-2">
                    I recently purchased the {item.name}, and I’m absolutely thrilled with the experience they provide. The sound quality is simply outstanding — punchy bass that makes listening to music a true pleasure.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>No product data available</div>
      )}

      {/* Bottom Navigation */}
      {/* Fixed Navbar */}
      <Navbar />
    </div>
  );
}
