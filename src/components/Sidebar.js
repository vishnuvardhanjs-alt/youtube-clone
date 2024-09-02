import React from 'react';
import { FaHome, FaFire, FaPlayCircle } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__option">
        <FaHome className="sidebar__icon" />
        <span>Home</span>
      </div>
      <div className="sidebar__option">
        <FaFire className="sidebar__icon" />
        <span>Trending</span>
      </div>
      <div className="sidebar__option">
        <FaPlayCircle className="sidebar__icon" />
        <span>Subscriptions</span>
      </div>
      {/* Add more options as needed */}
    </div>
  );
};

export default Sidebar;
