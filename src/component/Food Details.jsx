import React, { useState, useEffect } from "react";

function FoodDetails({ addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [foodIndex, setFoodIndex] = useState(0);
  const [added, setAdded] = useState(false);

  const foods = [
    {
      name: "Cheese Pizza",
      category: "Pizza",
      price: 249,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80",
      description:
        "Delicious cheese pizza prepared with fresh vegetables, tasty tomato sauce and lots of melted cheese.",
    },
    {
      name: "Veg Pizza",
      category: "Pizza",
      price: 229,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80",
      description:
        "Fresh vegetable pizza topped with colourful vegetables, tasty sauce and melted cheese.",
    },
    {
      name: "Classic Burger",
      category: "Burger",
      price: 199,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
      description:
        "A delicious burger prepared with fresh vegetables, cheese and a soft bun.",
    },
  ];

  // Current food
  const food = foods[foodIndex];

  // Automatically change food every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFoodIndex((prev) => (prev + 1) % foods.length);
      setQuantity(1);
      setAdded(false);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Previous food
  function previousFood() {
    setFoodIndex((prev) => (prev - 1 + foods.length) % foods.length);
    setQuantity(1);
    setAdded(false);
  }

  // Next food
  function nextFood() {
    setFoodIndex((prev) => (prev + 1) % foods.length);
    setQuantity(1);
    setAdded(false);
  }

  // Add food to cart
  function handleAddToCart() {
    if (typeof addToCart !== "function") {
      alert("Please connect addToCart in App.jsx");
      return;
    }

    addToCart({
      name: food.name,
      category: food.category,
      price: food.price,
      image: food.image,
      quantity: quantity,
    });

    setAdded(true);
  }

  return (
    <section id="food-details" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Food Image Carousel */}
          <div className="md:w-1/2 relative">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-[350px] md:h-[550px] object-cover"
            />

            {/* Previous Button */}
            <button
              type="button"
              onClick={previousFood}
              aria-label="Previous food"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white px-4 py-3 rounded-lg text-xl"
            >
              &#10094;
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextFood}
              aria-label="Next food"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white px-4 py-3 rounded-lg text-xl"
            >
              &#10095;
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {foods.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setFoodIndex(index);
                    setQuantity(1);
                    setAdded(false);
                  }}
                  aria-label={`Show ${item.name}`}
                  className={`h-2 rounded-full transition-all ${
                    index === foodIndex ? "bg-orange-500 w-8" : "bg-white w-4"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Food Information */}
          <div className="md:w-1/2 p-6 md:p-8">
            <p className="text-orange-500 font-semibold">{food.category}</p>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              {food.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-yellow-500">⭐ {food.rating}</span>

              <span className="text-gray-500">Customer Reviews</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-bold text-orange-500 mt-6">
              ₹{food.price}
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mt-5">
              {food.description}
            </p>

            {/* Quantity Controls */}
            <div className="mt-7">
              <p className="font-semibold text-gray-800 mb-3">Quantity</p>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg text-xl"
                >
                  -
                </button>

                <span className="text-xl font-semibold">{quantity}</span>

                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="mt-6">
              <p className="text-gray-600">Total Price</p>

              <p className="text-2xl font-bold text-gray-800">
                ₹{food.price * quantity}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={added}
              className={`w-full mt-7 text-white py-3 rounded-lg font-semibold transition-colors ${
                added
                  ? "bg-green-600 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodDetails;
