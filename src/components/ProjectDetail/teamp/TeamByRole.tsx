import React from 'react';

type Member = {
  id: string;
  name: string;
  role: string;
};

type Collaboration = {
  groupName: string;
  memberIds: string[];
  collaborations: string[];
  achievements: string[];
};

type TeamByRoleProps = {
  members?: Member[];
  collaborations?: Collaboration[];
};

export const TeamByRole: React.FC<TeamByRoleProps> = ({ members = [], collaborations = [] }) => {
  // 그룹명 기준으로 팀원 매핑 (ID 기반)
  const groupMap: Record<string, { members: Member[]; collab: Collaboration }> = {};
  collaborations.forEach(collab => {
    groupMap[collab.groupName] = {
      members: collab.memberIds.map(id => {
        // memberIds에서 해당 ID의 멤버 객체 찾기
        return members.find(m => m.id === id);
      }).filter(Boolean) as Member[],
      collab
    };
  });

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">역할별 팀 구성 및 협업</h2>
      <div className="flex flex-col gap-6">
        {Object.entries(groupMap).map(([groupName, { members: groupMembers, collab }]) => (
          <div
            key={groupName}
            className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
          >
            <h3 className="text-gray-800 mb-3 text-lg font-bold border-b-2 border-blue-500 pb-2">
              {groupName}
            </h3>
            {/* 팀원 목록 */}
            <div className="mb-4">
              {groupMembers.map((member, idx) => (
                <div key={member.id || idx} className="mb-2">
                  <div className="font-bold text-gray-700">
                    {member.name}
                  </div>
                  <div className="text-sm text-gray-500 mt-0.5">
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
            {/* 협업 내용 */}
            <div>
              <h4 className="text-emerald-600 text-base mb-2 font-semibold">
                주요 협업 내용
              </h4>
              <ul className="mb-3 pl-4 list-disc space-y-1">
                {collab.collaborations.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
              <h4 className="text-red-600 text-base mb-2 font-semibold">
                주요 성과
              </h4>
              <ul className="m-0 pl-4 list-disc space-y-1">
                {collab.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600 leading-snug">
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