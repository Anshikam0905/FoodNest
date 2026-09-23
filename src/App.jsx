import React, { useState } from "react";

import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Menu from "./component/Menu/All Foods";
import FoodDetails from "./component/Food Details";
import Cart from "./component/Cart";
import About from "./component/About";
import Checkout from "./component/Checkout";
import Contact from "./component/Contact";

const App = () => {
  const [cart, setCart] = useState([]);

  const [showCart, setShowCart] = useState(false);

  const [showCheckout, setShowCheckout] = useState(false);

  // Add food to cart
  const addToCart = (food) => {
    const existingFood = cart.find((item) => item.name === food.name);

    if (existingFood) {
      const updatedCart = cart.map((item) => {
        if (item.name === food.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...food,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar cart={cart} setShowCart={setShowCart} />

      {/* Main Website */}
      {!showCart && !showCheckout && (
        <>
          <Home />

          <Menu cart={cart} addToCart={addToCart} />

          <FoodDetails />

          <About />

          <Contact />
        </>
      )}

      {/* Cart */}
      {showCart && (
        <Cart
          cart={cart}
          setCart={setCart}
          setShowCart={setShowCart}
          setShowCheckout={setShowCheckout}
        />
      )}

      {/* Checkout */}
      {showCheckout && (
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
