import React from "react";

function Settings({ toggleDarkMode }) {
  return (
    <div className="text-center">
      <h1>Settings</h1>
      <div className="mt-4">
        <button onClick={toggleDarkMode} className="btn btn-warning btn-lg">
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}

export default Settings;
