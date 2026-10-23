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

  // Open login page
  const openLogin = () => {
    setShowCart(false);
    setShowCheckout(false);
    setShowRegister(false);
    setShowLogin(true);
  };

  // Open registration page
  const openRegister = () => {
    setShowCart(false);
    setShowCheckout(false);
    setShowLogin(false);
    setShowRegister(true);
  };

  // Return to the main website
  const closeAuth = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  // Check login before checkout
  const handleCheckout = () => {
    setShowCart(false);

    if (isLoggedIn) {
      setShowCheckout(true);
    } else {
      setShowCheckout(false);
      setShowRegister(false);
      setShowLogin(true);
    }
  };

  // Demo login success
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    setShowRegister(false);

    // Continue checkout if the user came from the cart
    setShowCart(false);
    setShowCheckout(true);
  };

  // Registration submitted
  const handleRegister = (data) => {
    console.log("Registration submitted:", data);

    // This only demonstrates page navigation.
    // Connect your Django registration API here.
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        cart={cart}
        setShowCart={openCart}
        setShowLogin={openLogin}
        setShowRegister={openRegister}
        isLoggedIn={isLoggedIn}
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

      {/* Main Website */}
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

      {/* Cart: login is not required */}
      {showCart && !showCheckout && (
        <Cart
          cart={cart}
          setCart={setCart}
          setShowCart={setShowCart}
          setShowCheckout={handleCheckout}
        />
      )}

      {/* Checkout: only available after login */}
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
