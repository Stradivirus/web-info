import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const GitSection = ({ title, data, isExpanded, onToggle }) => {
  const renderGitOverview = () => {
    const { introduction, workflow, basicCommands, advancedCommands } = data;
    
    return (
      <div className="git-overview-container">
        {/* 왼쪽: 개념 섹션 */}
        <div className="git-overview-content">
          <div className="git-overview-card">
            <h3 className="git-card-title">{introduction.definition.title}</h3>
            <p className="git-card-description">{introduction.definition.description}</p>

            <div className="git-features">
              <h4 className="git-subtitle">주요 특징</h4>
              <ul className="git-list">
                {introduction.definition.keyFeatures.map((feature, index) => (
                  <li key={index} className="git-list-item">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="git-advantages">
              <h4 className="git-subtitle">장점</h4>
              {introduction.advantages.map((advantage, index) => (
                <div key={index} className="git-advantage-item">
                  <h5 className="git-item-title">{advantage.title}</h5>
                  <p>{advantage.description}</p>
                </div>
              ))}
            </div>

            <div className="git-workflow">
              <h4 className="git-subtitle">기본 워크플로우</h4>
              <div className="git-steps">
                {workflow.basicWorkflow.steps.map((step, index) => (
                  <div key={index} className="git-step-item">
                    <span className="git-step-number">{index + 1}</span>
                    <span className="git-step-text">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽: 명령어 섹션 */}
        <div className="git-commands-content">
          <div className="git-commands-card">
            <section className="git-commands-basic">
              <h3 className="git-card-title">기본 명령어</h3>
              {Object.entries(basicCommands).map(([category, commands]) => (
                <div key={category} className="git-command-group">
                  <h4 className="git-subtitle">{category}</h4>
                  {Object.entries(commands).map(([name, details]) => (
                    <div key={name} className="git-command-item">
                      <code className="git-command-code">{details.command}</code>
                      <p className="git-command-desc">{details.description}</p>
                      {details.variations && (
                        <div className="git-command-variations">
                          {details.variations.map((variation, idx) => (
                            <div key={idx} className="git-command-variant">
                              <code className="git-command-code variant">{variation.command}</code>
                              <span className="git-command-desc">{variation.description}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </section>

            <section className="git-commands-advanced">
              <h3 className="git-card-title">고급 명령어</h3>
              {Object.entries(advancedCommands).map(([name, details]) => (
                <div key={name} className="git-command-item">
                  <code className="git-command-code">{details.command}</code>
                  <p className="git-command-desc">{details.description}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    );
  };

  const renderGitWorkflow = () => {
    const { branchStrategy } = data;
    
    return (
      <div className="git-workflow-container">
        <div className="git-branches-content">
          {/* 메인 브랜치 섹션 */}
          <div className="git-main-branches">
            <h3 className="git-card-title">메인 브랜치</h3>
            <div className="git-branch-grid">
              {Object.entries(branchStrategy.mainBranches).map(([name, info]) => (
                <div key={name} className="git-branch-card">
                  <h4 className="git-subtitle">{name}</h4>
                  <p className="git-card-description">{info.description}</p>
                  <div className="git-branch-rules">
                    <h5 className="git-item-title">규칙</h5>
                    <ul className="git-list">
                      {info.rules.map((rule, index) => (
                        <li key={index} className="git-list-item">{rule}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 기능 브랜치 섹션 */}
          <div className="git-feature-branches">
            <h3 className="git-card-title">기능 브랜치</h3>
            <div className="git-branch-grid">
              {Object.entries(branchStrategy.featureBranches).map(([type, info]) => (
                <div key={type} className="git-branch-card">
                  <h4 className="git-subtitle">{info.namingConvention}</h4>
                  <p className="git-card-description">{info.description}</p>
                  <div className="git-branch-workflow">
                    <h5 className="git-item-title">작업 순서</h5>
                    <ol className="git-ordered-list">
                      {info.workflow.map((step, index) => (
                        <li key={index} className="git-list-item">{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderVersionManagement = () => {
    const { semanticVersioning } = data;
    
    return (
      <div className="git-version-container">
        <div className="git-version-content">
          <h3 className="git-card-title">시맨틱 버저닝</h3>
          <div className="git-version-grid">
            {Object.entries(semanticVersioning.structure).map(([type, info]) => (
              <div key={type} className="git-version-card">
                <h4 className="git-subtitle">{type} ({info.increment})</h4>
                <p className="git-card-description">{info.description}</p>
                <div className="git-version-examples">
                  <h5 className="git-item-title">예시</h5>
                  <ul className="git-list">
                    {info.examples.map((example, index) => (
                      <li key={index} className="git-list-item">{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderGitAutomation = () => {
    const { cicd } = data;
    
    return (
      <div className="git-automation-container">
        <div className="git-environments-grid">
          {Object.entries(cicd.environments).map(([env, info]) => (
            <div key={env} className="git-environment-card">
              <h3 className="git-card-title">{env}</h3>
              <p className="git-card-description">{info.description}</p>
              <div className="git-pipeline-content">
                <h4 className="git-subtitle">파이프라인</h4>
                {info.pipeline.map((stage, index) => (
                  <div key={index} className="git-pipeline-stage">
                    <h5 className="git-item-title">{stage.stage}</h5>
                    <ul className="git-list">
                      {stage.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="git-list-item">{step}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="git-section">
      <button 
        className={`git-section-button ${isExpanded ? 'expanded' : ''}`}
        onClick={onToggle}
      >
        <div className="git-button-content">
          <span>{title}</span>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      {isExpanded && (
        <div className="git-section-content">
          {title === "Git 개요" && renderGitOverview()}
          {title === "Git 워크플로우" && renderGitWorkflow()}
          {title === "버전 관리" && renderVersionManagement()}
          {title === "Git 자동화" && renderGitAutomation()}
        </div>
      )}
    </div>
  );
};

export default GitSection;