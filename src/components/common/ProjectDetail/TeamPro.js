import React from 'react';
import { teamMembers } from '../../../pages/TeamProject/TP1/teamMembers';

export const TeamParts = ({ members = teamMembers }) => (
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
);

export const MyPart = () => (
  <div className="content-box">
    <h2>내가 개발한 부분</h2>
    <p>여기에 본인이 담당한 기능 및 상세 설명을 작성해 주세요.</p>
  </div>
);
