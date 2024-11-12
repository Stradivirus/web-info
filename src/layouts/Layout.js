import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';  // Main 컴포넌트 import
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="layout-inner">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          <Main />  {/* children 대신 Main 컴포넌트 직접 사용 */}
        </div>
      </div>
    </div>
  );
};

export default Layout;