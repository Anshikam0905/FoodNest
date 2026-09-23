import React, { useState } from "react";

const AllFoods = ({ cart, addToCart }) => {
  const [category, setCategory] = useState("All Foods");

  const foods = [
    {
      name: "Cheese Pizza",
      category: "Pizza",
      price: 249,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    },
    {
      name: "Veg Pizza",
      category: "Pizza",
      price: 229,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    },
    {
      name: "Classic Burger",
      category: "Burger",
      price: 199,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      name: "Veg Burger",
      category: "Burger",
      price: 179,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      name: "Paneer Butter Masala",
      category: "Indian",
      price: 249,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    },
    {
      name: "Veg Biryani",
      category: "Indian",
      price: 199,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
    {
      name: "Veg Noodles",
      category: "Chinese",
      price: 169,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
    },
    {
      name: "Spring Rolls",
      category: "Chinese",
      price: 149,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1548507200-75b5f5c7f9d7",
    },
    {
      name: "Chocolate Cake",
      category: "Desserts",
      price: 149,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
    {
      name: "Ice Cream",
      category: "Desserts",
      price: 99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    },
  ];

  const categories = [
    "All Foods",
    "Pizza",
    "Burger",
    "Indian",
    "Chinese",
    "Desserts",
  ];

  // Filter food
  const filteredFoods =
    category === "All Foods"
      ? foods
      : foods.filter((food) => food.category === category);

  return (
    <section id="menu" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">Explore Our Food</p>

          <h1 className="text-4xl font-bold text-gray-800 mt-2">Our Menu</h1>

          <p className="text-gray-500 mt-3">Choose your favorite food</p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={
                category === item
                  ? "bg-orange-500 text-white px-6 py-2 rounded-full"
                  : "bg-white text-gray-700 px-6 py-2 rounded-full shadow hover:bg-orange-500 hover:text-white"
              }
            >
              {item}
            </button>
          ))}
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFoods.map((food) => {
            // Check whether food is already in cart
            const isInCart = cart.some((item) => item.name === food.name);

            return (
              <div
                key={food.name}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                {/* Food Image */}
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  {/* Name + Rating */}
                  <div className="flex justify-between gap-2">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {food.name}
                    </h2>

                    <span className="text-yellow-500 whitespace-nowrap">
                      ⭐ {food.rating}
                    </span>
                  </div>

                  {/* Category */}
                  <p className="text-gray-500 mt-2">{food.category}</p>

                  {/* Price + Cart Button */}
                  <div className="flex justify-between items-center mt-5">
                    <p className="text-xl font-bold text-orange-500">
                      ₹{food.price}
                    </p>

                    <button
                      onClick={() => {
                        // Don't add again if already in cart
                        if (isInCart) {
                          return;
                        }

                        // Confirmation message
                        const confirmAdd = window.confirm(
                          `Do you want to add ${food.name} to your cart?`,
                        );

                        // Add food if user clicks OK
                        if (confirmAdd) {
                          addToCart(food);
                        }
                      }}
                      className={
                        isInCart
                          ? "bg-green-500 text-white px-4 py-2 rounded-lg cursor-not-allowed"
                          : "bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                      }
                    >
                      {isInCart ? "✓ Added to Cart" : "Add to Cart"}
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
};

export default AllFoods;
