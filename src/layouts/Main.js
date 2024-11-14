import React from 'react';
import { useParams } from 'react-router-dom';
import Overview from '../pages/Overview/Overview';
import Project1 from '../pages/Projects/Project1';
import Project2 from '../pages/Projects/Project2';
import Project3 from '../pages/Projects/Project3';
import './Main.css';

const Main = () => {
  const { id } = useParams();
  
  const renderContent = () => {
    if (!id) return <Overview />;
    
    switch (id) {
      case '1':
        return <Project1 />;
      case '2':
        return <Project2 />;
      case '3':
        return <Project3 />;
      default:
        return <Overview />;
    }
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        {renderContent()}
      </div>
    </main>
  );
};

export default Main;