import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const GitSection = ({ title, data, isExpanded, onToggle }) => {
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
          {title === "Git 개요" && (
            <div className="git-overview-grid">
              {/* 왼쪽 패널: 개념 설명 */}
              <div className="git-concept-panel">
                <div className="git-definition-card">
                  <h3>{data.introduction.definition.title}</h3>
                  <p>{data.introduction.definition.description}</p>
                  
                  <div className="git-key-features">
                    <h4>주요 특징</h4>
                    <ul>
                      {data.introduction.definition.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="git-advantages">
                    <h4>장점</h4>
                    {data.introduction.advantages.map((advantage, index) => (
                      <div key={index} className="git-advantage-item">
                        <h5>{advantage.title}</h5>
                        <p>{advantage.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="git-workflow-basics">
                    <h4>기본 워크플로우</h4>
                    <div className="git-workflow-steps">
                      {data.workflow.basicWorkflow.steps.map((step, index) => (
                        <div key={index} className="git-workflow-step">
                          <span className="step-number">{index + 1}</span>
                          <span className="step-description">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 오른쪽 패널: 명령어 */}
              <div className="git-commands-panel">
                <div className="git-commands-container">
                  <h3>기본 명령어</h3>
                  {Object.entries(data.basicCommands).map(([category, commands]) => (
                    <div key={category} className="git-command-category">
                      <h4>{category}</h4>
                      {Object.entries(commands).map(([name, details]) => (
                        <div key={name} className="git-command-item">
                          <code className="git-command">{details.command}</code>
                          <p>{details.description}</p>
                          {details.variations && (
                            <div className="git-command-variations">
                              {details.variations.map((variation, index) => (
                                <div key={index} className="git-command-variation">
                                  <code>{variation.command}</code>
                                  <span>{variation.description}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}

                  <h3>고급 명령어</h3>
                  {Object.entries(data.advancedCommands).map(([name, details]) => (
                    <div key={name} className="git-command-item">
                      <code className="git-command">{details.command}</code>
                      <p>{details.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {title === "Git 워크플로우" && (
            <div className="git-workflow-content">
              <div className="git-branch-strategy">
                <h3>브랜치 전략</h3>
                <div className="git-branches-grid">
                  {/* 메인 브랜치 */}
                  <div className="git-main-branches">
                    <h4>메인 브랜치</h4>
                    {Object.entries(data.branchStrategy.mainBranches).map(([name, info]) => (
                      <div key={name} className="git-branch-card">
                        <h5>{name}</h5>
                        <p>{info.description}</p>
                        <div className="git-branch-rules">
                          <h6>규칙</h6>
                          <ul>
                            {info.rules.map((rule, index) => (
                              <li key={index}>{rule}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 기능 브랜치 */}
                  <div className="git-feature-branches">
                    <h4>기능 브랜치</h4>
                    {Object.entries(data.branchStrategy.featureBranches).map(([type, info]) => (
                      <div key={type} className="git-branch-card">
                        <h5>{info.namingConvention}</h5>
                        <p>{info.description}</p>
                        <div className="git-branch-workflow">
                          <h6>작업 순서</h6>
                          <ol>
                            {info.workflow.map((step, index) => (
                              <li key={index}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {title === "버전 관리" && (
            <div className="git-version-content">
              <div className="git-semantic-versioning">
                <h3>시맨틱 버저닝</h3>
                <div className="git-version-types-grid">
                  {Object.entries(data.semanticVersioning.structure).map(([type, info]) => (
                    <div key={type} className="git-version-card">
                      <h4>{type} ({info.increment})</h4>
                      <p>{info.description}</p>
                      <div className="git-version-examples">
                        <h5>예시</h5>
                        <ul>
                          {info.examples.map((example, index) => (
                            <li key={index}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {title === "Git 자동화" && (
            <div className="git-automation-content">
              <div className="git-environments-grid">
                {Object.entries(data.cicd.environments).map(([env, info]) => (
                  <div key={env} className="git-environment-card">
                    <h3>{env}</h3>
                    <p>{info.description}</p>
                    <div className="git-pipeline">
                      <h4>파이프라인</h4>
                      {info.pipeline.map((stage, index) => (
                        <div key={index} className="git-pipeline-stage">
                          <h5>{stage.stage}</h5>
                          <ul>
                            {stage.steps.map((step, stepIndex) => (
                              <li key={stepIndex}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GitSection;