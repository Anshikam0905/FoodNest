import React from "react";

function SpecialOffers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-orange-500 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Side */}
            <div className="p-8 md:p-12 text-white md:w-1/2">
              <p className="text-orange-100 font-semibold text-lg mb-2">
                Special Offer 🎉
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Get 30% OFF
              </h2>

              <p className="text-orange-50 text-lg mt-4">
                Enjoy delicious food at an amazing price. Order your favorite
                meal today!
              </p>

              <div className="mt-6">
                <p className="text-orange-100">Use Coupon Code</p>

                <div className="inline-block bg-white text-orange-500 font-bold px-5 py-2 rounded-lg mt-2">
                  FOOD30
                </div>
              </div>

              <button className="mt-6 bg-white text-orange-500 px-7 py-3 rounded-lg font-semibold hover:bg-orange-50">
                Order Now
              </button>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 flex justify-center p-6">
              <img
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
                alt="Special Food Offer"
                className="w-full max-w-md h-72 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
