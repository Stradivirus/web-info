import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import argocdData from './json/argocdData.json';
import awscodedeployData from './json/awscodedeployData.json';
import spinnakerData from './json/spinnakerData.json';

const CdSection = () => {
  const [expandedTool, setExpandedTool] = useState(null);

  const cdTools = [
    { id: 'argocd', data: argocdData.argocd },
    { id: 'aws_codedeploy', data: awscodedeployData.aws_codedeploy },
    { id: 'spinnaker', data: spinnakerData.spinnaker }
  ];

  const toggleTool = (tool) => {
    setExpandedTool(expandedTool === tool ? null : tool);
  };

  const renderFeatureList = (items, type) => (
    <div className="devops-feature-list">
      {items.map((item, idx) => (
        <div key={idx} className={`devops-feature-item ${type}`}>
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
        <div className="devops-pricing-list">
          {pricing.plans.map((plan, idx) => (
            <div key={idx} className="devops-pricing-item">
              <h5>{plan.name}</h5>
              <p className="devops-pricing-cost">{plan.cost}</p>
              <ul className="devops-pricing-features">
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

  const renderArgoRollouts = (argoRollouts) => {
    if (!argoRollouts) return null;

    return (
      <>
        <h4 className="mt-6">Argo Rollouts</h4>
        {renderFeatureList(argoRollouts.features)}
        
        <h4 className="mt-4">배포 전략</h4>
        <div className="devops-feature-item">
          <h5>카나리 배포</h5>
          <div className="devops-strategy-details">
            <ul>
              <li>단계:
                <ul>
                  {argoRollouts.strategies.canary.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </li>
              <li>분석 유형:
                <ul>
                  {argoRollouts.strategies.canary.analysisTypes.map((type, idx) => (
                    <li key={idx}>{type}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  const renderDeploymentStrategies = (strategies) => {
    if (!strategies) return null;

    return (
      <>
        <h4 className="mt-6">배포 전략</h4>
        <div className="devops-feature-item">
          {strategies.blueGreen && (
            <div className="devops-deployment-strategy">
              <h5>Blue/Green 배포</h5>
              <p>{strategies.blueGreen.description}</p>
              <ul>
                {strategies.blueGreen.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {strategies.canary && (
            <div className="devops-deployment-strategy">
              <h5 className="mt-4">카나리 배포</h5>
              <p>{strategies.canary.description}</p>
              <ul>
                {strategies.canary.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {strategies.metrics && (
            <div className="devops-deployment-strategy">
              <h5 className="mt-4">모니터링 메트릭</h5>
              <p>{strategies.metrics.description}</p>
              <ul>
                {strategies.metrics.features.map((metric, idx) => (
                  <li key={idx}>{metric}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  };

  const renderPlatformSupport = (tool) => {
    if (tool.deploymentPlatforms) {
      return (
        <>
          <h4 className="mt-6">지원 플랫폼</h4>
          <div className="devops-feature-item">
            <h5>컴퓨팅 플랫폼</h5>
            <ul>
              {tool.deploymentPlatforms.compute.map((platform, idx) => (
                <li key={idx}>{platform}</li>
              ))}
            </ul>
            <h5 className="mt-4">특징</h5>
            <ul>
              {tool.deploymentPlatforms.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </>
      );
    }
    
    if (tool.supportedPlatforms) {
      return (
        <>
          <h4 className="mt-6">지원 플랫폼</h4>
          <div className="devops-feature-item">
            <h5>클라우드 제공자</h5>
            <ul>
              {tool.supportedPlatforms.cloudProviders.map((provider, idx) => (
                <li key={idx}>
                  {provider.name}: {provider.services.join(', ')}
                </li>
              ))}
            </ul>
            {tool.supportedPlatforms.containerPlatforms && (
              <>
                <h5 className="mt-4">컨테이너 플랫폼</h5>
                <ul>
                  {tool.supportedPlatforms.containerPlatforms.map((platform, idx) => (
                    <li key={idx}>{platform}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </>
      );
    }

    return null;
  };

  const renderToolContent = (tool) => {
    if (!tool) return null;

    return (
      <div className="devops-section-content">
        <div className="devops-content-grid">
          {/* 왼쪽: 주요 특징, 장단점 */}
          <div className="devops-feature-section">
            <div className="devops-feature-card">
              <h4>주요 특징</h4>
              {renderFeatureList(tool.mainFeatures)}

              <h4>장점</h4>
              {renderFeatureList(tool.advantages, 'advantage')}

              <h4>단점</h4>
              {renderFeatureList(tool.disadvantages, 'disadvantage')}
            </div>
          </div>

          {/* 오른쪽: 가격 정책 및 추가 정보 */}
          <div className="devops-info-section">
            <div className="devops-feature-card">
              {renderPricingSection(tool.pricing)}
              {tool.argoRollouts && renderArgoRollouts(tool.argoRollouts)}
              {tool.deploymentStrategies && renderDeploymentStrategies(tool.deploymentStrategies)}
              {renderPlatformSupport(tool)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {cdTools.map(({ id, data }) => (
        <div key={id} className="devops-section">
          <button 
            className={`devops-section-button ${expandedTool === id ? 'expanded' : ''}`}
            onClick={() => toggleTool(id)}
          >
            <div className="devops-button-content">
              <div className="devops-button-left">
                <h3>{data.name}</h3>
                <p className="devops-subtitle">{data.description}</p>
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

export default CdSection;