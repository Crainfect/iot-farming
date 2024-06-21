// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>MKF-203 IoT Solutions</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#features">Fitur</a></li>
          <li><a href="#testimonials">Testimoni</a></li>
          <li><a href="#footer">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
