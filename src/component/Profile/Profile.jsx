import React from "react";

const Profile = ({ user }) => {
  return (
    <div
      style={{
        background: "#fff7f2",
        minHeight: "100vh",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h1>Food Nest Profile</h1>
      <h2>{user?.name || "Food Nest User"}</h2>
      <p>{user?.email || "Email not available"}</p>
      <p>{user?.phone || "Phone not available"}</p>
    </div>
  );
};

export default Profile;
