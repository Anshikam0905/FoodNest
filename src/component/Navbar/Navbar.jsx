import React from "react";

const Navbar = ({ cart, setShowCart }) => {
  // Close Cart and go to section
  const goToSection = (section) => {
    setShowCart(false);

    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  // Open Cart
  const openCart = () => {
    setShowCart(true);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => goToSection("home")}
          className="text-2xl font-bold text-orange-500"
        >
          🍴 Food Nest
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {/* Home */}
          <button
            onClick={() => goToSection("home")}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Home
          </button>

          {/* Menu */}
          <button
            onClick={() => goToSection("menu")}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Menu
          </button>

          {/* About */}
          <button
            onClick={() => goToSection("about")}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            About
          </button>

          {/* Contact */}
          <button
            onClick={() => goToSection("contact")}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Contact
          </button>

          {/* Cart */}
          <button
            onClick={openCart}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
          >
            🛒 Cart ({cart.length})
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
