import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`} onClick={onClose}>
      <div className="sidebar-nav" onClick={(e) => e.stopPropagation()}>
        <Navigation />
      </div>
    </aside>
  );
};

export default Sidebar;