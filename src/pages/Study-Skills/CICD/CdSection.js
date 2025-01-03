// CdSection.js
import { useState } from 'react';
import { renderFeatureList, renderPricingSection, renderSectionLayout } from './DevOpsComponents';
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
          <div>
            <div>단계</div>
            <ul>
              {argoRollouts.strategies.canary.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
          <div>
            <div>분석 유형</div>
            <ul>
              {argoRollouts.strategies.canary.analysisTypes.map((type, idx) => (
                <li key={idx}>{type}</li>
              ))}
            </ul>
          </div>
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
          {data.argoRollouts && renderArgoRollouts(data.argoRollouts)}
          {data.deploymentStrategies && renderDeploymentStrategies(data.deploymentStrategies)}
          {renderPlatformSupport(data)}
        </div>
      </div>
    </div>
  </div>
);

return (
  <div>
    {cdTools.map(tool => renderSectionLayout(
      tool,
      expandedTool,
      setExpandedTool,
      renderContent
    ))}
  </div>
);
};

export default CdSection;