// Filter.js
import React from 'react';
import { FaTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Filter() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Filter</h1>
        <FontAwesomeIcon icon={FaTimes} className="text-xl" />
      </div>

      <div>
        <h2 className="text-lg font-semibold">Category</h2>
        <div className="flex space-x-2 mt-2">
          <button className="px-4 py-2 bg-green-500 text-white rounded-full">
            Headphone
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-500 rounded-full">
            Headband
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-500 rounded-full">
            Earpads
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Sort By</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          <button className="px-4 py-2 bg-green-500 text-white rounded-full">
            Popularity
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-500 rounded-full">
            Newest
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-500 rounded-full">
            Oldest
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-500 rounded-full">
            High Price
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-500 rounded-full">
            Low Price
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-500 rounded-full">
            Review
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Price Range</h2>
        <div className="flex space-x-2 mt-2">
          <input
            type="text"
            placeholder="Min Price"
            className="w-full px-4 py-2 border border-gray-300 rounded-full"
          />
          <input
            type="text"
            placeholder="Max Price"
            className="w-full px-4 py-2 border border-gray-300 rounded-full"
          />
        </div>
      </div>

      <button className="w-full px-4 py-2 bg-green-500 text-white rounded-full mt-4">
        Apply Filter
      </button>
    </div>
  );
}
