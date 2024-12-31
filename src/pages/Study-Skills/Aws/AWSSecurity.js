import React, { useState } from 'react';
import './AwsSecurity.css';

const FeatureList = ({ features }) => {
  if (!features) return null;

  return (
    <ul className="aws-item-list">
      {features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
  );
};

const ServiceSection = ({ data }) => {
  const renderIAMSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">사용자 관리</h4>
          <h5 className="aws-item-subtitle">기능</h5>
          <FeatureList features={data.components.userManagement.features} />
          <h5 className="aws-item-subtitle">모범 사례</h5>
          <FeatureList features={data.components.userManagement.bestPractices} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">역할 기반 접근</h4>
          <h5 className="aws-item-subtitle">기능</h5>
          <FeatureList features={data.components.roleBasedAccess.features} />
          {data.components.roleBasedAccess.types.map((type, index) => (
            <div key={index} className="feature-group">
              <h5 className="aws-item-subtitle">{type.name}</h5>
              <p className="aws-description">{type.description}</p>
              <FeatureList features={type.useCases} />
            </div>
          ))}
        </div>
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">정책 유형</h4>
          {data.components.policies.types.map((type, index) => (
            <div key={index} className="feature-group">
              <h5 className="aws-item-subtitle">{type.name}</h5>
              <FeatureList features={type.examples} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDataSecuritySection = () => (
    <div className="aws-grid-fullwidth">
      {data.services.map((service, index) => (
        <div key={index} className="aws-feature-item">
          <h4 className="aws-item-title">{service.name}</h4>
          <p className="aws-description">{service.description}</p>
          <h5 className="aws-item-subtitle">기능</h5>
          <FeatureList features={service.features} />
          
          {service.keyTypes && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">키 유형</h5>
              <FeatureList features={service.keyTypes[0].types} />
            </div>
          )}
          
          {service.dataTypes && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">데이터 유형</h5>
              <FeatureList features={service.dataTypes} />
            </div>
          )}
          
          {service.supportedSecrets && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">지원되는 시크릿</h5>
              <FeatureList features={service.supportedSecrets} />
            </div>
          )}
          
          {service.integrations && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">통합</h5>
              <FeatureList features={service.integrations} />
            </div>
          )}
          
          {service.benefits && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">이점</h5>
              <FeatureList features={service.benefits} />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderThreatDetectionSection = () => (
    <div className="aws-grid-fullwidth">
      {data.services.map((service, index) => (
        <div key={index} className="aws-feature-item">
          <h4 className="aws-item-title">{service.name}</h4>
          <p className="aws-description">{service.description}</p>
          <h5 className="aws-item-subtitle">기능</h5>
          <FeatureList features={service.features} />
          
          {service.dataSources && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">데이터 소스</h5>
              <FeatureList features={service.dataSources} />
            </div>
          )}
          
          {service.detectionTypes && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">탐지 유형</h5>
              <FeatureList features={service.detectionTypes} />
            </div>
          )}
          
          {service.integrations && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">통합</h5>
              <FeatureList features={service.integrations} />
            </div>
          )}
          
          {service.standards && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">표준</h5>
              <FeatureList features={service.standards} />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderNetworkSecuritySection = () => (
    <div className="aws-grid-fullwidth">
      {data.services.map((service, index) => (
        <div key={index} className="aws-feature-item">
          <h4 className="aws-item-title">{service.name}</h4>
          {service.description && <p className="aws-description">{service.description}</p>}
          
          {service.variants && service.variants.map((variant, idx) => (
            <div key={idx} className="feature-group">
              <h5 className="aws-item-subtitle">{variant.name}</h5>
              <FeatureList features={variant.features} />
            </div>
          ))}
          
          {service.features && (
            <>
              <h5 className="aws-item-subtitle">기능</h5>
              <FeatureList features={service.features} />
            </>
          )}
          
          {service.protectedResources && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">보호되는 리소스</h5>
              <FeatureList features={service.protectedResources} />
            </div>
          )}
          
          {service.rules && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">규칙</h5>
              {service.rules.categories.map((category, idx) => (
                <div key={idx}>
                  <h6 className="aws-item-subtitle">{category.name}</h6>
                  <FeatureList features={category.types} />
                </div>
              ))}
              <h6 className="aws-item-subtitle">작업</h6>
              <FeatureList features={service.rules.actions} />
            </div>
          )}
          
          {service.capabilities && Object.entries(service.capabilities).map(([key, value]) => (
            <div key={key} className="feature-group">
              <h5 className="aws-item-subtitle">{key === 'inspection' ? '검사' : '관리'}</h5>
              <FeatureList features={value} />
            </div>
          ))}
          
          {service.useCases && (
            <div className="feature-group">
              <h5 className="aws-item-subtitle">활용 사례</h5>
              <FeatureList features={service.useCases} />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderOrganizationsSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
          <div className="feature-group">
            <h5 className="aws-item-subtitle">이점</h5>
            <FeatureList features={data.benefits} />
          </div>
        </div>
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">구성 요소</h4>
          <div className="feature-group">
            <h5 className="aws-item-subtitle">{data.components.organizationalUnits.description}</h5>
            <FeatureList features={data.components.organizationalUnits.benefits} />
          </div>
          <div className="feature-group">
            <h5 className="aws-item-subtitle">{data.components.serviceControlPolicies.description}</h5>
            <FeatureList features={data.components.serviceControlPolicies.features} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="aws-content">
      <p className="aws-main-description">{data.description}</p>
      {(() => {
        if (data.title.includes('IAM')) return renderIAMSection();
        if (data.title.includes('데이터 보안')) return renderDataSecuritySection();
        if (data.title.includes('위협 탐지')) return renderThreatDetectionSection();
        if (data.title.includes('네트워크 보안')) return renderNetworkSecuritySection();
        if (data.title.includes('Organizations')) return renderOrganizationsSection();
        return null;
      })()}
    </div>
  );
};

const AWSSecurity = ({ data }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeService = data.services[activeTabIndex];

  return (
    <div className="aws-computing">
      <div className="aws-tabs">
        {data.services.map((service, index) => (
          <button
            key={index}
            className={`aws-tab-button ${activeTabIndex === index ? 'active' : ''}`}
            onClick={() => setActiveTabIndex(index)}
          >
            {service.title.includes('IAM') ? 'IAM' :
             service.title.includes('데이터 보안') ? '데이터 보안' :
             service.title.includes('위협 탐지') ? '위협 탐지' :
             service.title.includes('네트워크 보안') ? '네트워크 보안' :
             service.title.includes('Organizations') ? 'Organizations' :
             service.title}
          </button>
        ))}
      </div>
      <ServiceSection data={activeService} />
    </div>
  );
};

export default AWSSecurity;