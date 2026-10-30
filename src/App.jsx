import React, { useState } from "react";

import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Menu from "./component/Menu/All Foods";
import FoodDetails from "./component/Food Details";
import Cart from "./component/Cart";
import About from "./component/About";
import Checkout from "./component/Checkout";
import Contact from "./component/Contact";

import Login from "./component/Login/Login";
import Registration from "./component/Login/Registration";

const App = () => {
  // Authentication states
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Website states
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [category, setCategory] = useState("All Foods");

  // Add food to cart
  const addToCart = (food) => {
    setCart((previousCart) => {
      const existingFood = previousCart.find((item) => item.name === food.name);

      if (existingFood) {
        return previousCart.map((item) =>
          item.name === food.name
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item,
        );
      }

      return [...previousCart, { ...food, quantity: 1 }];
    });
  };

  // Open cart without login
  const openCart = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowCheckout(false);
    setShowCart(true);
  };

  // Open login
  const openLogin = () => {
    setShowCart(false);
    setShowCheckout(false);
    setShowRegister(false);
    setShowLogin(true);
  };

  // Open registration
  const openRegister = () => {
    setShowCart(false);
    setShowCheckout(false);
    setShowLogin(false);
    setShowRegister(true);
  };

  // Close login and registration
  const closeAuth = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  // Checkout: login required only for ordering
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setShowCart(false);

    if (isLoggedIn) {
      setShowCheckout(true);
    } else {
      setShowLogin(true);
    }
  };

  // Login successful
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    setShowRegister(false);

    // Continue to checkout after login
    setShowCart(false);
    setShowCheckout(true);
  };

  // Registration submitted
  const handleRegister = (data) => {
    console.log("Registration submitted:", data);

    // Connect Django registration API here
    setShowRegister(false);
    setShowLogin(true);
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

      {/* Main Website - Always accessible without login */}
      {!showCart && !showCheckout && !showLogin && !showRegister && (
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

      {/* Cart - No login required */}
      {showCart && !showCheckout && (
        <Cart
          cart={cart}
          setCart={setCart}
          setShowCart={setShowCart}
          setShowCheckout={handleCheckout}
        />
      )}

      {/* Checkout - Login required */}
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
