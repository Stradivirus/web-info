import React, { useEffect, useState } from 'react';
import prometheusData from './json/prometheus.json';
import elkData from './json/elk.json';
import datadogData from './json/datadog.json';
import splunkData from './json/splunk.json';
import nagiosData from './json/nagios.json';

const MonitoringTools = ({ toolId }) => {
  const [toolData, setToolData] = useState(null);

  useEffect(() => {
    const getToolData = () => {
      const data = {
        prometheus: prometheusData,
        elk: elkData,
        datadog: datadogData,
        splunk: splunkData,
        nagios: nagiosData
      };
      setToolData(data[toolId]);
    };

    getToolData();
  }, [toolId]);

  if (!toolData) return <div>Loading...</div>;

  return (
    <div className="monitoring-section-content">
      <div className="monitoring-content-grid">
        {/* 왼쪽: 특징 및 장단점 */}
        <div className="monitoring-feature-section">
          <div className="monitoring-feature-card">
            {/* 기능 */}
            <h4>주요 기능</h4>
            <div className="monitoring-feature-list">
              {Object.entries(toolData.features).map(([category, items]) => (
                <div key={category} className="monitoring-feature-item">
                  <h5>{category}</h5>
                  <ul>
                    {items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 장점 */}
            <h4>장점</h4>
            <div className="monitoring-feature-list">
              {toolData.advantages.map((advantage, index) => (
                <div key={index} className="monitoring-feature-item">
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
            <div className="monitoring-feature-list">
              {toolData.disadvantages.map((disadvantage, index) => (
                <div key={index} className="monitoring-feature-item">
                  <h5 className="disadvantage-title">{disadvantage.title}</h5>
                  <ul>
                    {disadvantage.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 오른쪽: 사용 사례, 가격 정책, 설치 가이드, 통합 */}
        <div className="monitoring-feature-section">
          <div className="monitoring-feature-card">
            {/* 사용 사례 */}
            <h4>사용 사례</h4>
            <div className="monitoring-feature-list">
              <div className="monitoring-feature-item">
                <ul>
                  {toolData.use_cases.map((useCase, index) => (
                    <li key={index}>{useCase}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 가격 정책 */}
            <h4>가격 정책</h4>
            <div className="monitoring-feature-list">
              <div className="monitoring-feature-item">
                <ul>
                  <li><strong>유형: </strong>{toolData.pricing.type}</li>
                  {toolData.pricing.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 설치 가이드 */}
            {toolData.setup_guide && (
              <>
                <h4>설치 가이드</h4>
                <div className="monitoring-feature-list">
                  <div className="monitoring-feature-item">
                    <h5>기본 단계</h5>
                    <ul>
                      {toolData.setup_guide.basic_steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="monitoring-feature-item">
                    <h5>시스템 요구사항</h5>
                    <div className="monitoring-requirements">
                      <h5>하드웨어:</h5>
                      <ul>
                        <li>CPU: {toolData.setup_guide.requirements.hardware.cpu}</li>
                        <li>메모리: {toolData.setup_guide.requirements.hardware.memory}</li>
                        <li>스토리지: {toolData.setup_guide.requirements.hardware.storage}</li>
                      </ul>
                      
                      <h5>소프트웨어:</h5>
                      <ul>
                        {toolData.setup_guide.requirements.software.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* 통합 */}
            <h4>지원하는 통합</h4>
            <div className="monitoring-feature-list">
              <div className="monitoring-feature-item">
                <ul>
                  {toolData.integrations.map((integration, index) => (
                    <li key={index}>{integration}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringTools;