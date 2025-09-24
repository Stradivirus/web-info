import React from 'react';

const LineBreak = ({ text }) => {
  return (
    <>{text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))}</>
  );
};

const ProjectContent = ({ 
  techStack = [],
  objectives = [],
  features = [],
  process = "",
  techDetails = [],
  issues = [],
  improvements = "",
  reflection = "",
  layoutStyle = 'default'
}) => {
  return (
    <div className="overview-container">
      <div className={`details ${layoutStyle === 'wide' ? 'details-wide' : ''}`}>
        <div className="content-box">
          {techStack.length > 0 && (
            <div className="tags">
              {techStack.map((tech, index) => (
                <span key={index} className="tag">{tech}</span>
              ))}
            </div>
          )}

          {objectives.length > 0 && (
            <div className="content-section">
              <h2>제작 목표</h2>
              <ul className="feature-list">
                {objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
          )}

          {features.length > 0 && (
            <div className="content-section">
              <h2>주요 기능</h2>
              <ul className="feature-list">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {process && (
            <div className="content-section">
              <h2>개발 과정</h2>
              <p><LineBreak text={process} /></p>
            </div>
          )}

          {techDetails.length > 0 && (
            <div className="content-section">
              <h2>사용 기술</h2>
              <div className="tech-details">
                {techDetails.map((category, index) => (
                  <div key={index} className="tech-category">
                    <h3>{category.title}</h3>
                    <ul>
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {issues && issues.length > 0 && (
            <div className="content-section">
              <h2>Project Issues</h2>
              <div className="issues-grid">
                {issues.map((issue, index) => (
                  <div key={index} className="issue-card">
                    <h3>{issue.title}</h3>
                    <p className="issue-problem">문제: {issue.problem}</p>
                    <p className="issue-solution">해결: {issue.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {improvements && (
            <div className="content-section">
              <h2>개선점 및 향후 계획</h2>
              <p><LineBreak text={improvements} /></p>
            </div>
          )}

          {reflection && (
            <div className="content-section">
              <h2>기술적 도전과 성과</h2>
              <p><LineBreak text={reflection} /></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
