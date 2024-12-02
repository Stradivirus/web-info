import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const LanguageSection = ({ language, data, isExpanded, onToggle }) => {
  return (
    <div className="language-section">
      <button 
        className={`language-button ${isExpanded ? 'expanded' : ''}`}
        onClick={() => onToggle(language)}
      >
        <div className="button-content">
          <span>{language}</span>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      {isExpanded && (
        <div className="language-content">
          <div className="content-grid">
            <div className="overview-section">
              <div className="section-card">
                <h3>개요 및 특징</h3>
                <h4 className="advantages">장점</h4>
                <div className="feature-list">
                  {data.advantages.map((advantage, index) => (
                    <div key={index} className="feature-item">
                      <h5>{advantage.title}</h5>
                      {advantage.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  ))}
                </div>
                <h4 className="disadvantages">단점</h4>
                <div className="feature-list">
                  {data.disadvantages.map((disadvantage, index) => (
                    <div key={index} className="feature-item">
                      <h5>{disadvantage.title}</h5>
                      {disadvantage.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  ))}
                </div>

                <h4>사용 사례</h4>
                <div className="use-cases-grid">
                  {data.useCases.examples.map((useCase, index) => (
                    <div key={index} className="use-case-category">
                      <h5 className="use-case-title">{useCase.title}</h5>
                      <p>{useCase.details}</p>
                    </div>
                  ))}
                </div>

                <h4>사용이 적합한 경우</h4>
                <ul>
                  {data.useCases.suitable.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4>사용이 부적합한 경우</h4>
                <ul>
                  {data.useCases.unsuitable.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="frameworks-section">
              <div className="section-card">
                <h3>주요 프레임워크</h3>
                <div className="frameworks-grid">
                  {data.frameworks.map((framework, index) => (
                    <div key={index} className="framework-card">
                      <h4>{framework.name}</h4>
                      <div className="framework-details">
                        <div className="pros">
                          <h5>장점</h5>
                          <ul>
                            {framework.advantages.map((adv, idx) => (
                              <li key={idx}>{adv}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="cons">
                          <h5>단점</h5>
                          <ul>
                            {framework.disadvantages.map((dis, idx) => (
                              <li key={idx}>{dis}</li>
                            ))}
                          </ul>
                        </div>
                        {framework.bestFor && (
                          <div className="best-for">
                            <h5>적합한 프로젝트</h5>
                            <ul>
                              {framework.bestFor.map((best, idx) => (
                                <li key={idx}>{best}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSection;