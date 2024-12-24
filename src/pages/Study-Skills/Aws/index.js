import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import awscomputingData from './json/awscomputingData.json';
import awsnetworkData from './json/awsnetworkData.json';
import AWSComputing from './AWSComputing';
import AWSNetwork from './AWSNetwork';
import './AwsInfra.css';

const AWSInfraSection = ({ title, subtitle, isExpanded, onToggle, children }) => {
  return (
    <div className="aws-section">
      <button 
        className={`aws-section-button ${isExpanded ? 'expanded' : ''}`}
        onClick={onToggle}
      >
        <div className="aws-button-content">
          <div className="aws-button-left">
            <h2 className="aws-button-title">{title}</h2>
            <p className="aws-button-subtitle">{subtitle}</p>
          </div>
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      {isExpanded && (
        <div className="aws-section-content">
          {children}
        </div>
      )}
    </div>
  );
};

const AWSIndex = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="aws-container">
          <h1 className="aws-main-title">Amazon Web Services의 인프라 서비스</h1>
          
          {/* 컴퓨팅 섹션 */}
          <AWSInfraSection 
            title="컴퓨팅 서비스"
            subtitle="확장 가능한 컴퓨팅 용량을 클라우드에서 제공하는 서비스"
            isExpanded={expandedSection === 'computing'}
            onToggle={() => toggleSection('computing')}
          >
            <AWSComputing data={awscomputingData} />
          </AWSInfraSection>

          {/* 네트워크 섹션 */}
          <AWSInfraSection 
            title="네트워크 서비스"
            subtitle="안전하고 격리된 네트워크 인프라를 제공하는 서비스"
            isExpanded={expandedSection === 'network'}
            onToggle={() => toggleSection('network')}
          >
            <AWSNetwork data={awsnetworkData} />
          </AWSInfraSection>
        </div>
      </div>
    </main>
  );
};

export default AWSIndex;