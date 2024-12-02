import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MessageQueueSection = ({ name, subtitle, data, isExpanded, onToggle }) => {
  return (
    <div className="database-section">
      <button 
        className={`database-section-button ${isExpanded ? 'expanded' : ''}`}
        onClick={() => onToggle(name)}
      >
        <div className="database-button-content">
          <div className="database-button-left">
            <h3>{name}</h3>
            <p className="database-subtitle">{subtitle}</p>
          </div>
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      {isExpanded && (
        <div className="database-section-content">
          <div className="database-content-grid">
            <div className="database-feature-section">
              <div className="database-feature-card">
                <h4>장점</h4>
                <div className="database-feature-list">
                  {data.advantages.map((advantage, index) => (
                    <div key={index} className="database-feature-item">
                      <h5>{advantage.title}</h5>
                      <ul>
                        {advantage.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <h4>단점</h4>
                <div className="database-feature-list">
                  {data.disadvantages.map((disadvantage, index) => (
                    <div key={index} className="database-feature-item">
                      <h5>{disadvantage.title}</h5>
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

            <div className="database-usecase-section">
              <div className="database-usecase-card">
                <h4>활용 사례</h4>
                <div className="database-usecase-grid">
                  {data.useCases.examples.map((useCase, index) => (
                    <div key={index} className="database-usecase-item">
                      <h5>{useCase.title}</h5>
                      <p>{useCase.details}</p>
                    </div>
                  ))}
                </div>

                <div className="database-suitability-section">
                  <div className="database-suitable">
                    <h5>적합한 경우</h5>
                    <ul>
                      {data.useCases.suitable.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="database-unsuitable">
                    <h5>부적합한 경우</h5>
                    <ul>
                      {data.useCases.unsuitable.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {data.clusteringInfo && (
            <div className="database-cluster-section">
              <div className="database-cluster-card">
                <h4>클러스터링</h4>
                <p>{data.clusteringInfo.description}</p>
                <div className="database-cluster-details">
                  <h5>클러스터 구성의 장점</h5>
                  <ul>
                    {data.clusteringInfo.advantages.map((adv, index) => (
                      <li key={index}>{adv}</li>
                    ))}
                  </ul>
                  <h5>주요 설정</h5>
                  <ul>
                    {data.clusteringInfo.configurations.map((conf, index) => (
                      <li key={index}>{conf}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MessageQueueSection;