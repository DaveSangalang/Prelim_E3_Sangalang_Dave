import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    settings: {
      darkMode: false,
    },
  });

  const toggleDarkMode = () => {
    setUser({
      ...user,
      settings: { darkMode: !user.settings.darkMode },
    });
  };

  return (
    <Router>
      <div
        className={
          user.settings.darkMode
            ? "bg-dark text-white min-vh-100"
            : "bg-light text-dark min-vh-100"
        }
      >
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              User Profile App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/settings" className="nav-link">
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route
              path="/settings"
              element={<Settings toggleDarkMode={toggleDarkMode} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
