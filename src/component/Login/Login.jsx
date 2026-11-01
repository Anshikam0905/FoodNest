import React, { useState } from "react";
import "./Login.css";

const Login = ({ onRegister, onLoginSuccess, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (onLoginSuccess) {
      onLoginSuccess({
        email: email,
        password: password,
      });
    } else {
      setMessage("Login API is not connected yet.");
    }
  };
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-banner">
          <div className="login-logo">
            <span>🍴</span>
            <h1>
              Food<span>Nest</span>
            </h1>
          </div>

          <h2>Good Food | Happy Mood</h2>

          <p>Freshly prepared meals, made with love, just for you!</p>

          <div className="login-food">🍔</div>

          <h3>Your cravings, our happiness!</h3>
        </div>

        <div className="login-form-section">
          <div className="login-top">
            <span>New here?</span>
            <button type="button" onClick={onRegister}>
              Register
            </button>
          </div>

          <h2>
            Welcome <span>Back!</span>
          </h2>

          <p className="login-subtitle">
            Login to your FoodNest account and continue your delicious journey.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <button type="button" onClick={onForgotPassword}>
                Forgot Password?
              </button>
            </div>

            {message && (
              <p className="login-message" role="alert">
                {message}
              </p>
            )}

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="login-divider">
            <span></span>
            OR
            <span></span>
          </div>

          <button
            type="button"
            className="google-login"
            onClick={() => setMessage("Google login is not connected yet.")}
          >
            <span>G</span> Continue with Google
          </button>

          <p className="login-footer">Good food is always a good idea! ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
