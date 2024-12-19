import React from 'react';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-inner">
        <div className="content-wrapper">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;