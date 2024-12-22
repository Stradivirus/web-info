import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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

  const toggleTool = (tool) => {
    setExpandedTool(expandedTool === tool ? null : tool);
  };

  const renderFeatureList = (items, type) => (
    <div className="ci-feature-list">
      {items.map((item, idx) => (
        <div key={idx} className={`ci-feature-item ${type}`}>
          <h5>{item.title}</h5>
          <ul>
            {item.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderPricingSection = (pricing) => (
    <div className="ci-pricing-list">
      {pricing.plans.map((plan, idx) => (
        <div key={idx} className="ci-pricing-item">
          <h5>{plan.name}</h5>
          <p className="ci-pricing-cost">{plan.cost}</p>
          <ul className="ci-pricing-features">
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderSuitabilitySection = (useCases) => (
    <div className="ci-suitability-section">
      <div className="ci-suitable">
        <h5>적합한 경우</h5>
        <ul>
          {useCases.suitable.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="ci-unsuitable">
        <h5>부적합한 경우</h5>
        <ul>
          {useCases.unsuitable.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderToolContent = (tool) => {
    if (!tool) return null;

    return (
      <div className="ci-section-content">
        <div className="ci-content-grid">
          {/* 왼쪽: 주요 특징, 장단점 */}
          <div className="ci-feature-section">
            <div className="ci-feature-card">
              <h4>주요 특징</h4>
              {renderFeatureList(tool.mainFeatures)}

              <h4>장점</h4>
              {renderFeatureList(tool.advantages, 'advantage')}

              <h4>단점</h4>
              {renderFeatureList(tool.disadvantages, 'disadvantage')}
            </div>
          </div>

          {/* 오른쪽: 가격 정책, 활용 사례 */}
          <div className="ci-info-section">
            <div className="ci-feature-card">
              <h4>가격 정책</h4>
              {renderPricingSection(tool.pricing)}

              <h4 className="mt-6">활용 사례</h4>
              {renderSuitabilitySection(tool.useCases)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {ciTools.map(({ id, data }) => (
        <div key={id} className="ci-section">
          <button 
            className={`ci-section-button ${expandedTool === id ? 'expanded' : ''}`}
            onClick={() => toggleTool(id)}
          >
            <div className="ci-button-content">
              <div className="ci-button-left">
                <h3>{data.name}</h3>
                <p className="ci-subtitle">{data.description}</p>
              </div>
              {expandedTool === id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
          </button>
          
          {expandedTool === id && renderToolContent(data)}
        </div>
      ))}
    </div>
  );
};

export default CiSection;