import React, { useState } from "react";
import "./EditProfile.css";

const EditProfile = ({ user, onBack, onSave }) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    alert("Profile updated successfully!");
    onBack();
  };

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-container">
        <button className="edit-back-btn" onClick={onBack}>
          ← Back to Profile
        </button>

        <div className="edit-profile-header">
          <h2>Edit Profile</h2>
          <p>Update your personal information</p>
        </div>

        <div className="edit-avatar">
          {formData.name.charAt(0).toUpperCase() || "U"}
        </div>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            pattern="[0-9]{10}"
            required
          />

          <button type="submit" className="update-profile-btn">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
