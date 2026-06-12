import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('New Launch');

  const navLinks = ['Buy', 'Rent', 'New Launch', 'Contact Us'];

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <span className="navbar__logo-text">Dahdaan Realtors Pvt Ltd</span>
        </div>

        {/* Nav Links */}
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`navbar__link ${activeNav === link ? 'navbar__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveNav(link);
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="navbar__actions">
          <button className="navbar__post-btn">
            Post Properties
            <span className="navbar__free-badge">FREE</span>
          </button>

          <div className="navbar__profile">
            <svg
              className="navbar__profile-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <svg
              className="navbar__chevron"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
