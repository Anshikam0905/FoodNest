import React, { useState } from "react";
import "./Address.css";

const Address = ({ onBack, savedAddress, onSaveAddress }) => {
  const [address, setAddress] = useState(
    savedAddress || {
      fullName: "",
      phone: "",
      house: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
      addressType: "Home",
    },
  );

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveAddress(address);
    alert("Address saved successfully!");
    onBack();
  };

  return (
    <div className="address-page">
      <div className="address-container">
        <button className="back-btn" onClick={onBack}>
          ← Back to Profile
        </button>

        <h2>My Address</h2>
        <p>Add your delivery address</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            value={address.fullName}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={address.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />

          <label>House / Flat Number</label>
          <input
            type="text"
            name="house"
            placeholder="House number"
            value={address.house}
            onChange={handleChange}
            required
          />

          <label>Area / Street</label>
          <input
            type="text"
            name="area"
            placeholder="Enter area or street"
            value={address.area}
            onChange={handleChange}
            required
          />

          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value={address.city}
            onChange={handleChange}
            required
          />

          <label>State</label>
          <input
            type="text"
            name="state"
            placeholder="Enter state"
            value={address.state}
            onChange={handleChange}
            required
          />

          <label>PIN Code</label>
          <input
            type="text"
            name="pincode"
            placeholder="Enter 6 digit PIN code"
            value={address.pincode}
            onChange={handleChange}
            pattern="[0-9]{6}"
            required
          />

          <label>Address Type</label>
          <select
            name="addressType"
            value={address.addressType}
            onChange={handleChange}
          >
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
          </select>

          <button type="submit" className="save-address-btn">
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default Address;
