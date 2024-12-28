import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import awscomputingData from './json/awscomputingData.json';
import awsnetworkData from './json/awsnetworkData.json';
import awsstorageData from './json/awsstorageData.json';
import awsdatabaseData from './json/awsdatabaseData.json';
import awsanalyticsData from './json/awsanalyticsData.json';
import awssecurityData from './json/awssecurityData.json';
import awsaimlData from './json/ALMLservicesData.json';
import awsbackupData from './json/awsbackupData.json';
import AWSComputing from './AWSComputing';
import AWSNetwork from './AWSNetwork';
import AWSStorage from './AWSStorage';
import AWSDatabase from './AWSDatabase';
import AWSAnalytics from './AWSAnalytics';
import AWSSecurity from './AWSSecurity';
import AWSAIMLServices from './AWSAIMLServices';
import AWSBackup from './AWSBackup';
import './index.css';
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
            <h3 className="aws-item-title">{title}</h3>
            <p className="aws-description">{subtitle}</p>
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
        <div className="aws-services-list">
          {/* Computing & Network 섹션 */}
          <section className="aws-service-container">
            <h2 className="aws-category-title">Computing & Network</h2>
            
            <AWSInfraSection 
              title="컴퓨팅 서비스"
              subtitle="확장 가능한 컴퓨팅 용량을 클라우드에서 제공하는 서비스"
              isExpanded={expandedSection === 'computing'}
              onToggle={() => toggleSection('computing')}
            >
              <AWSComputing data={awscomputingData} />
            </AWSInfraSection>

            <AWSInfraSection 
              title="네트워크 서비스"
              subtitle="안전하고 격리된 네트워크 인프라를 제공하는 서비스"
              isExpanded={expandedSection === 'network'}
              onToggle={() => toggleSection('network')}
            >
              <AWSNetwork data={awsnetworkData} />
            </AWSInfraSection>
          </section>

          {/* Data Services 섹션 */}
          <section className="aws-service-container">
            <h2 className="aws-category-title">Data Services</h2>
            
            <AWSInfraSection 
              title="스토리지 서비스"
              subtitle="안전하고 확장 가능한 스토리지 서비스 제공"
              isExpanded={expandedSection === 'storage'}
              onToggle={() => toggleSection('storage')}
            >
              <AWSStorage data={awsstorageData} />
            </AWSInfraSection>

            <AWSInfraSection 
              title="데이터베이스 서비스"
              subtitle="관리형 데이터베이스 서비스 제공"
              isExpanded={expandedSection === 'database'}
              onToggle={() => toggleSection('database')}
            >
              <AWSDatabase data={awsdatabaseData} />
            </AWSInfraSection>

            <AWSInfraSection 
              title="분석 서비스"
              subtitle="대규모 데이터 분석 및 처리 서비스"
              isExpanded={expandedSection === 'analytics'}
              onToggle={() => toggleSection('analytics')}
            >
              <AWSAnalytics data={awsanalyticsData} />
            </AWSInfraSection>

            <AWSInfraSection 
              title="백업 서비스"
              subtitle="AWS 리소스를 위한 중앙 집중식 백업 관리"
              isExpanded={expandedSection === 'backup'}
              onToggle={() => toggleSection('backup')}
            >
              <AWSBackup data={awsbackupData} />
            </AWSInfraSection>
          </section>

          {/* Security 섹션 */}
          <section className="aws-service-container">
            <h2 className="aws-category-title">Security</h2>
            
            <AWSInfraSection 
              title="보안 서비스"
              subtitle="AWS 리소스를 위한 통합 보안 서비스"
              isExpanded={expandedSection === 'security'}
              onToggle={() => toggleSection('security')}
            >
              <AWSSecurity data={awssecurityData} />
            </AWSInfraSection>
          </section>

          {/* Machine Learning 섹션 */}
          <section className="aws-service-container">
            <h2 className="aws-category-title">Machine Learning</h2>
            
            <AWSInfraSection 
              title="AI/ML 서비스"
              subtitle={awsaimlData.description}
              isExpanded={expandedSection === 'aiml'}
              onToggle={() => toggleSection('aiml')}
            >
              <AWSAIMLServices data={awsaimlData} />
            </AWSInfraSection>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AWSIndex;