import React from "react";

const Navbar = ({
  cart,
  setShowCart,
  setShowLogin,
  setShowRegister,
  setShowCheckout,
}) => {
  // Navigate to website sections
  const goToSection = (section) => {
    setShowCart(false);
    setShowCheckout(false);
    setShowLogin(false);
    setShowRegister(false);

    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  // Open Cart
  const openCart = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowCheckout(false);
    setShowCart(true);
  };

  // Open Login
  const openLogin = () => {
    setShowCart(false);
    setShowCheckout(false);
    setShowRegister(false);
    setShowLogin(true);
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
          <button
            onClick={() => goToSection("home")}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Home
          </button>

          <button
            onClick={() => goToSection("menu")}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Menu
          </button>

          <button
            onClick={() => goToSection("about")}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            About
          </button>

          <button
            onClick={() => goToSection("contact")}
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Contact
          </button>

          {/* Login */}
          <button
            onClick={openLogin}
            className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50"
          >
            Login
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
