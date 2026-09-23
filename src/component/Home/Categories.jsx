import React from "react";

function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">Explore Our Menu</p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Food Categories
          </h2>

          <p className="text-gray-500 mt-3">
            Choose your favorite food category
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* Pizza */}
          <div className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg cursor-pointer">
            <div className="text-5xl mb-4">🍕</div>
            <h3 className="text-lg font-semibold text-gray-800">Pizza</h3>
          </div>

          {/* Burger */}
          <div className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg cursor-pointer">
            <div className="text-5xl mb-4">🍔</div>
            <h3 className="text-lg font-semibold text-gray-800">Burger</h3>
          </div>

          {/* Indian */}
          <div className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg cursor-pointer">
            <div className="text-5xl mb-4">🍛</div>
            <h3 className="text-lg font-semibold text-gray-800">Indian</h3>
          </div>

          {/* Chinese */}
          <div className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg cursor-pointer">
            <div className="text-5xl mb-4">🍜</div>
            <h3 className="text-lg font-semibold text-gray-800">Chinese</h3>
          </div>

          {/* Desserts */}
          <div className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg cursor-pointer">
            <div className="text-5xl mb-4">🍰</div>
            <h3 className="text-lg font-semibold text-gray-800">Desserts</h3>
          </div>

          {/* Drinks */}
          <div className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg cursor-pointer">
            <div className="text-5xl mb-4">🥤</div>
            <h3 className="text-lg font-semibold text-gray-800">Drinks</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
