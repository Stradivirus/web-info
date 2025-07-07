import React from 'react';
import { teamMembers } from '../../../pages/TeamProject/TP1/teamMembers';

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

export const MyPart = () => (
  <div className="content-box">
    <h2>내가 개발한 부분</h2>
    <p>여기에 본인이 담당한 기능 및 상세 설명을 작성해 주세요.</p>
  </div>
);
