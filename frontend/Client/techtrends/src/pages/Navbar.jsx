import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation

const Navbar = () => {
  const dispatch = useDispatch();
  const cartstate = useSelector((state) => state.cartReducer);
  const hasItemsInCart = cartstate.cartItems.length > 0;

  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for showing the logout modal
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Function to handle the logout process
  const handleLogout = () => {
    // Clear localStorage or any other necessary session clean-up
    localStorage.removeItem('currentUser');

    // Optionally, dispatch a logout action if needed
    // dispatch(logoutUser());

    // Redirect to the login page
    navigate('/');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around shadow-md">
      {/* Home Icon linked to /home */}
      <Link to="/home" className="text-gray-500">
        <i className="fas fa-home text-2xl"></i>
      </Link>

      {/* Search Icon - No link for now */}
      <a href="#" className="text-gray-500">
        <i className="fas fa-shipping-fast text-2xl"></i>
      </a>

      {/* Cart Icon linked to /cart */}
      <Link to="/cart" className="relative text-gray-500">
        <i className="fas fa-shopping-cart text-2xl"></i>
        {hasItemsInCart && (
          <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full"></span>
        )}
      </Link>

      {/* User Icon for logout */}
      <a
        href="#"
        className="text-gray-500"
        onClick={() => setShowLogoutModal(true)} // Show the logout modal when the user icon is clicked
      >
        <i className="fas fa-user text-2xl"></i>
      </a>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-around">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={handleLogout} // Call handleLogout to log out and redirect
              >
                Yes, Logout
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded-lg"
                onClick={() => setShowLogoutModal(false)} // Close the modal if user cancels
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
