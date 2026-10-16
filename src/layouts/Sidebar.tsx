import React from 'react';
import Navigation from '../components/Navigation/Navigation';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={
        isOpen
          ? 'block fixed inset-0 w-full h-screen z-[999] bg-black/50 md:bg-transparent md:w-[300px] md:py-6 md:z-auto'
          : 'hidden md:block md:w-[300px] md:fixed md:h-screen md:py-6'
      }
      onClick={onClose}
    >
      <div
        className="sidebar-nav w-[260px] md:w-full h-screen md:h-[calc(100vh-48px)] md:max-[1920px]:h-[calc(160vh-48px)] bg-white md:bg-transparent relative z-[1000] overflow-y-auto transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <Navigation />
      </div>
    </aside>
  );
};

export default Sidebar;