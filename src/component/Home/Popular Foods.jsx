import React from "react";

function PopularFoods() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">Our Favorites</p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Popular Foods
          </h2>

          <p className="text-gray-500 mt-3">
            Enjoy our most loved and delicious dishes
          </p>
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Food 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
              alt="Pizza"
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Cheese Pizza
              </h3>

              <p className="text-yellow-500 mt-2">⭐ 4.8</p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-bold text-orange-500">₹249</p>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Food 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              alt="Burger"
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Classic Burger
              </h3>

              <p className="text-yellow-500 mt-2">⭐ 4.7</p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-bold text-orange-500">₹199</p>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Food 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1603133872878-684f208fb84b"
              alt="Fried Rice"
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Fried Rice
              </h3>

              <p className="text-yellow-500 mt-2">⭐ 4.6</p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-bold text-orange-500">₹179</p>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Food 4 */}
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307"
              alt="Dessert"
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Chocolate Dessert
              </h3>

              <p className="text-yellow-500 mt-2">⭐ 4.9</p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-bold text-orange-500">₹149</p>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularFoods;
