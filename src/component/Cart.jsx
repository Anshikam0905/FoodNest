import React from "react";

const Cart = ({ cart, setCart, setShowCart, setShowCheckout }) => {
  // Increase quantity
  const increaseQuantity = (name) => {
    const updatedCart = cart.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQuantity = (name) => {
    const updatedCart = cart.map((item) => {
      if (item.name === name && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

  // Remove item
  const removeItem = (name) => {
    const confirmRemove = window.confirm(
      "Do you want to remove this item from cart?",
    );

    if (confirmRemove) {
      const updatedCart = cart.filter((item) => item.name !== name);

      setCart(updatedCart);
    }
  };

  // Calculate total price
  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice = totalPrice + item.price * item.quantity;
  });

  return (
    <section id="cart" className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">Your Selected Food</p>

          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            🛒 Your Cart
          </h1>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <div className="text-6xl mb-5">🛒</div>

            <h2 className="text-2xl font-bold text-gray-700">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some delicious food to your cart.
            </p>
          </div>
        ) : (
          <div>
            {/* Cart Items */}
            {cart.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl shadow p-5 mb-5"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  {/* Food Information */}
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        {item.name}
                      </h2>

                      <p className="text-gray-500 mt-1">{item.category}</p>

                      <p className="text-orange-500 font-bold mt-2">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.name)}
                      className="w-9 h-9 bg-gray-200 rounded-lg text-xl hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="text-lg font-bold w-8 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.name)}
                      className="w-9 h-9 bg-orange-500 text-white rounded-lg text-xl hover:bg-orange-600"
                    >
                      +
                    </button>
                  </div>

                  {/* Price + Remove */}
                  <div className="text-left md:text-right">
                    <p className="text-xl font-bold text-gray-800">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeItem(item.name)}
                      className="text-red-500 mt-2 hover:text-red-700"
                    >
                      🗑️ Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="bg-white rounded-xl shadow p-6 mt-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Total Price
                </h2>

                <h2 className="text-2xl font-bold text-orange-500">
                  ₹{totalPrice}
                </h2>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  setShowCart(false);
                  setShowCheckout(true);
                }}
                className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-orange-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
