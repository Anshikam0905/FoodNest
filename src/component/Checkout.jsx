import React, { useState } from "react";

const Checkout = ({ cart, setCart, setShowCart, setShowCheckout }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");

  const [mapLink, setMapLink] = useState("");
  const [locationMessage, setLocationMessage] = useState("");

  // Calculate total
  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice = totalPrice + item.price * item.quantity;
  });

  // Choose Current Location
  const chooseCurrentLocation = () => {
    setLocationMessage("Getting your current location...");

    if (!navigator.geolocation) {
      setLocationMessage("Location is not supported by your browser.");

      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Google Maps link
        const googleMapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

        setMapLink(googleMapLink);

        setLocationMessage("✓ Current location selected");
      },

      () => {
        setLocationMessage("Please allow location permission to continue.");
      },
    );
  };

  // Copy Google Maps link
  const copyMapLink = () => {
    navigator.clipboard.writeText(mapLink);

    alert("📍 Google Maps link copied!");
  };

  // Place Order
  const placeOrder = (e) => {
    e.preventDefault();

    if (mapLink === "") {
      alert("Please choose your current location first.");

      return;
    }

    const confirmOrder = window.confirm("Do you want to place your order?");

    if (confirmOrder) {
      alert("🎉 Order placed successfully!");

      setCart([]);

      setShowCheckout(false);

      setShowCart(false);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">Complete Your Order</p>

          <h1 className="text-4xl font-bold text-gray-800 mt-2">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Delivery Details */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Delivery Details
            </h2>

            <form onSubmit={placeOrder}>
              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
              />

              {/* Current Location */}
              <button
                type="button"
                onClick={chooseCurrentLocation}
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 mb-3"
              >
                📍 Choose Current Location
              </button>

              {/* Location Message */}
              {locationMessage && (
                <p className="text-green-600 text-sm mb-4">{locationMessage}</p>
              )}

              {/* Google Maps Link */}
              {mapLink && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                  <p className="font-semibold text-gray-700 mb-2">
                    📍 Delivery Location
                  </p>

                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 underline break-all"
                  >
                    Open Location in Google Maps
                  </a>

                  <button
                    type="button"
                    onClick={copyMapLink}
                    className="w-full bg-gray-800 text-white py-2 rounded-lg mt-3 hover:bg-gray-900"
                  >
                    📋 Copy Google Maps Link
                  </button>
                </div>
              )}

              {/* Address */}
              <textarea
                placeholder="Full Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
              ></textarea>

              {/* City */}
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
              />

              {/* Pincode */}
              <input
                type="text"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
              />

              {/* Payment */}
              <h3 className="font-semibold text-gray-700 mb-3">
                Payment Method
              </h3>

              <select
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6"
              >
                <option>Cash on Delivery</option>

                <option>UPI</option>
              </select>

              {/* Place Order */}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
              >
                🛍️ Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow p-6 h-fit">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Order Summary
            </h2>

            {cart.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>

                  <p className="text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>

                <p className="font-bold text-gray-800">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between mt-6">
              <h2 className="text-xl font-bold">Total</h2>

              <h2 className="text-xl font-bold text-orange-500">
                ₹{totalPrice}
              </h2>
            </div>

            {/* Back to Cart */}
            <button
              type="button"
              onClick={() => {
                setShowCheckout(false);
                setShowCart(true);
              }}
              className="w-full border border-orange-500 text-orange-500 py-3 rounded-lg mt-6 hover:bg-orange-50"
            >
              ← Back to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
