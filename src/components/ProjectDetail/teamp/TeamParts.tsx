import React from 'react';
import { teamMembers } from '../../../pages/TeamProject/TP1/teamMembers';
import { TeamByRole } from './TeamByRole';

type Member = {
  id: string;
  name: string;
  role: string;
  parts: string[];
};

type Collaboration = {
  groupName: string;
  memberIds: string[];
  collaborations: string[];
  achievements: string[];
};

type TeamPartsProps = {
  members?: Member[];
  collaborations?: Collaboration[];
};

export const TeamParts: React.FC<TeamPartsProps> = ({
  members = teamMembers,
  collaborations = []
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* 왼쪽: 팀원별 상세 개발 파트 */}
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">팀원별 개발 파트</h2>
      <ul className="p-0 list-none">
        {members.map((member, idx) => (
          <li key={idx} className="mb-6 last:mb-0">
            <strong className="text-gray-800">{member.name}</strong>{' '}
            <span className="text-blue-600 font-medium">({member.role})</span>
            <ul className="mt-2 ml-4 space-y-1">
              {member.parts.map((part, i) => (
                <li key={i} className="text-gray-600 text-[17px]">- {part}</li>
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