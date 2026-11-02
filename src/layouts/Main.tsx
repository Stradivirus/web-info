import React from 'react';
import { Outlet } from 'react-router-dom';
import './Main.scss';

const Main: React.FC = () => {
  return (
    <main className="main-content">
      <div className="main-inner">
        <Outlet />
      </div>
    </main>
  );
};

export default Main;