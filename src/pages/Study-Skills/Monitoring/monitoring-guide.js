import React, { useState } from 'react';
import guideData from './json/selection-guide.json';

const MonitoringGuide = () => {
  const [activeCategory, setActiveCategory] = useState('by_scale');

  const categories = {
    by_scale: '규모별 선택',
    by_focus: '기능별 선택',
    by_environment: '환경별 선택',
    by_expertise: '전문성별 선택',
    by_budget: '예산별 선택'
  };

  const renderGuideContent = (category) => {
    const data = guideData.selection_guide[category];
    
    return (
      <div className="monitoring-guide-content">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="monitoring-guide-item">
            <h4 className="monitoring-guide-category">{key}</h4>
            {typeof value === 'string' ? (
              <p>{value}</p>
            ) : value.recommendation ? (
              <div>
                <p><strong>추천: </strong>
                  {Array.isArray(value.recommendation) 
                    ? value.recommendation.join(', ') 
                    : value.recommendation}
                </p>
                <p><strong>이유: </strong>{value.reason}</p>
                {value.considerations && (
                  <div>
                    <p><strong>고려사항:</strong></p>
                    <ul>
                      {value.considerations.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {value.alternatives && (
                  <p><strong>대안: </strong>{value.alternatives.join(', ')}</p>
                )}
              </div>
            ) : value.primary ? (
              <div>
                <p><strong>주 추천: </strong>{value.primary}</p>
                <p><strong>사용 시기: </strong>{value.use_when}</p>
                <p><strong>이유: </strong>{value.reason}</p>
              </div>
            ) : (
              <div>
                <p><strong>추천: </strong>
                  {Array.isArray(value) ? value.join(', ') : value}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="monitoring-guide-wrapper">
      <div className="monitoring-guide-tabs">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            className={`monitoring-guide-tab ${activeCategory === key ? 'active' : ''}`}
            onClick={() => setActiveCategory(key)}
          >
            {label}
          </button>
        ))}
      </div>
      
      <div className="monitoring-guide-main">
        <h3 className="monitoring-guide-title">{categories[activeCategory]}</h3>
        {renderGuideContent(activeCategory)}
      </div>
    </div>
  );
};

export default MonitoringGuide;