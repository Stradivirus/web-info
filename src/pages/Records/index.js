// src/components/study/index.js
import React, { useState } from 'react';
import { Calendar, GitBranch, ChevronDown, ChevronUp } from 'lucide-react';
import { StudyContent as CICDContent } from './CICD';
import { StudyContent as RefactoringContent } from './Refactoring';
import { StudyContent as AutoCleanupContent } from './AutoCleanup';
import { StudyContent as TerraformContent } from './Terraform';
import { StudyContent as LoadBalancingContent } from './LoadBalancing';

const StudyAccordion = ({ title, date, category, isOpen, onToggle, children }) => {
  return (
    <div className="bg-slate-50 rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
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
    loadBalancing: false,
    cicd: false,
    refactoring: false,
    autoCleanup: false,
    terraform: false
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
          <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">Study Records</h1>
          
          <div className="space-y-4">
            <StudyAccordion
              title="Nginx를 활용한 프론트엔드 로드밸런싱 구현"
              date="2025.01.12"
              category="DevOps"
              isOpen={openRecords.loadBalancing}
              onToggle={() => toggleRecord('loadBalancing')}
            >
              <LoadBalancingContent />
            </StudyAccordion>

            <StudyAccordion
              title="Jenkins를 활용한 System Auto-Cleanup 파이프라인 구축"
              date="2025.01.10"
              category="DevOps"
              isOpen={openRecords.autoCleanup}
              onToggle={() => toggleRecord('autoCleanup')}
            >
              <AutoCleanupContent />
            </StudyAccordion>

            <StudyAccordion
              title="쿠버네티스 Jenkins ArgoCD CICD 구축 영상"
              date="2025.01.08"
              category="DevOps"
              isOpen={openRecords.cicd}
              onToggle={() => toggleRecord('cicd')}
            >
              <CICDContent />
            </StudyAccordion>

            <StudyAccordion
              title="테라폼으로 AWS 인프라 구축하기"
              date="2025.01.05"
              category="DevOps"
              isOpen={openRecords.terraform}
              onToggle={() => toggleRecord('terraform')}
            >
              <TerraformContent />
            </StudyAccordion>

            <StudyAccordion
              title="리액트 프로젝트 컴포넌트 리팩토링"
              date="2024.11.20"
              category="Frontend"
              isOpen={openRecords.refactoring}
              onToggle={() => toggleRecord('refactoring')}
            >
              <RefactoringContent />
            </StudyAccordion>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Records;