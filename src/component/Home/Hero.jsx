import React from "react";

function Hero() {
  return (
    <section className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="md:w-1/2">
          <p className="text-orange-500 font-semibold text-lg mb-3">
            Welcome to Food Nest 🍴
          </p>

          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Delicious Food
            <br />
            <span className="text-orange-500">Delivered Fast</span>
          </h1>

          <p className="text-gray-600 mt-5 text-lg">
            Enjoy your favorite meals from the comfort of your home. Fresh,
            tasty and delivered right to your doorstep.
          </p>

          <div className="mt-7 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
              Order Now
            </button>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white">
              View Menu
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Delicious Food"
            className="w-full max-w-lg rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
