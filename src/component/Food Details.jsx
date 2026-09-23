import React, { useState } from "react";

function FoodDetails() {
  const [quantity, setQuantity] = useState(1);

  const price = 249;

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Food Image */}
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                alt="Cheese Pizza"
                className="w-full h-full min-h-[400px] object-cover"
              />
            </div>

            {/* Food Details */}
            <div className="md:w-1/2 p-8">
              <p className="text-orange-500 font-semibold">Pizza</p>

              <h1 className="text-4xl font-bold text-gray-800 mt-2">
                Cheese Pizza
              </h1>

              <div className="flex items-center gap-3 mt-4">
                <span className="text-yellow-500">⭐ 4.8</span>

                <span className="text-gray-500">120 Reviews</span>
              </div>

              <p className="text-2xl font-bold text-orange-500 mt-6">
                ₹{price}
              </p>

              <p className="text-gray-600 leading-relaxed mt-5">
                Delicious cheese pizza prepared with fresh vegetables, tasty
                tomato sauce and lots of melted cheese. Perfect for enjoying
                with friends and family.
              </p>

              {/* Quantity */}
              <div className="mt-7">
                <p className="font-semibold text-gray-800 mb-3">Quantity</p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={decreaseQuantity}
                    className="w-10 h-10 bg-gray-200 rounded-lg text-xl"
                  >
                    -
                  </button>

                  <span className="text-xl font-semibold">{quantity}</span>

                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 bg-orange-500 text-white rounded-lg text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="mt-6">
                <p className="text-gray-600">Total Price</p>

                <p className="text-2xl font-bold text-gray-800">
                  ₹{price * quantity}
                </p>
              </div>

              {/* Add to Cart */}
              <button className="w-full mt-7 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodDetails;
