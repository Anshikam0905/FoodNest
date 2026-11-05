import React, { useState } from "react";

import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Menu from "./component/Menu/All Foods";
import FoodDetails from "./component/Food Details";
import Cart from "./component/Cart";
import About from "./component/About";
import Checkout from "./component/Checkout";
import Contact from "./component/Contact";
import Profile from "./component/Profile/Profile";
import Login from "./component/Login/Login";
import Registration from "./component/Login/Registration";
import MyOrders from "./component/MyOrders/MyOrders";
const App = () => {
  // Authentication states
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [showMyOrders, setShowMyOrders] = useState(false);
  const [orders, setOrders] = useState([]);
  const [registeredUser, setRegisteredUser] = useState(null);

  // Website states
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [continueToCheckout, setContinueToCheckout] = useState(false);
  const [category, setCategory] = useState("All Foods");

  // Add food to cart
  const addToCart = (food) => {
    setCart((previousCart) => {
      const existingFood = previousCart.find((item) => item.name === food.name);

      if (existingFood) {
        return previousCart.map((item) =>
          item.name === food.name
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      }

      return [...previousCart, { ...food, quantity: 1 }];
    });
  };

  // Open cart
  const openCart = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowCheckout(false);
    setShowProfile(false);
    setShowCart(true);
  };

  // Open login
  const openLogin = () => {
    setShowCart(false);
    setShowCheckout(false);
    setShowProfile(false);
    setShowRegister(false);
    setContinueToCheckout(false);
    setShowLogin(true);
  };

  // Open registration
  const openRegister = () => {
    setShowCart(false);
    setShowCheckout(false);
    setShowProfile(false);
    setShowLogin(false);
    setShowRegister(true);
  };

  // Close login and registration
  const closeAuth = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  // Open profile
  const openProfile = () => {
    setShowCart(false);
    setShowCheckout(false);
    setShowLogin(false);
    setShowRegister(false);
    setShowProfile(true);
  };

  // Login successful
  const handleLogin = (data) => {
    const name =
      data.name ||
      [data.firstName, data.lastName].filter(Boolean).join(" ") ||
      registeredUser?.name ||
      data.firstName ||
      "User";

    setUserData({
      name: name,
      email: data.email || registeredUser?.email || "",
      phone: data.phone || registeredUser?.phone || "",
    });

    setIsLoggedIn(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowProfile(false);

    // Continue checkout if login was required for ordering
    if (continueToCheckout) {
      setShowCart(false);
      setShowCheckout(true);
    } else {
      setShowCheckout(false);
    }

    setContinueToCheckout(false);
  };

  // Registration submitted
  const handleRegister = (data) => {
    setRegisteredUser(data);
    setShowRegister(false);
    setShowLogin(true);
  };

  // Checkout requires login
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setShowCart(false);

    if (isLoggedIn) {
      setShowCheckout(true);
    } else {
      setContinueToCheckout(true);
      setShowLogin(true);
    }
  };

  // Logout
  const handleLogout = () => {
    setIsLoggedIn(false);

    setUserData({
      name: "",
      email: "",
      phone: "",
    });
    setShowProfile(false);
    setShowLogin(false);
    setShowCheckout(false);
    setShowCart(false);
    setContinueToCheckout(false);
  };

  return (
    <>
      {/* Navbar */}

      <Navbar
        cart={cart}
        setShowCart={setShowCart}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
        setShowCheckout={setShowCheckout}
        isLoggedIn={isLoggedIn}
        setShowProfile={setShowProfile}
        userData={userData}
      />

      {/* Login Page */}
      {showLogin && (
        <Login
          onLoginSuccess={handleLogin}
          onRegister={openRegister}
          onClose={closeAuth}
          onForgotPassword={() => {
            alert("Password reset feature is not connected yet.");
          }}
        />
      )}

      {/* Registration Page */}
      {showRegister && (
        <Registration onLogin={openLogin} onRegister={handleRegister} />
      )}

      {/* Profile Page */}
      {showProfile && (
        <Profile
          user={user}
          onLogout={handleLogout}
          onMyOrders={handleMyOrders}
          onUpdateUser={(updatedUser) => {
            setUser(updatedUser);
          }}
        />
      )}
      {showMyOrders && (
        <MyOrders
          orders={orders}
          onBack={() => {
            setShowMyOrders(false);
            setShowProfile(true);
          }}
        />
      )}
      {/* Main Website */}
      {!showCart &&
        !showCheckout &&
        !showLogin &&
        !showRegister &&
        !showProfile && (
          <>
            <Home
              cart={cart}
              addToCart={addToCart}
              setShowCart={openCart}
              setCategory={setCategory}
            />

            <FoodDetails addToCart={addToCart} />

            <About />

            <Menu
              cart={cart}
              addToCart={addToCart}
              category={category}
              setCategory={setCategory}
            />

            <Contact />
          </>
        )}

      {/* Cart */}
      {showCart && !showCheckout && (
        <Cart
          cart={cart}
          setCart={setCart}
          setShowCart={setShowCart}
          setShowCheckout={handleCheckout}
        />
      )}

      {/* Checkout */}
      {showCheckout && isLoggedIn && (
        <Checkout
          cart={cart}
          setCart={setCart}
          setShowCart={setShowCart}
          setShowCheckout={setShowCheckout}
        />
      )}
    </>
  );
};

export default App;
