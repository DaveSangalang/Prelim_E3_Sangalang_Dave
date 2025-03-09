import React, { useState } from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

function Profile({ darkMode }) {
  // Initialize user data state with your name
  const [user, setUser] = useState({
    name: "Dave Sangalang", // Set your name here
    darkMode: darkMode, // Ensure the dark mode status is passed from App.jsx
  });

  const handleNameChange = (event) => {
    setUser({ ...user, name: event.target.value }); // Update name on input change
  };

  return (
    <div
      className={`container ${
        user.darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <h1>Profile</h1>
      {/* Profile Picture */}
      <ProfilePicture />

      {/* User Info (Name) */}
      <UserInfo name={user.name} />

      {/* Input field for changing name */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={user.name}
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
}

export default Profile;
