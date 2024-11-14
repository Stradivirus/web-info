import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderOpen, Award } from 'lucide-react';
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
        <span>Django와 Postgresql로 만든 시험</span>
      </NavLink>
      <NavLink to="/project/3" className="nav-item">
        <FolderOpen className="nav-icon" size={18} />
        <span>다소니 - 마음과 마음을 연결하는 채팅</span>
      </NavLink>

      <div className="nav-divider">Certifications</div>
      
      <NavLink to="/certifications" className="nav-item">
        <Award className="nav-icon" size={18} />
        <span>자격증</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;