import React from 'react';
import { FaYoutube, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <FaYoutube className="header__logoIcon" />
        <h2>YouTube</h2>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search" />
        <FaSearch className="header__searchIcon" />
      </div>
      <div className="header__icons">
        <FaBell className="header__icon" />
        <FaUserCircle className="header__icon" />
      </div>
    </div>
  );
};

export default Header;
