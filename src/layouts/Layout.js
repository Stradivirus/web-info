import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-inner">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;