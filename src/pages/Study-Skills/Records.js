import React, { useState } from 'react';
import { Calendar, GitBranch, ChevronDown, ChevronUp } from 'lucide-react';
import { CICDContent } from './CICD';

const StudyAccordion = ({ title, date, category, isOpen, onToggle, children }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <button
        className="w-full p-6 text-left border-b border-gray-200 focus:outline-none"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
            <div className="flex gap-4 mt-2 text-gray-600">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                {category}
              </span>
            </div>
          </div>
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      {isOpen && (
        <div className="p-6">
          {children}
        </div>
      )}
    </div>
  );
};

const Records = () => {
  const [openRecords, setOpenRecords] = useState({
    cicd: false,
  });

  const toggleRecord = (id) => {
    setOpenRecords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">Study Records</h1>
          
          <StudyAccordion
            title="쿠버네티스 Jenkins ArgoCD CICD 구축기"
            date="2024.01.08"
            category="DevOps"
            isOpen={openRecords.cicd}
            onToggle={() => toggleRecord('cicd')}
          >
            <CICDContent />
          </StudyAccordion>
        </div>
      </div>
    </main>
  );
};

export default Records;