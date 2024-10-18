import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome
import Logo from '../assets/images/Logo.svg'
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-white shadow-sm">
      <img src={Logo} className="flex item-center scale-150"/>
      <div className="flex items-center">
        
        <span className="text-2xl font-semibold">TechTrends</span>
      </div>
      <img
        src="https://placehold.co/30x30"
        alt="User profile"
        className="rounded-full"
      />
    </header>
  );
};

export default Header;
