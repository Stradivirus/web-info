import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import terraformData from './json/terraformData.json';
import ansibleData from './json/ansibleData.json';

const IacSection = () => {
  const [expandedTool, setExpandedTool] = useState(null);

  const iacTools = [
    { id: 'terraform', data: terraformData.terraform },
    { id: 'ansible', data: ansibleData.ansible }
  ];

  const toggleTool = (tool) => {
    setExpandedTool(expandedTool === tool ? null : tool);
  };

  const renderFeatureList = (items, type) => (
    <div className="iac-feature-list">
      {items.map((item, idx) => (
        <div key={idx} className={`iac-feature-item ${type}`}>
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

  const renderPricingSection = (pricing) => {
    if (!pricing) return null;
    
    return (
      <>
        <h4>가격 정책</h4>
        <div className="iac-pricing-list">
          {pricing.plans.map((plan, idx) => (
            <div key={idx} className="iac-pricing-item">
              <h5>{plan.name}</h5>
              <p className="iac-pricing-cost">{plan.cost}</p>
              <ul className="iac-pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    );
  };

  const renderIntegrations = (integrations) => {
    if (!integrations) return null;

    return (
      <>
        <h4 className="mt-6">통합 지원</h4>
        <div className="iac-feature-item">
          <h5>CI/CD 도구</h5>
          <ul>
            {integrations.ci_cd.map((tool, idx) => (
              <li key={idx}>{tool}</li>
            ))}
          </ul>

          <h5 className="mt-4">클라우드 제공자</h5>
          <ul>
            {integrations.cloud_providers.map((provider, idx) => (
              <li key={idx}>{provider}</li>
            ))}
          </ul>

          <h5 className="mt-4">모니터링 도구</h5>
          <ul>
            {integrations.monitoring.map((tool, idx) => (
              <li key={idx}>{tool}</li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  const renderUseCases = (useCases) => {
    if (!useCases) return null;

    return (
      <>
        <h4 className="mt-6">활용 사례</h4>
        <div className="iac-suitability-section">
          <div className="iac-suitable">
            <h5>적합한 경우</h5>
            <ul>
              {useCases.suitable.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="iac-unsuitable">
            <h5>부적합한 경우</h5>
            <ul>
              {useCases.unsuitable.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };

  const renderToolContent = (tool) => {
    if (!tool) return null;

    return (
      <div className="iac-section-content">
        <div className="iac-content-grid">
          {/* 왼쪽: 주요 특징, 장단점 */}
          <div className="iac-feature-section">
            <div className="iac-feature-card">
              <h4>주요 특징</h4>
              {renderFeatureList(tool.mainFeatures)}

              <h4>장점</h4>
              {renderFeatureList(tool.advantages, 'advantage')}

              <h4>단점</h4>
              {renderFeatureList(tool.disadvantages, 'disadvantage')}
            </div>
          </div>

          {/* 오른쪽: 가격 정책, 통합 지원, 활용 사례 */}
          <div className="iac-info-section">
            <div className="iac-feature-card">
              {renderPricingSection(tool.pricing)}
              {renderIntegrations(tool.integrations)}
              {renderUseCases(tool.useCases)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {iacTools.map(({ id, data }) => (
        <div key={id} className="iac-section">
          <button 
            className={`iac-section-button ${expandedTool === id ? 'expanded' : ''}`}
            onClick={() => toggleTool(id)}
          >
            <div className="iac-button-content">
              <div className="iac-button-left">
                <h3>{data.name}</h3>
                <p className="iac-subtitle">{data.description}</p>
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

export default IacSection;