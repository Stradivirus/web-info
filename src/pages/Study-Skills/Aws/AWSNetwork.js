import React, { useState } from 'react';

const ServiceSection = ({ data }) => {
  // VPC 섹션 렌더링
  const renderVPC = (vpc) => (
    <div className="aws-content">
      <p className="aws-main-description">안전하고 격리된 네트워크 인프라를 제공하는 서비스</p>
      <div className="aws-grid-content">
        <div className="aws-column">
          <div className="aws-feature-item">
            <h4 className="aws-item-title">서브넷</h4>
            <ul className="aws-item-list">
              <li>퍼블릭/프라이빗 구분으로 보안 강화</li>
              <li>CIDR 블록 기반 네트워크 관리</li>
              <li>유연한 라우팅 테이블 연결</li>
              <li>가용 영역별 리소스 분산</li>
              <li>네트워크 ACL 적용</li>
            </ul>
          </div>
        </div>
        <div className="aws-column">
          <div className="aws-feature-item">
            <h4 className="aws-item-title">VPC Endpoints</h4>
            <div className="feature-group">
              <h5 className="aws-item-subtitle">Gateway Endpoint</h5>
              <ul className="aws-item-list">
                <li>S3, DynamoDB 전용</li>
                <li>설정 간단</li>
                <li>추가 비용 없음</li>
                <li>AWS 네이티브 솔루션</li>
                <li>라우팅 테이블 엔트리 추가</li>
              </ul>
            </div>
            <div className="feature-group">
              <h5 className="aws-item-subtitle">Interface Endpoint</h5>
              <ul className="aws-item-list">
                <li>프라이빗 IP 주소 할당</li>
                <li>대부분의 AWS 서비스 지원</li>
                <li>보안 그룹 연결 가능</li>
                <li>DNS 엔트리 생성</li>
              </ul>
            </div>
            <div className="feature-group">
              <h5 className="aws-item-subtitle">장점</h5>
              <ul className="aws-item-list">
                <li>데이터 전송 비용 절감</li>
                <li>보안 강화</li>
                <li>네트워크 성능 향상</li>
                <li>인터넷 게이트웨이 불필요</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 연결 서비스 섹션 렌더링
  const renderConnectionServices = (data) => (
    <div className="aws-content">
      <p className="aws-main-description">AWS와 온프레미스 또는 VPC 간의 네트워크 연결을 위한 서비스</p>
      <div className="aws-grid-three">
        {data.services.map((service, index) => (
          <div key={index} className="aws-feature-item">
            <h4 className="aws-item-title">{service.name}</h4>
            {service.description && (
              <p className="aws-description">{service.description}</p>
            )}
            
            {service.features && (
              <div className="feature-group">
                <h5 className="aws-item-subtitle">주요 기능</h5>
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
                  <div key={idx} className="feature-group">
                    <h5 className="aws-item-subtitle">{type.name}</h5>
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
              <div className="feature-group">
                <h5 className="aws-item-subtitle">장점</h5>
                <ul className="aws-item-list">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.useCases && (
              <div className="feature-group">
                <h5 className="aws-item-subtitle">활용 사례</h5>
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
    <div className="aws-content">
      <p className="aws-main-description">애플리케이션 트래픽을 여러 대상으로 자동 분산하는 서비스</p>
      <div className="aws-grid-three">
        {data.services.map((service, index) => (
          <div key={index} className="aws-feature-item">
            <h4 className="aws-item-title">{service.name}</h4>
            {service.description && (
              <p className="aws-description">{service.description}</p>
            )}
            
            <div className="feature-group">
              <h5 className="aws-item-subtitle">주요 기능</h5>
              <ul className="aws-item-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="feature-group">
              <h5 className="aws-item-subtitle">활용 사례</h5>
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

  // Route 53 섹션 렌더링
  const renderRoute53 = (data) => (
    <div className="aws-content">
      <p className="aws-main-description">확장 가능한 DNS 및 도메인 등록 서비스</p>
      <div className="aws-grid-content">
        <div className="aws-column">
          <div className="aws-feature-item">
            <h4 className="aws-item-title">주요 기능</h4>
            <ul className="aws-item-list">
              {data.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="aws-feature-item">
            <h4 className="aws-item-title">라우팅 정책</h4>
            {data.routingPolicies.map((policy, index) => (
              <div key={index} className="feature-group">
                <h5 className="aws-item-subtitle">{policy.name}</h5>
                <ul className="aws-item-list">
                  {policy.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="aws-column">
          <div className="aws-feature-item">
            <h4 className="aws-item-title">활용 사례</h4>
            <ul className="aws-item-list">
              {data.useCases.map((useCase, idx) => (
                <li key={idx}>{useCase}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // CloudFront 섹션 렌더링
  const renderCloudFront = (data) => (
    <div className="aws-content">
      <p className="aws-main-description">글로벌 콘텐츠 전송 네트워크(CDN) 서비스</p>
      <div className="aws-grid-content">
        <div className="aws-column">
          <div className="aws-feature-item">
            <h4 className="aws-item-title">주요 기능</h4>
            <ul className="aws-item-list">
              {data.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="aws-feature-item">
            <h4 className="aws-item-title">보안 기능</h4>
            <div className="feature-group">
              <h5 className="aws-item-subtitle">{data.securityFeatures.originAccess.name}</h5>
              <ul className="aws-item-list">
                {data.securityFeatures.originAccess.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="feature-group">
              <h5 className="aws-item-subtitle">보안 보호</h5>
              <ul className="aws-item-list">
                {data.securityFeatures.protection.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="aws-column">
          <div className="aws-feature-item">
            <h4 className="aws-item-title">최적화</h4>
            {data.optimizations.map((opt, idx) => (
              <div key={idx} className="feature-group">
                <h5 className="aws-item-subtitle">{opt.name}</h5>
                <ul className="aws-item-list">
                  {opt.features.map((feature, featureIdx) => (
                    <li key={featureIdx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
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