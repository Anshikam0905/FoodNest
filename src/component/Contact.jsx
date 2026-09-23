import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold">Get In Touch</p>

          <h1 className="text-4xl font-bold text-gray-800 mt-2">Contact Us</h1>

          <p className="text-gray-500 mt-3">
            Have a question? We would love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-5">
              <div>
                <p className="font-semibold text-gray-700">📍 Address</p>

                <p className="text-gray-500 mt-1">Food Nest, India</p>
              </div>

              <div>
                <p className="font-semibold text-gray-700">📞 Phone</p>

                <p className="text-gray-500 mt-1">+91 98765 43210</p>
              </div>

              <div>
                <p className="font-semibold text-gray-700">📧 Email</p>

                <p className="text-gray-500 mt-1">foodnest@example.com</p>
              </div>

              <div>
                <p className="font-semibold text-gray-700">🕐 Opening Hours</p>

                <p className="text-gray-500 mt-1">
                  Monday - Sunday: 10:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-orange-500"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-orange-500"
              />

              {/* Message */}
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-orange-500"
              ></textarea>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
