import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DatabaseSection = ({ name, subtitle, data, isExpanded, onToggle }) => {
  if (!data) return null;

  return (
    <div className="database-section">
      <button 
        className={`database-section-button ${isExpanded ? 'expanded' : ''}`}
        onClick={onToggle}
      >
        <div className="database-button-content">
          <div className="database-button-left">
            <h3>{name}</h3>
            <p className="database-subtitle">{subtitle}</p>
          </div>
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      {isExpanded && data && (
        <div className="database-section-content">
          <div className="database-content-grid">
            {/* 왼쪽: 데이터베이스 정보 */}
            <div className="database-feature-section">
              <div className="database-feature-card">
                {/* 주요 특징 */}
                <h4>주요 특징</h4>
                <div className="database-feature-list">
                  {data.mainFeatures.map((feature, idx) => (
                    <div key={idx} className="database-feature-item">
                      <h5>{feature.title}</h5>
                      <ul>
                        {feature.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* 장점 */}
                <h4>장점</h4>
                <div className="database-feature-list">
                  {data.advantages.map((advantage, idx) => (
                    <div key={idx} className="database-feature-item">
                      <h5 className="advantage-title">{advantage.title}</h5>
                      <ul>
                        {advantage.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* 단점 */}
                <h4>단점</h4>
                <div className="database-feature-list">
                  {data.disadvantages.map((disadvantage, idx) => (
                    <div key={idx} className="database-feature-item">
                      <h5 className="disadvantage-title">{disadvantage.title}</h5>
                      <ul>
                        {disadvantage.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Atlas 섹션 */}
                {data.atlas && (
                  <div className="database-atlas-section">
                    <h4>MongoDB Atlas</h4>
                    <p className="database-atlas-description">{data.atlas.description}</p>
                    
                    {/* Atlas 장점 */}
                    <div className="database-atlas-advantages">
                      <h4 className="database-atlas-title">Atlas 장점</h4>
                      {data.atlas.advantages.map((adv, idx) => (
                        <div key={idx} className="database-feature-item">
                          <h5 className="advantage-title">{adv.title}</h5>
                          <ul>
                            {adv.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Atlas 단점 */}
                    <div className="database-atlas-disadvantages">
                      <h4 className="database-atlas-title">Atlas 단점</h4>
                      {data.atlas.disadvantages.map((disadv, idx) => (
                        <div key={idx} className="database-feature-item">
                          <h5 className="disadvantage-title">{disadv.title}</h5>
                          <ul>
                            {disadv.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Atlas 가격 정책 */}
                    <div className="database-atlas-pricing">
                      <h4 className="database-atlas-title">가격 정책</h4>
                      {data.atlas.pricing.tiers.map((tier, idx) => (
                        <div key={idx} className="database-feature-item">
                          <h5>{tier.name}</h5>
                          <ul>
                            {tier.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 활용 사례 */}
                {data.useCases && (
                  <div className="database-usecase-section">
                    <h4>활용 사례</h4>
                    <div className="database-feature-list">
                      {data.useCases.examples.map((useCase, idx) => (
                        <div key={idx} className="database-feature-item">
                          <h5>{useCase.title}</h5>
                          <p>{useCase.details}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="database-suitability-section">
                      <div className="database-suitable">
                        <h5>적합한 경우</h5>
                        <ul>
                          {data.useCases.suitable.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="database-unsuitable">
                        <h5>부적합한 경우</h5>
                        <ul>
                          {data.useCases.unsuitable.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 오른쪽: 명령어 가이드 */}
            <div className="database-usecase-section">
              <div className="database-usecase-card">
                <h4>명령어 가이드</h4>
                <div className="database-usecase-grid">
                  {/* 기본 명령어 */}
                  {data.commandGuide && data.commandGuide.basic && (
                    data.commandGuide.basic.commands.map((cmd, index) => (
                      <div key={index} className="database-usecase-item">
                        <h5>{cmd.category}</h5>
                        <div className="database-command-code">
                          {cmd.examples.map((example, i) => (
                            <code key={i}>{example}</code>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                  
                  {/* CRUD 명령어 */}
                  {data.commandGuide && data.commandGuide.crud && (
                    data.commandGuide.crud.operations.map((op, index) => (
                      <div key={index} className="database-usecase-item">
                        <h5>{op.category}</h5>
                        <div className="database-command-code">
                          {op.examples.map((example, i) => (
                            <code key={i}>{example}</code>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                  
                  {/* 고급 기능 */}
                  {data.commandGuide && data.commandGuide.advanced && (
                    data.commandGuide.advanced.features.map((feature, index) => (
                      <div key={index} className="database-usecase-item">
                        <h5>{feature.category}</h5>
                        <div className="database-command-code">
                          {feature.examples.map((example, i) => (
                            <code key={i}>{example}</code>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatabaseSection;