import { teamMembers } from '../../../pages/TeamProject/TP1/teamMembers';
import { TeamByRole } from './TeamByRole.jsx';

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
