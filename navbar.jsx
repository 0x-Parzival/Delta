// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Flipkart Movies</h1>
      <ul>
        <li>Home</li>
        <li>Categories</li>
        <li>Trending</li>
        <li>Search</li>
      </ul>
    </nav>
  );
};

export default Navbar;
