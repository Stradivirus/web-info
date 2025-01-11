import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DevToolsSection = ({ 
  toolData, 
  isExpanded, 
  onToggle
}) => {
  return (
    <div className="devtools-section">
      <button 
        className={`devtools-button ${isExpanded ? 'expanded' : ''}`}
        onClick={onToggle}
      >
        <div className="devtools-button-content">
          <div className="devtools-button-text">
            <span className="devtools-name">{toolData.name}</span>
            <span className="devtools-subtitle">{toolData.subTitle}</span>
          </div>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      {isExpanded && (
        <div className="devtools-content">
          <div className="devtools-content-grid">
            {/* 왼쪽 열: 개요, 주요기능, 장단점 */}
            <div className="devtools-main-section">
              <div className="devtools-overview">
                <h3>개요</h3>
                <p className="devtools-description">{toolData.overview.description}</p>
              </div>
              
              <div className="devtools-key-features">
                <h3>주요 기능</h3>
                <ul>
                  {toolData.overview.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="devtools-features">
                <h3 className="devtools-advantages">장점</h3>
                <ul>
                  {toolData.advantages.map((advantage, index) => (
                    <li key={index}>
                      <strong>{advantage.title}</strong>
                      <ul>
                        {advantage.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                <h3 className="devtools-disadvantages">단점</h3>
                <ul>
                  {toolData.disadvantages.map((disadvantage, index) => (
                    <li key={index}>
                      <strong>{disadvantage.title}</strong>
                      <ul>
                        {disadvantage.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 오른쪽 열: 구현정보, 모범사례 */}
            <div className="devtools-sub-section">
              <div className="devtools-implementation">
                <h3>구현 정보</h3>
                <p><strong>호스팅:</strong> {toolData.overview.implementation.hosting.join(', ')}</p>
                <p><strong>가격:</strong> {toolData.overview.implementation.pricing}</p>
                <p><strong>설정:</strong> {toolData.overview.implementation.setup}</p>
              </div>

              <div className="devtools-best-practices">
                <h3>모범 사례</h3>
                <ul>
                  {toolData.overview.bestPractices.map((practice, index) => (
                    <li key={index}>{practice}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevToolsSection;