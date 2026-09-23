import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">About Food Nest</p>

          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Delicious Food, Happy Moments ❤️
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Food Nest is a simple and friendly food ordering website where you
            can discover delicious food and order your favorite meals easily.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Delicious Food"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Food Nest?
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              We bring different types of delicious food together in one place.
              From pizza and burgers to Indian and Chinese food, you can easily
              find something you love.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍕</span>
                <p className="text-gray-700">Delicious Food</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <p className="text-gray-700">Fast & Easy Ordering</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <p className="text-gray-700">Affordable Prices</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">❤️</span>
                <p className="text-gray-700">Made for Food Lovers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
