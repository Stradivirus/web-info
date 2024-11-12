import React from 'react';
import Profile from '../components/Profile/Profile';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Profile />
      </div>
    </header>
  );
};

export default Header;