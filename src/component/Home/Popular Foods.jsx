import React from "react";

function PopularFoods({ cart = [], addToCart }) {
  const foods = [
    {
      name: "Cheese Pizza",
      price: 249,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    },
    {
      name: "Classic Burger",
      price: 199,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      name: "Fried Rice",
      price: 179,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    },
    {
      name: "Chocolate Dessert",
      price: 149,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    },
  ];

  const isInCart = (food) => {
    return cart.some((item) => item.name === food.name);
  };

  const handleAddToCart = (food) => {
    if (!addToCart) {
      alert("Cart function is not connected. Check App.jsx.");
      return;
    }

    if (isInCart(food)) {
      alert(`${food.name} is already in your cart!`);
      return;
    }

    addToCart(food);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">Our Favorites</p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Popular Foods
          </h2>

          <p className="text-gray-500 mt-3">
            Enjoy our most loved and delicious dishes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foods.map((food) => {
            const added = isInCart(food);

            return (
              <div
                key={food.name}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {food.name}
                  </h3>

                  <p className="text-yellow-500 mt-2">⭐ {food.rating}</p>

                  <div className="flex justify-between items-center mt-4 gap-2">
                    <p className="text-xl font-bold text-orange-500">
                      ₹{food.price}
                    </p>

                    <button
                      type="button"
                      disabled={added}
                      onClick={() => handleAddToCart(food)}
                      className={`px-4 py-2 rounded-lg text-white ${
                        added
                          ? "bg-green-500 cursor-not-allowed"
                          : "bg-orange-500 hover:bg-orange-600"
                      }`}
                    >
                      {added ? "✓ Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PopularFoods;
