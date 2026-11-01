import React from "react";

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
  // Navigate to website sections
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

  // Open Cart
  const openCart = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowCheckout(false);
    setShowProfile(false);
    setShowCart(true);
  };

  // Open Login
  const openLogin = () => {
    setShowCart(false);
    setShowCheckout(false);
    setShowRegister(false);
    setShowProfile(false);
    setShowLogin(true);
  };

  // Open Profile
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
        {/* Logo */}
        <button
          onClick={() => goToSection("home")}
          className="text-2xl font-bold text-orange-500"
        >
          🍴 Food Nest
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <button onClick={() => goToSection("home")}>Home</button>

          <button onClick={() => goToSection("menu")}>Menu</button>

          <button onClick={() => goToSection("about")}>About</button>

          <button onClick={() => goToSection("contact")}>Contact</button>

          {/* Login / Profile */}
          {isLoggedIn ? (
            <div
              className="navbar-profile cursor-pointer"
              onClick={openProfile}
            >
              <div className="profile-avatar-small">
                {userData?.name
                  ? userData.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .substring(0, 2)
                      .toUpperCase()
                  : "A"}
              </div>
            </div>
          ) : (
            <button onClick={openLogin}>Login</button>
          )}

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
