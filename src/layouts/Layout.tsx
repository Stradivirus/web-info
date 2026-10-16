import React, { useState, ReactNode } from 'react';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen w-full bg-[#f0f2f5]">
      <button
        className="block md:hidden fixed top-5 left-5 z-[1000] bg-[#f0f7ff] border-none rounded-lg p-2 cursor-pointer shadow-md"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div className="mx-[4%] md:mx-auto max-w-[1920px] max-[1920px]:scale-90 max-[1920px]:origin-top">
        <div className="flex pt-[10px] min-h-[calc(100vh-180px)]">
          <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;