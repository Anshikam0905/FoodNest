import React from "react";
import "./Profile.css";

const Profile = ({ user, onLogout }) => {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          {user?.name?.charAt(0).toUpperCase() || "U"}

          <h2>{user?.name || "Food Nest User"}</h2>
          <p>{user?.email || "user@example.com"}</p>
        </div>

        <div className="profile-content">
          <h3>Personal Information</h3>

          <div className="profile-info">
            <div>
              <label>Full Name</label>
              <p>{user?.name || "Not available"}</p>
            </div>

            <div>
              <label>Email Address</label>
              <p>{user?.email || "Not available"}</p>
            </div>

            <div>
              <label>Phone Number</label>
              <p>{user?.phone || "Not available"}</p>
            </div>
          </div>

          <div className="profile-options">
            <button>My Orders</button>
            <button>My Address</button>
            <button>Edit Profile</button>
          </div>

          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
