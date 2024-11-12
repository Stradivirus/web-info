import React from 'react';
import { Home, FolderOpen } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item">
        <Home className="nav-icon" size={18} />
        <span>Overview</span>
      </div>
      
      <div className="nav-divider">Projects</div>
      
      <div className="nav-item">
        <FolderOpen className="nav-icon" size={18} />
        <span>Portfolio Website</span>
      </div>
      <div className="nav-item">
        <FolderOpen className="nav-icon" size={18} />
        <span>Project 2</span>
      </div>
      <div className="nav-item">
        <FolderOpen className="nav-icon" size={18} />
        <span>Project 3</span>
      </div>
    </nav>
  );
};

export default Navigation;