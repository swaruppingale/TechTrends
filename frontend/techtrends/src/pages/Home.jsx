import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import 'tailwindcss/tailwind.css'; // Import Tailwind

const Home = () => {
  return (
    <div className="p-4 h-screen overflow-y-auto no-scrollbar bg-gray-100 w-[100vw]">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <i className="fas fa-bars text-2xl"></i>
        <div className="flex items-center">
          <img src="https://placehold.co/30x30" alt="Logo" className="mr-2" />
          <span className="text-xl font-semibold">Audio</span>
        </div>
        <img src="https://placehold.co/30x30" alt="User profile" className="rounded-full" />
      </header>

      {/* Greeting Section */}
      <div className="mb-6">
        <p className="text-lg">Hi, Andrea</p>
        <h1 className="text-2xl font-semibold leading-tight">What are you looking for today?</h1>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search headphone"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <i className="fas fa-search absolute top-3 right-3 text-gray-400"></i>
        </div>
      </div>

      {/* Category Section */}
      <div className="mb-6">
        <div className="flex space-x-4 overflow-x-auto no-scrollbar">
          <button className="px-4 py-2 bg-green-500 text-white rounded-full whitespace-nowrap">
            Headphone
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">
            Headband
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">
            Earpads
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap">
            Cable
          </button>
        </div>
      </div>

      {/* Featured Product Section */}
      <div className="mb-6">
        <div className="p-4 bg-white rounded-lg shadow w-full">
          <h2 className="text-xl font-semibold mb-2">TMA-2 Modular Headphone</h2>
          <img
            src="https://placehold.co/100x100"
            alt="TMA-2 Modular Headphone"
            className="mb-2 w-full object-cover"
          />
          <a href="#" className="text-green-500">
            Shop now <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Featured Products</h2>
          <a href="#" className="text-gray-500">See All</a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <img
              src="https://placehold.co/100x100"
              alt="TMA-2 HD Wireless"
              className="mb-2 w-full object-cover"
            />
            <h3 className="text-lg font-semibold">TMA-2 HD Wireless</h3>
            <p className="text-gray-500">USD 350</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <img
              src="https://placehold.co/100x100"
              alt="CO2 – Cable"
              className="mb-2 w-full object-cover"
            />
            <h3 className="text-lg font-semibold">CO2 – Cable</h3>
            <p className="text-gray-500">USD 25</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around shadow-md">
        <a href="#" className="text-gray-500">
          <i className="fas fa-home text-2xl"></i>
        </a>
        <a href="#" className="text-gray-500">
          <i className="fas fa-search text-2xl"></i>
        </a>
        <a href="#" className="text-gray-500">
          <i className="fas fa-shopping-cart text-2xl"></i>
        </a>
        <a href="#" className="text-gray-500">
          <i className="fas fa-user text-2xl"></i>
        </a>
      </nav>
    </div>
  );
};

export default Home;
