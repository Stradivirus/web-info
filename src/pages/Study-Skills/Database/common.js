import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const SectionHeader = ({ name, subtitle, isExpanded, onToggle }) => (
  <button 
    className="database-section-button"
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
);

export const FeatureCard = ({ title, items }) => (
    <div className="database-feature-card">
      <h4>{title}</h4>
      <div className="database-feature-list">
        {items?.map((item, index) => (
          <div key={index} className="database-feature-item">
            <h5 className={
              title === "장점" ? "advantage-title" : 
              title === "단점" ? "disadvantage-title" : ""
            }>{item.title}</h5>
            <ul>
              {item.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

export const UseCaseSection = ({ examples, suitable, unsuitable }) => (
  <div className="database-usecase-section">
    <div className="database-usecase-card">
      <h4>활용 사례</h4>
      <div className="database-usecase-grid">
        {examples?.map((useCase, index) => (
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
            {suitable?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="database-unsuitable">
          <h5>부적합한 경우</h5>
          <ul>
            {unsuitable?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const ClusteringSection = ({ info }) => (
    <div className="database-cluster-section">
      <h3>클러스터링</h3>
      <p>{info.description}</p>
      <div className="database-cluster-details">
        <h5>클러스터 구성의 장점</h5>
        <ul>
          {info.advantages?.map((adv, index) => (
            <li key={index}>{adv}</li>
          ))}
        </ul>
        <h5>주요 설정</h5>
        <ul>
          {info.configurations?.map((conf, index) => (
            <li key={index}>{conf}</li>
          ))}
        </ul>
      </div>
    </div>
  );

export const ContentSection = ({ type, name, subtitle, data, isExpanded, onToggle }) => {
  if (!data) return null;

  return (
    <div className="database-section">
      <SectionHeader 
        name={name}
        subtitle={subtitle}
        isExpanded={isExpanded}
        onToggle={onToggle}
      />
      
      {isExpanded && (
        <div className="database-section-content">
          <div className="database-content-grid">
            {/* 왼쪽: 특징 정보 */}
            <div className="database-feature-section">
              {type === 'database' && data.mainFeatures && (
                <FeatureCard title="주요 특징" items={data.mainFeatures} />
              )}
              <FeatureCard title="장점" items={data.advantages} />
              <FeatureCard title="단점" items={data.disadvantages} />
              
              {/* Atlas 섹션 (데이터베이스 타입이고 atlas 데이터가 있는 경우만) */}
              {type === 'database' && data.atlas && (
                <div className="database-atlas-section">
                  <h4>MongoDB Atlas</h4>
                  <p className="database-atlas-description">{data.atlas.description}</p>
                  <FeatureCard title="Atlas 장점" items={data.atlas.advantages} />
                  <FeatureCard title="Atlas 단점" items={data.atlas.disadvantages} />
                  <div className="database-atlas-pricing">
                    <h4>가격 정책</h4>
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
            </div>

            {/* 오른쪽: 활용 사례 또는 명령어 가이드 */}
            <div className="database-right-section">
              {type === 'database' && data.commandGuide ? (
                <div className="database-usecase-card">
                  <h4>명령어 가이드</h4>
                  <div className="database-usecase-grid">
                    {/* 기본 명령어 */}
                    {data.commandGuide.basic?.commands.map((cmd, index) => (
                      <div key={index} className="database-usecase-item">
                        <h5>{cmd.category}</h5>
                        <div className="database-command-code">
                          {cmd.examples.map((example, i) => (
                            <code key={i}>{example}</code>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    {/* CRUD 명령어 */}
                    {data.commandGuide.crud?.operations.map((op, index) => (
                      <div key={index} className="database-usecase-item">
                        <h5>{op.category}</h5>
                        <div className="database-command-code">
                          {op.examples.map((example, i) => (
                            <code key={i}>{example}</code>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <UseCaseSection 
                  examples={data.useCases.examples}
                  suitable={data.useCases.suitable}
                  unsuitable={data.useCases.unsuitable}
                />
              )}
            </div>
          </div>

          {/* 클러스터링 정보 (있는 경우만) */}
          {data.clusteringInfo && (
            <ClusteringSection info={data.clusteringInfo} />
          )}
        </div>
      )}
    </div>
  );
};