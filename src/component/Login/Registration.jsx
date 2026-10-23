import React, { useState } from "react";
import "./Registration.css";

const Registration = ({ onRegister, onLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    if (onRegister) {
      onRegister(formData);
    } else {
      setMessage("Registration form validated successfully!");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-banner">
          <div className="foodnest-logo">
            <span>🍴</span>
            <h1>
              Food<span>Nest</span>
            </h1>
          </div>

          <h2>Good Food, Happy Mood!</h2>

          <p>
            Join FoodNest and discover delicious food delivered right to your
            doorstep.
          </p>

          <div className="food-emoji">🍔 🍕 🍟</div>

          <h3>Your cravings, our happiness!</h3>
        </div>

        <div className="register-form-section">
          <h2>
            Create Your <span>Account</span>
          </h2>

          <p className="register-subtitle">
            Sign up to enjoy your favorite meals.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              pattern="[0-9]{10}"
              title="Enter a 10-digit phone number"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              minLength={6}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />

            {message && (
              <p className="register-message" role="alert">
                {message}
              </p>
            )}

            <button type="submit" className="register-btn">
              Create Account
            </button>
          </form>

          <p className="register-login">
            Already have an account?{" "}
            <button type="button" onClick={onLogin}>
              Login
            </button>
          </p>

          <p className="register-terms">
            By registering, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
