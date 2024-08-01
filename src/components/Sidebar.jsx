import React from 'react';
import { FaHome, FaChartBar, FaCog, FaListAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon"><FaHome /></div>
      <div className="icon"><FaListAlt /></div>
      <div className="icon"><FaChartBar /></div>
      <div className="icon"><FaCog /></div>
    </div>
  );
};

export default Sidebar;
