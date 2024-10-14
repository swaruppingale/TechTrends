import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import 'tailwindcss/tailwind.css'; // Import Tailwind

const products = [
  {
    id: 1,
    name: "TMA-2 Modular Headphone",
    price: "1200",
    image: "https://placehold.co/100x100",
    description: "A customizable modular headphone system.",
  },
  {
    id: 2,
    name: "TMA-2 HD Wireless",
    price: "1350",
    image: "https://placehold.co/100x100",
    description: "High-definition wireless modular headphone.",
  },
  {
    id: 3,
    name: "CO2 – Cable",
    price: "2500",
    image: "https://placehold.co/100x100",
    description: "Durable and reliable headphone cable.",
  },
];

const Home = () => {
  return (
    <div className="h-screen bg-gray-100">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-white shadow-sm">
        <i className="fas fa-bars text-2xl"></i>
        <div className="flex items-center">
          <img src="https://placehold.co/30x30" alt="Logo" className="mr-2" />
          <span className="text-xl font-semibold">Audio</span>
        </div>
        <img src="https://placehold.co/30x30" alt="User profile" className="rounded-full" />
      </header>

      {/* Main content with no padding or margin */}
      <div className="flex-grow top-0 left-0 right-0 mt-[70px] p-4 bg-gray-100">
        <div className="mb-4 px-4">
          <p className="text-lg">Hi, Andrea</p>
          <h1 className="text-2xl font-semibold leading-tight">What are you looking for today?</h1>
        </div>

        {/* Search bar */}
        {/* <div className="mb-4 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search headphone"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <i className="fas fa-search absolute top-3 right-3 text-gray-400"></i>
          </div>
        </div> */}

        {/* Categories */}
        {/* <div className="mb-4 px-4">
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
        </div> */}

        {/* Featured Products */}
        <div className="px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Featured Products</h2>
            <a href="#" className="text-gray-500">See All</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div key={product.id} className="p-4 bg-white rounded-lg shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mb-2 w-full object-cover"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500"> ₹{product.price}/-</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Navbar */}
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
