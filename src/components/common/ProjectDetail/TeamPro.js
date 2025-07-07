import React from 'react';
import { teamMembers } from '../../../pages/TeamProject/TP1/teamMembers';
import { myDevelopmentData } from '../../../pages/TeamProject/TP1/myDevelopmentData';

export const TeamParts = ({ members = teamMembers, collaborations = [] }) => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
    gap: '32px'
  }}>
    {/* 왼쪽: 팀원별 상세 개발 파트 */}
    <div className="content-box">
      <h2>팀원별 개발 파트</h2>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {members.map((member, idx) => (
          <li key={idx} style={{ marginBottom: 24 }}>
            <strong>{member.name}</strong> <span style={{ color: '#2563eb', fontWeight: 500 }}>({member.role})</span>
            <ul style={{ marginTop: 8, marginLeft: 16 }}>
              {member.parts.map((part, i) => (
                <li key={i} style={{ color: '#4b5563', fontSize: 17 }}>- {part}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
    
    {/* 오른쪽: 역할별 팀 구성 */}
    <TeamByRole members={members} collaborations={collaborations} />
  </div>
);

// 역할별 팀원 그룹화 컴포넌트
export const TeamByRole = ({ members = teamMembers, collaborations = [] }) => {
  const roleGroups = {
    '프로젝트 관리': [],
    '대시보드 개발': [],
    '데이터 관리': []
  };

  // 협업 내용을 역할별로 매핑
  const collaborationByGroup = {};
  collaborations.forEach(collab => {
    if (collab.groupName === '대시보드 개발 그룹') {
      collaborationByGroup['대시보드 개발'] = collab;
    } else if (collab.groupName === '데이터 관리 그룹') {
      collaborationByGroup['데이터 관리'] = collab;
    } else if (collab.groupName === '소스코드 관리') {
      collaborationByGroup['프로젝트 관리'] = collab;
    }
  });

  members.forEach(member => {
    if (member.role.includes('팀장') || member.role.includes('프로젝트 관리')) {
      roleGroups['프로젝트 관리'].push(member);
    } else if (member.role.includes('대시보드') || member.role.includes('크롤링') || member.role.includes('지표')) {
      roleGroups['대시보드 개발'].push(member);
    } else if (member.role.includes('데이터') || member.role.includes('UI/UX')) {
      roleGroups['데이터 관리'].push(member);
    }
  });

  return (
    <div className="content-box">
      <h2>역할별 팀 구성 및 협업</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {Object.entries(roleGroups).map(([role, teamMembers]) => {
          const collaboration = collaborationByGroup[role];
          return (
            <div key={role} style={{ 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px', 
              padding: '16px',
              backgroundColor: '#f9fafb'
            }}>
              <h3 style={{ 
                color: '#1f2937', 
                marginBottom: '12px', 
                fontSize: '18px',
                borderBottom: '2px solid #3b82f6',
                paddingBottom: '8px'
              }}>
                {role}
              </h3>
              
              {/* 팀원 목록 */}
              <div style={{ marginBottom: '16px' }}>
                {teamMembers.map((member, idx) => (
                  <div key={idx} style={{ marginBottom: '8px' }}>
                    <div style={{ fontWeight: 'bold', color: '#374151' }}>
                      {member.name}
                    </div>
                    <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '2px' }}>
                      {member.role}
                    </div>
                  </div>
                ))}
              </div>

              {/* 협업 내용 */}
              {collaboration && (
                <div>
                  <h4 style={{ 
                    color: '#059669', 
                    fontSize: '16px', 
                    marginBottom: '8px',
                    fontWeight: '600'
                  }}>
                    주요 협업 내용
                  </h4>
                  <ul style={{ margin: '0 0 12px 0', padding: '0 0 0 16px' }}>
                    {collaboration.collaborations.slice(0, 3).map((item, idx) => (
                      <li key={idx} style={{ 
                        fontSize: '14px', 
                        color: '#4b5563', 
                        marginBottom: '4px',
                        lineHeight: '1.4'
                      }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <h4 style={{ 
                    color: '#dc2626', 
                    fontSize: '16px', 
                    marginBottom: '8px',
                    fontWeight: '600'
                  }}>
                    주요 성과
                  </h4>
                  <ul style={{ margin: '0', padding: '0 0 0 16px' }}>
                    {collaboration.achievements.map((achievement, idx) => (
                      <li key={idx} style={{ 
                        fontSize: '14px', 
                        color: '#4b5563', 
                        marginBottom: '4px',
                        lineHeight: '1.4'
                      }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const MyPart = () => {
  const [expandedItems, setExpandedItems] = React.useState({});

  const toggleExpand = (featureId) => {
    setExpandedItems(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  const renderCodeSnippet = (codeSnippet) => (
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
        
        {myDevelopmentData.features.map((feature) => {
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
        <h3 style={{ 
          color: '#1f2937', 
          marginBottom: '16px', 
          fontSize: '18px',
          borderLeft: '4px solid #dc2626',
          paddingLeft: '12px'
        }}>
          개발 과정에서의 기술적 도전과 구현
        </h3>
        
        <div style={{ 
          backgroundColor: '#fef2f2', 
          border: '1px solid #fecaca', 
          borderRadius: '8px', 
          padding: '16px'
        }}>
          <h4 style={{ color: '#dc2626', fontSize: '16px', marginBottom: '8px' }}>
            🚀 구현한 기술적 도전과제
          </h4>
          <ul style={{ margin: '0', padding: '0 0 0 20px', color: '#4b5563', fontSize: '14px' }}>
            {myDevelopmentData.challenges.technicalChallenges.map((challenge, idx) => (
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
              {myDevelopmentData.achievements.results}
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
              학습
            </span>
            <p style={{ color: '#1e40af', fontSize: '14px', marginTop: '8px', marginBottom: '0' }}>
              {myDevelopmentData.achievements.learning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
