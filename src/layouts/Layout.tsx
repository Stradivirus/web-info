import React, { useState, ReactNode } from 'react';
import Sidebar from './Sidebar';
import './Layout.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="layout-container">
      <button
        className="mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div className="layout-inner">
        <div className="content-wrapper">
          <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;