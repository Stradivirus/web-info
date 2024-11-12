import React from 'react';
import Overview from '../pages/Overview/Overview';
import './Main.css';

const Main = () => {
  return (
    <main className="main-content">
      <div className="main-inner">
        <Overview />
      </div>
    </main>
  );
};

export default Main;