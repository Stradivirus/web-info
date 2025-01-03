import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CommandSection from './CommandSection';

const ContainerSection = ({ name, subtitle, data, isExpanded, onToggle }) => {
  if (!data) return null;

  return (
    <div className="container-section">
      <button 
        className={`container-section-button ${isExpanded ? 'expanded' : ''}`}
        onClick={onToggle}
      >
        <div className="container-button-content">
          <div className="container-button-left">
            <h3>{name}</h3>
            <p className="container-subtitle">{subtitle}</p>
          </div>
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      {isExpanded && (
        <div className="container-section-content">
          <div className="container-content-grid">
            {/* 왼쪽: 특징 및 장단점 */}
            <div className="container-feature-section">
              <div className="container-feature-card">
                {/* 장점 */}
                <h4>장점</h4>
                <div className="container-feature-list">
                  {data.advantages.map((advantage, index) => (
                    <div key={index} className="container-feature-item">
                      <h5 className="advantage-title">{advantage.title}</h5>
                      <ul>
                        {advantage.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* 단점 */}
                <h4>단점</h4>
                <div className="container-feature-list">
                  {data.disadvantages.map((disadvantage, index) => (
                    <div key={index} className="container-feature-item">
                      <h5 className="disadvantage-title">{disadvantage.title}</h5>
                      <ul>
                        {disadvantage.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {data.troubleshooting && (
                  <>
                    <h4>문제 해결</h4>
                    <div className="container-feature-list">
                      {data.troubleshooting.commonIssues.map((issue, idx) => (
                        <div key={idx} className="container-feature-item">
                          <p><strong>{issue.problem}</strong></p>
                          <p>{issue.solution}</p>
                        </div>
                      ))}
                      <h4>성능 최적화 팁</h4>
                      <ul>
                        {data.troubleshooting.performanceTips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {/* 쿠버네티스 리소스 관리 */}
                {data.resourceManagement && (
                  <div className="kubernetes-feature-card">
                    <h4>리소스 관리</h4>
                    <div className="kubernetes-feature-content">
                      <h5>Pod 리소스</h5>
                      <p>Requests: {JSON.stringify(data.resourceManagement.podResources.requests.example)}</p>
                      <p>Limits: {JSON.stringify(data.resourceManagement.podResources.limits.example)}</p>
                    </div>
                    <div className="kubernetes-feature-content">
                      <h5>Auto Scaling</h5>
                      <p>HPA: {data.resourceManagement.autoscaling.hpa.description}</p>
                      <ul>
                        {data.resourceManagement.autoscaling.hpa.metrics.map((metric, idx) => (
                          <li key={idx}>{metric}</li>
                        ))}
                      </ul>
                      <p>VPA: {data.resourceManagement.autoscaling.vpa.description}</p>
                      <ul>
                        {data.resourceManagement.autoscaling.vpa.modes.map((mode, idx) => (
                          <li key={idx}>{mode}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* 쿠버네티스 네트워킹 */}
                {data.networking && (
                  <div className="kubernetes-feature-card">
                    <h4>네트워킹</h4>
                    <div className="kubernetes-feature-content">
                      <h5>서비스 타입</h5>
                      {data.networking.serviceTypes.map((service, idx) => (
                        <p key={idx}><strong>{service.type}:</strong> {service.usage}</p>
                      ))}
                    </div>
                    <div className="kubernetes-feature-content">
                      <h5>Ingress 패턴</h5>
                      <ul>
                        {data.networking.ingress.patterns.map((pattern, idx) => (
                          <li key={idx}>{pattern}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* 쿠버네티스 스토리지 */}
                {data.storage && (
                  <div className="kubernetes-feature-card">
                    <h4>스토리지</h4>
                    <div className="kubernetes-feature-content">
                      <h5>스토리지 타입</h5>
                      {data.storage.types.map((type, idx) => (
                        <p key={idx}><strong>{type.name}:</strong> {type.description}</p>
                      ))}
                    </div>
                    <div className="kubernetes-feature-content">
                      <h5>프로비저닝</h5>
                      <p><strong>Static:</strong> {data.storage.provisioning.static}</p>
                      <p><strong>Dynamic:</strong> {data.storage.provisioning.dynamic}</p>
                    </div>
                  </div>
                )}

                {/* 쿠버네티스 모니터링 */}
                {data.monitoring && (
                  <div className="kubernetes-feature-card">
                    <h4>모니터링</h4>
                    <div className="kubernetes-feature-content">
                      <h5>메트릭</h5>
                      <p><strong>도구:</strong> {data.monitoring.stack.metrics.tools.join(', ')}</p>
                      <ul>
                        {data.monitoring.stack.metrics.metrics.map((metric, idx) => (
                          <li key={idx}>{metric}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="kubernetes-feature-content">
                      <h5>로깅</h5>
                      <p><strong>도구:</strong> {data.monitoring.stack.logging.tools.join(', ')}</p>
                      <ul>
                        {data.monitoring.stack.logging.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 오른쪽: 명령어 가이드 */}
            <CommandSection data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContainerSection;