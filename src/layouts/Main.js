import React from 'react';
import Overview from '../pages/Overview/Overview';  // 임시로 Overview 페이지만 표시
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