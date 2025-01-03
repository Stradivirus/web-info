// DevOpsComponents.js
import { ChevronDown, ChevronUp } from 'lucide-react';

// 특징 목록 렌더링 컴포넌트
export const renderFeatureList = (items, type) => (
  <div className="devops-feature-list">
    {items.map((item, idx) => (
      <div key={idx} className={`devops-feature-item ${type}`}>
        <h5>{item.title}</h5>
        <ul>
          {item.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

// 가격 정책 렌더링 컴포넌트
export const renderPricingSection = (pricing) => {
  if (!pricing) return null;
  return (
    <>
      <h4>가격 정책</h4>
      <div className="devops-pricing-list">
        {pricing.plans.map((plan, idx) => (
          <div key={idx} className="devops-pricing-item">
            <h5>{plan.name}</h5>
            <p className="devops-pricing-cost">{plan.cost}</p>
            <ul className="devops-pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

// 기본 섹션 레이아웃
export const renderSectionLayout = (tool, expandedTool, setExpandedTool, renderContent) => (
    <div className="devops-container"> {/* 이 클래스 추가 */}
      <div className="devops-section">
        <button 
          className={`devops-section-button ${expandedTool === tool.id ? 'expanded' : ''}`}
          onClick={() => setExpandedTool(expandedTool === tool.id ? null : tool.id)}
        >
          <div className="devops-button-content">
            <div className="devops-button-left">
              <h3>{tool.data.name}</h3>
              <p className="devops-subtitle">{tool.data.description}</p>
            </div>
            {expandedTool === tool.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </button>
        
        {expandedTool === tool.id && renderContent(tool.data)}
      </div>
    </div>
  );