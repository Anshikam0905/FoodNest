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

  return (
    <>
      <Navbar cart={cart} setShowCart={setShowCart} />

      {!showCart && !showCheckout && (
        <>
          <Home
            cart={cart}
            addToCart={addToCart}
            setShowCart={setShowCart}
            setCategory={setCategory}
          />

          <Menu
            cart={cart}
            addToCart={addToCart}
            category={category}
            setCategory={setCategory}
          />

          <FoodDetails addToCart={addToCart} />
          <About />

          <Contact />
        </>
      )}

      {showCart && (
        <Cart
          cart={cart}
          setCart={setCart}
          setShowCart={setShowCart}
          setShowCheckout={setShowCheckout}
        />
      )}

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
