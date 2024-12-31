import React, { useState } from 'react';
import './AwsAIML.css';

const FeatureList = ({ features }) => {
  if (!features || features.length === 0) return null;
  
  return (
    <ul className="aws-item-list">
      {features.map((feature, idx) => (
        <li key={idx}>{typeof feature === 'string' ? feature : feature.details}</li>
      ))}
    </ul>
  );
};

const PricingSection = ({ pricing }) => {
  if (!pricing) return null;

  return (
    <div className="aws-feature-item">
      <h4 className="section-title">가격 정책</h4>
      <p className="aws-description">{pricing.description}</p>
      {pricing.components?.map((component, idx) => (
        <div key={idx} className="feature-group">
          <h5 className="aws-item-subtitle">{component.name}</h5>
          <FeatureList features={component.details} />
        </div>
      ))}
    </div>
  );
};

const CommonUseCases = ({ commonUseCases }) => {
  if (!commonUseCases) return null;

  return (
    <div className="aws-feature-item">
      <h4 className="section-title">일반적인 활용 사례</h4>
      {commonUseCases.examples?.map((useCase, idx) => (
        <div key={idx} className="feature-group">
          <h5 className="aws-item-subtitle">{useCase.title}</h5>
          <p className="aws-description">{useCase.details}</p>
        </div>
      ))}
      {commonUseCases.suitable && (
        <div className="use-cases-grid">
          <div className="suitable-cases">
            <h5 className="aws-advantages-title">적합한 사례</h5>
            <FeatureList features={commonUseCases.suitable} />
          </div>
          {commonUseCases.unsuitable && (
            <div className="unsuitable-cases">
              <h5 className="aws-disadvantages-title">부적합한 사례</h5>
              <FeatureList features={commonUseCases.unsuitable} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ServiceSection = ({ service }) => {
  if (!service) return null;

  return (
    <div className="aws-content">
      <p className="aws-main-description">{service.description}</p>
      <div className="aws-grid">
        <div className="aws-left-column">
          {/* 주요 기능 섹션 */}
          {service.mainFeatures?.map((feature, idx) => (
            <div key={idx} className="aws-feature-item">
              <h4 className="aws-item-title">{feature.title}</h4>
              <FeatureList features={feature.details} />
            </div>
          ))}
          
          {/* 장점 섹션 */}
          {service.advantages?.map((advantage, idx) => (
            <div key={idx} className="aws-feature-item">
              <h4 className="aws-item-title">{advantage.title}</h4>
              <FeatureList features={advantage.details} />
            </div>
          ))}

          {/* 서비스별 활용 사례 섹션 */}
          {service.useCases?.examples && (
            <div className="aws-feature-item">
              <h4 className="section-title">서비스별 활용 사례</h4>
              {service.useCases.examples.map((useCase, idx) => (
                <div key={idx} className="feature-group">
                  <h5 className="aws-item-subtitle">{useCase.title}</h5>
                  <p className="aws-description">{useCase.details}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CommonSection = ({ commonUseCases, pricing }) => {
  return (
    <div className="aws-content">
      <div className="aws-grid">
        <div className="aws-left-column">
          <CommonUseCases commonUseCases={commonUseCases} />
        </div>
        <div className="aws-right-column">
          <PricingSection pricing={pricing} />
        </div>
      </div>
    </div>
  );
};

const AWSAIMLServices = ({ data }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const services = Object.values(data.services);
  const tabs = [...services, { name: "Common" }];
  const activeTab = tabs[activeTabIndex];

  return (
    <div className="aws-computing">
      {/* 서비스 탭 */}
      <div className="aws-tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`aws-tab-button ${activeTabIndex === index ? 'active' : ''}`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.name.replace('Amazon ', '')}
          </button>
        ))}
      </div>

      {/* 선택된 탭 내용 */}
      {activeTabIndex < services.length ? (
        <ServiceSection service={activeTab} />
      ) : (
        <CommonSection 
          commonUseCases={data.commonUseCases}
          pricing={data.pricing}
        />
      )}
    </div>
  );
};

export default AWSAIMLServices;