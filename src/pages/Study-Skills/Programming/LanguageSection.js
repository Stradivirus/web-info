import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const LanguageSection = ({ language, data, isExpanded, onToggle }) => {
  return (
    <div className="programming-language-section">
      <button 
        className={`programming-language-button ${isExpanded ? 'expanded' : ''}`}
        onClick={() => onToggle(language)}
      >
        <div className="programming-button-content">
          <span>{language}</span>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      {isExpanded && (
        <div className="programming-language-content">
          <div className="programming-content-grid">
            <div className="programming-overview-section">
              <div className="programming-section-card">
                <h3>특징</h3>
                <h4 className="programming-advantages">장점</h4>
                <div className="programming-feature-list">
                  {data.advantages.map((advantage, index) => (
                    <div key={index} className="programming-feature-item">
                      <h5>{advantage.title}</h5>
                      {advantage.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  ))}
                </div>
                <h4 className="programming-disadvantages">단점</h4>
                <div className="programming-feature-list">
                  {data.disadvantages.map((disadvantage, index) => (
                    <div key={index} className="programming-feature-item">
                      <h5>{disadvantage.title}</h5>
                      {disadvantage.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  ))}
                </div>

                <h4>사용 사례</h4>
                <div className="programming-use-cases-grid">
                  {data.useCases.examples.map((useCase, index) => (
                    <div key={index} className="programming-use-case-category">
                      <h5 className="programming-use-case-title">{useCase.title}</h5>
                      <p>{useCase.details}</p>
                    </div>
                  ))}
                </div>

                {/* 수정된 적합/부적합 섹션 */}
                <div className="programming-suitability-section">
                  <div className="programming-suitable">
                    <h5>적합한 경우</h5>
                    <ul>
                      {data.useCases.suitable.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="programming-unsuitable">
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
            
            <div className="programming-frameworks-section">
              <div className="programming-section-card">
                <h3>주요 프레임워크</h3>
                <div className="programming-frameworks-grid">
                  {data.frameworks.map((framework, index) => (
                    <div key={index} className="programming-framework-card">
                      <h4>{framework.name}</h4>
                      <div className="programming-framework-details">
                        <div className="programming-pros">
                          <h5>장점</h5>
                          <ul>
                            {framework.advantages.map((adv, idx) => (
                              <li key={idx}>{adv}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="programming-cons">
                          <h5>단점</h5>
                          <ul>
                            {framework.disadvantages.map((dis, idx) => (
                              <li key={idx}>{dis}</li>
                            ))}
                          </ul>
                        </div>
                        {framework.bestFor && (
                          <div className="programming-best-for">
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