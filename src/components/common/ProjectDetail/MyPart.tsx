import React, { useState } from 'react';
import { myDevelopmentData } from '../../../pages/TeamProject/TP1/myDevelopmentData';

type CodeSnippet = {
  comment: string;
  code: string[];
};

type Feature = {
  id: string;
  title: string;
  description: string;
  frontend: {
    title: string;
    description: string;
    codeSnippet: CodeSnippet;
  };
  backend: {
    title: string;
    description: string;
    codeSnippet: CodeSnippet;
  };
};

type MyDevelopmentData = {
  features: Feature[];
  challenges: {
    technicalChallenges: string[];
  };
  achievements: {
    results: string;
    learning: string;
  };
};

export const MyPart: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (featureId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  const renderCodeSnippet = (codeSnippet: CodeSnippet) => (
    <div style={{
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      fontSize: '13px',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap'
    }}>
      <div style={{ color: '#64748b', marginBottom: '8px' }}>{codeSnippet.comment}</div>
      {codeSnippet.code.map((line, idx) => (
        <div key={idx} style={{
          marginLeft: line.startsWith('  ') ? '16px' : line.startsWith('    ') ? '32px' : '0px',
          color: '#1f2937'
        }}>
          {line}
        </div>
      ))}
    </div>
  );

  return (
    <div className="content-box">
      {/* 주요 개발 기능 */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{
          color: '#1f2937',
          marginBottom: '16px',
          fontSize: '18px',
          borderLeft: '4px solid #3b82f6',
          paddingLeft: '12px'
        }}>
          주요 개발 기능
        </h3>
        {(myDevelopmentData as MyDevelopmentData).features.map((feature) => {
          const isExpanded = expandedItems[feature.id];
          return (
            <div key={feature.id} style={{ marginBottom: '24px' }}>
              {/* 기능 제목 - 클릭 가능 */}
              <div
                onClick={() => toggleExpand(feature.id)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  marginBottom: '12px'
                }}
              >
                <span style={{
                  marginRight: '8px',
                  fontSize: '14px',
                  transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }}>
                  ▶
                </span>
                <h4 style={{
                  color: '#059669',
                  fontSize: '16px',
                  margin: 0,
                  flex: 1
                }}>
                  {feature.title}
                </h4>
              </div>
              {/* 기능 설명 */}
              <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '16px', lineHeight: '1.5' }}>
                {feature.description}
              </p>
              {/* 접었다 폈다 내용 */}
              {isExpanded && (
                <div style={{
                  marginLeft: '16px',
                  borderLeft: '3px solid #e2e8f0',
                  paddingLeft: '16px'
                }}>
                  {/* 프론트엔드 섹션 */}
                  <div style={{ marginBottom: '24px' }}>
                    <h5 style={{
                      color: '#2563eb',
                      fontSize: '15px',
                      marginBottom: '8px',
                      fontWeight: '600'
                    }}>
                      🎨 {feature.frontend.title}
                    </h5>
                    <p style={{
                      color: '#4b5563',
                      fontSize: '13px',
                      marginBottom: '12px',
                      lineHeight: '1.4'
                    }}>
                      {feature.frontend.description}
                    </p>
                    {renderCodeSnippet(feature.frontend.codeSnippet)}
                  </div>
                  {/* 백엔드 섹션 */}
                  <div style={{ marginBottom: '16px' }}>
                    <h5 style={{
                      color: '#dc2626',
                      fontSize: '15px',
                      marginBottom: '8px',
                      fontWeight: '600'
                    }}>
                      ⚙️ {feature.backend.title}
                    </h5>
                    <p style={{
                      color: '#4b5563',
                      fontSize: '13px',
                      marginBottom: '12px',
                      lineHeight: '1.4'
                    }}>
                      {feature.backend.description}
                    </p>
                    {renderCodeSnippet(feature.backend.codeSnippet)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* 기술적 도전과 해결 */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h4 style={{ color: '#dc2626', fontSize: '16px', marginBottom: '8px' }}>
            🚀 개발 과정동안 구현한 기능
          </h4>
          <ul style={{ margin: '0', padding: '0 0 0 20px', color: '#4b5563', fontSize: '14px' }}>
            {(myDevelopmentData as MyDevelopmentData).challenges.technicalChallenges.map((challenge, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{challenge}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* 프로젝트 성과 */}
      <div>
        <h3 style={{
          color: '#1f2937',
          marginBottom: '16px',
          fontSize: '18px',
          borderLeft: '4px solid #059669',
          paddingLeft: '12px'
        }}>
          프로젝트 성과 및 배운 점
        </h3>
        <div style={{
          backgroundColor: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{
              backgroundColor: '#059669',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              성과
            </span>
            <p style={{ color: '#166534', fontSize: '14px', marginTop: '8px', marginBottom: '0' }}>
              {(myDevelopmentData as MyDevelopmentData).achievements.results}
            </p>
          </div>
          <div>
            <span style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              배운 점
            </span>
            <p style={{ color: '#1e40af', fontSize: '14px', marginTop: '8px', marginBottom: '0' }}>
              {(myDevelopmentData as MyDevelopmentData).achievements.learning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};