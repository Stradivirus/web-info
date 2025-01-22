// src/pages/Introduction/index.js
import React from 'react';
import JourneyAnimation from './components/JourneyAnimation';
import './Introduction.css';

const Introduction = () => {
  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="w-full min-h-[600px] bg-white rounded-lg shadow-lg p-6">
          <JourneyAnimation />
        </div>
      </div>
    </main>
  );
};

export default Introduction;