import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import CertificationsPage from '../pages/Certifications';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="layout-inner">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project/:id" element={<Main />} />
            <Route path="/certifications" element={<CertificationsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;