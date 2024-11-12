import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderOpen } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/" className="nav-item" end>
        <Home className="nav-icon" size={18} />
        <span>개요</span>
      </NavLink>
      
      <div className="nav-divider">Projects</div>
      
      <NavLink to="/project/1" className="nav-item">
        <FolderOpen className="nav-icon" size={18} />
        <span>Portfolio Website</span>
      </NavLink>
      <NavLink to="/project/2" className="nav-item">
        <FolderOpen className="nav-icon" size={18} />
        <span>Project 2</span>
      </NavLink>
      <NavLink to="/project/3" className="nav-item">
        <FolderOpen className="nav-icon" size={18} />
        <span>Project 3</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;