import React from "react";

const Navbar = ({ cart, setShowCart }) => {
  const openCart = () => {
    setShowCart(true);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-orange-500">
          🍴 Food Nest
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Home
          </a>

          <a
            href="#menu"
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Menu
          </a>

          <a
            href="#about"
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Contact
          </a>

          {/* Cart */}
          <a href="#cart">
            <button
              onClick={openCart}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              🛒 Cart ({cart.length})
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
