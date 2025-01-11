// CiSection.js
import { useState } from 'react';
import { renderFeatureList, renderPricingSection, renderSectionLayout } from './DevOpsComponents';
import circleciData from './json/circleciData.json';
import githubactionData from './json/githunactionData.json';
import jenkinsData from './json/jenkinsData.json';
import travisciData from './json/travisciData.json';

const CiSection = () => {
  const [expandedTool, setExpandedTool] = useState(null);
  
  const ciTools = [
    { id: 'circleci', data: circleciData.circleci },
    { id: 'github_actions', data: githubactionData.github_actions },
    { id: 'jenkins', data: jenkinsData.jenkins },
    { id: 'travis_ci', data: travisciData.travis_ci }
  ];

  const renderContent = (data) => (
    <div className="devops-section-content">
      <div className="devops-content-grid">
        <div className="devops-feature-section">
          <div className="devops-feature-card">
            <h4>주요 특징</h4>
            {renderFeatureList(data.mainFeatures)}
            <h4>장점</h4>
            {renderFeatureList(data.advantages, 'advantage')}
            <h4>단점</h4>
            {renderFeatureList(data.disadvantages, 'disadvantage')}
          </div>
        </div>
        <div className="devops-info-section">
          <div className="devops-feature-card">
            {renderPricingSection(data.pricing)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {ciTools.map(tool => renderSectionLayout(
        tool, 
        expandedTool, 
        setExpandedTool, 
        renderContent
      ))}
    </div>
  );
};

export default CiSection;