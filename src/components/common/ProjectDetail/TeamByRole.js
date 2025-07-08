export const TeamByRole = ({ members = [], collaborations = [] }) => {
  // 그룹명 기준으로 팀원 매핑
  const groupMap = {};
  collaborations.forEach(collab => {
    groupMap[collab.groupName] = {
      members: collab.members.map(nameWithRole => {
        // 이름(역할)에서 이름만 추출
        const name = nameWithRole.split(' ')[0];
        // members에서 해당 이름의 멤버 객체 찾기
        return members.find(m => m.name === name);
      }).filter(Boolean),
      collab
    };
  });

  return (
    <div className="content-box">
      <h2>역할별 팀 구성 및 협업</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {Object.entries(groupMap).map(([groupName, { members: groupMembers, collab }]) => (
          <div key={groupName} style={{ 
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
              {groupName}
            </h3>
            {/* 팀원 목록 */}
            <div style={{ marginBottom: '16px' }}>
              {groupMembers.map((member, idx) => (
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
                {collab.collaborations.slice(0, 3).map((item, idx) => (
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
                {collab.achievements.map((achievement, idx) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};
