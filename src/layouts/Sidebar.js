import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-nav">
        <Navigation />
      </div>
    </aside>
  );
};

export default Sidebar;