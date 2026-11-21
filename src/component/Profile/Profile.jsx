import React from "react";
import "./Profile.css";

const Profile = ({ user, onLogout, onMyOrders, onUpdateUser }) => {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <h1>My Profile</h1>
          <p>Welcome to Food Nest!</p>
        </div>

        <div className="profile-details">
          <div className="profile-info">
            <label>Full Name</label>
            <p>{user?.name || "Food Nest User"}</p>
          </div>

          <div className="profile-info">
            <label>Email Address</label>
            <p>{user?.email || "Email not available"}</p>
          </div>

          <div className="profile-info">
            <label>Phone Number</label>
            <p>{user?.phone || "Phone not available"}</p>
          </div>
        </div>

        <div className="profile-buttons">
          <button className="orders-btn" onClick={onMyOrders}>
            My Orders
          </button>

          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
