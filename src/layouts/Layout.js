import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Overview from '../pages/Overview/Overview';
import Project1 from '../pages/Projects/Project1';
import Project2 from '../pages/Projects/Project2';
import Project3 from '../pages/Projects/Project3';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="layout-inner">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          <main className="main-content">
            <div className="main-inner">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/project/1" element={<Project1 />} />
                <Route path="/project/2" element={<Project2 />} />
                <Route path="/project/3" element={<Project3 />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;