import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
