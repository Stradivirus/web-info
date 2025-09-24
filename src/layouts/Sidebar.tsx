import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import './Sidebar.css';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`} onClick={onClose}>
      <div className="sidebar-nav" onClick={(e) => e.stopPropagation()}>
        <Navigation />
      </div>
    </aside>
  );
};

export default Sidebar;