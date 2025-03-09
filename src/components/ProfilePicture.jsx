// ProfilePicture.jsx
import React from "react";

function ProfilePicture() {
  return (
    <div>
      <img
        src="/DavePP.png" // Reference the image in the public folder
        alt="Profile"
        className="rounded-circle"
        width="150"
      />
    </div>
  );
}

export default ProfilePicture;
