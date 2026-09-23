import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import PopularFoods from "./Popular Foods";
import SpecialOffers from "./Special Offers";

function Home() {
  return (
    <div id="home">
      <Hero />
      <Categories />
      <PopularFoods />
      <SpecialOffers />
    </div>
  );
}

export default Home;
