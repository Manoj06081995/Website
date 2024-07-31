import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ICSTEET 2025</div>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#details">Details</a></li>
          <li><a href="#sessions">Sessions</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
