import React from 'react';
import { FaArrowLeft, FaShoppingCart, FaStar } from 'react-icons/fa';
import headphone from '../assets/images/headphone.svg';


export default function Review() {
  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Top Bar with Navigation and Cart Icons */}
      <div className="flex justify-between items-center mb-4">
        <FaArrowLeft className="text-xl" />
        <FaShoppingCart className="text-xl" />
      </div>

      {/* Product Price and Name */}
      <div className="text-green-500 text-sm">USD 350</div>
      <div className="text-2xl font-bold">TMA-2</div>
      <div className="text-2xl font-bold">HD WIRELESS</div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mt-4">
        <div className="text-black font-medium border-b-2 border-green-500">Overview</div>
        <div className="text-gray-500">Features</div>
        <div className="text-gray-500">Specification</div>
      </div>

      {/* Product Image */}
      <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{headphone: 'url(${headphone})' }}
    />

      {/* Reviews Section */}
      <div className="mt-4">
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
              I recently purchased the TMA-2 HD Wireless headphones, and I’m absolutely thrilled with the experience they provide. The sound quality is simply outstanding — punchy bass that makes listening to music a true pleasure.
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex items-start space-x-4 mt-4">
            <img
              src="https://placehold.co/50x50"
              alt="Reviewer 2"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="font-medium">Irfan</div>
                <div className="text-gray-500 text-sm">3 Month ago</div>
              </div>
              <div className="flex items-center mt-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <div className="text-gray-700 mt-2">
                
The collar band is sleek, lightweight, and incredibly comfortable to wear throughout the day. The snug fit keeps it in place during workouts, and the sound quality is surprisingly good for such a compact design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
