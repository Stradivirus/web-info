import React, { useState } from 'react';

const ServiceSection = ({ data }) => {
  // Route 53 섹션 렌더링
  const renderRoute53 = (data) => (
    <div className="aws-instance-card">
      <p className="aws-main-description">{data.description}</p>
      
      <div className="aws-instance-item">
        <h4 className="aws-item-title">주요 기능</h4>
        <ul className="aws-item-list">
          {data.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="aws-instance-item">
        <h4 className="aws-item-title">라우팅 정책</h4>
        {data.routingPolicies.map((policy, index) => (
          <div key={index}>
            <h5 className="aws-sub-title">{policy.name}</h5>
            <ul className="aws-item-list">
              {policy.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="aws-instance-item">
        <h4 className="aws-item-title">활용 사례</h4>
        <ul className="aws-item-list">
          {data.useCases.map((useCase, idx) => (
            <li key={idx}>{useCase}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  // VPC 섹션 렌더링
  const renderVPC = (vpc) => (
    <div className="aws-instance-card">
      <p className="aws-main-description">{vpc.description}</p>
      <div className="aws-service-list">
        {vpc.components.map((component, index) => (
          <div key={index} className="aws-instance-item">
            <h4 className="aws-item-title">{component.name}</h4>
            {component.features && (
              <ul className="aws-item-list">
                {component.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}
            {component.types && 
              component.types.map((type, idx) => (
                <div key={idx}>
                  <h5 className="aws-sub-title">{type.name}</h5>
                  <ul className="aws-item-list">
                    {type.details.map((detail, detailIdx) => (
                      <li key={detailIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))
            }
            {component.benefits && (
              <div>
                <h5 className="aws-advantages-title">장점</h5>
                <ul className="aws-item-list">
                  {component.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // 연결 서비스 섹션 렌더링
  const renderConnectionServices = (data) => (
    <div className="aws-instance-card">
      <div className="aws-service-list">
        {data.services.map((service, index) => (
          <div key={index} className="aws-instance-item">
            <h4 className="aws-item-title">{service.name}</h4>
            {service.description && (
              <p className="aws-description">{service.description}</p>
            )}
            
            {service.features && (
              <div>
                <h5 className="aws-sub-title">주요 기능</h5>
                <ul className="aws-item-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {service.connectionTypes && (
              <div>
                {service.connectionTypes.map((type, idx) => (
                  <div key={idx}>
                    <h5 className="aws-sub-title">{type.name}</h5>
                    <ul className="aws-item-list">
                      {type.details.map((detail, detailIdx) => (
                        <li key={detailIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {service.benefits && (
              <div>
                <h5 className="aws-advantages-title">장점</h5>
                <ul className="aws-item-list">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.useCases && (
              <div>
                <h5 className="aws-sub-title">활용 사례</h5>
                <ul className="aws-item-list">
                  {service.useCases.map((useCase, idx) => (
                    <li key={idx}>{useCase}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // 로드 밸런서 섹션 렌더링
  const renderLoadBalancer = (data) => (
    <div className="aws-instance-card">
      <div className="aws-service-list">
        {data.services.map((service, index) => (
          <div key={index} className="aws-instance-item">
            <h4 className="aws-item-title">{service.name}</h4>
            {service.description && (
              <p className="aws-description">{service.description}</p>
            )}
            
            <div>
              <h5 className="aws-sub-title">주요 기능</h5>
              <ul className="aws-item-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="aws-sub-title">활용 사례</h5>
              <ul className="aws-item-list">
                {service.useCases.map((useCase, idx) => (
                  <li key={idx}>{useCase}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // CloudFront 섹션 렌더링
  const renderCloudFront = (data) => (
    <div className="aws-instance-card">
      <p className="aws-main-description">{data.description}</p>
      
      <div className="aws-instance-item">
        <h4 className="aws-item-title">주요 기능</h4>
        <ul className="aws-item-list">
          {data.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="aws-instance-item">
        <h4 className="aws-item-title">보안 기능</h4>
        <div>
          <h5 className="aws-sub-title">{data.securityFeatures.originAccess.name}</h5>
          <ul className="aws-item-list">
            {data.securityFeatures.originAccess.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="aws-sub-title">보안 보호</h5>
          <ul className="aws-item-list">
            {data.securityFeatures.protection.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="aws-instance-item">
        <h4 className="aws-item-title">최적화</h4>
        {data.optimizations.map((opt, idx) => (
          <div key={idx}>
            <h5 className="aws-sub-title">{opt.name}</h5>
            <ul className="aws-item-list">
              {opt.features.map((feature, featureIdx) => (
                <li key={featureIdx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="aws-content">
      {(() => {
        switch (data.title) {
          case 'VPC (Virtual Private Cloud)':
            return renderVPC(data);
          case '연결 서비스':
            return renderConnectionServices(data);
          case '로드 밸런싱':
            return renderLoadBalancer(data);
          case 'Route 53':
            return renderRoute53(data);
          case 'CloudFront':
            return renderCloudFront(data);
          default:
            return null;
        }
      })()}
    </div>
  );
};

const AWSNetwork = ({ data }) => {
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
            {service.title === 'VPC (Virtual Private Cloud)' ? 'VPC' : service.title}
          </button>
        ))}
      </div>
      
      <ServiceSection data={activeService} />
    </div>
  );
};

export default AWSNetwork;