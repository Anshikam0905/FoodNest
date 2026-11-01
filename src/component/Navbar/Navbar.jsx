import React from "react";
import "./Navbar.css";

const Navbar = ({
  cart,
  setShowCart,
  setShowLogin,
  setShowRegister,
  setShowCheckout,
  isLoggedIn,
  setShowProfile,
  userData,
}) => {
  const goToSection = (section) => {
    setShowCart(false);
    setShowCheckout(false);
    setShowLogin(false);
    setShowRegister(false);
    setShowProfile(false);

    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  const openCart = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowCheckout(false);
    setShowProfile(false);
    setShowCart(true);
  };

  const openLogin = () => {
    setShowCart(false);
    setShowCheckout(false);
    setShowRegister(false);
    setShowProfile(false);
    setShowLogin(true);
  };

  const openProfile = () => {
    setShowCart(false);
    setShowCheckout(false);
    setShowLogin(false);
    setShowRegister(false);
    setShowProfile(true);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => goToSection("home")}
          className="text-2xl font-bold text-orange-500"
        >
          🍴 Food Nest
        </button>

        <div className="flex items-center gap-6">
          <button onClick={() => goToSection("home")}>Home</button>
          <button onClick={() => goToSection("menu")}>Menu</button>
          <button onClick={() => goToSection("about")}>About</button>
          <button onClick={() => goToSection("contact")}>Contact</button>

          {isLoggedIn ? (
            <button
              type="button"
              className="foodnest-avatar"
              onClick={openProfile}
              title="My Profile"
            >
              {userData?.name?.trim()?.charAt(0).toUpperCase() || "U"}
            </button>
          ) : (
            <button onClick={openLogin}>Login</button>
          )}

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
