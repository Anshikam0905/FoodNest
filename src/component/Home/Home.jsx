import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import PopularFoods from "./Popular Foods";
import SpecialOffers from "./Special Offers";

function Home({ setShowCart, setCategory, cart, addToCart }) {
  return (
    <div id="home">
      <Hero setShowCart={setShowCart} />

      <Categories setCategory={setCategory} />

      <PopularFoods cart={cart} addToCart={addToCart} />

      <SpecialOffers cart={cart} addToCart={addToCart} />
    </div>
  );
}

export default Home;
