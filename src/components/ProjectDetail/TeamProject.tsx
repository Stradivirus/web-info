import React, { useState } from 'react';
import IndividualProject from './IndividualProject';
import type { ProjectData } from '../../types/types';

type TeamProjectProps = Partial<ProjectData> & {
  title: string;
  period: string;
  description: string;
  issues?: any[];
  layoutStyle?: 'default' | 'wide';

  // Components for team tabs
  TeamPartsComponent?: React.ReactNode;
  MyPartComponent?: React.ReactNode;
};

const TeamProject: React.FC<TeamProjectProps> = (props) => {
  const [activeTab, setActiveTab] = useState('main');

  const {
    TeamPartsComponent,
    MyPartComponent,
    ...individualProjectProps
  } = props;

  const getTabButtonClass = (active: boolean) =>
    `px-4 md:px-6 py-3 cursor-pointer border-b-[3px] transition-all duration-300 ${
      active
        ? 'bg-[#e0f7fa] border-[#007bff] font-bold text-[#0056b3]'
        : 'bg-transparent border-transparent font-normal text-[#333] hover:bg-gray-100'
    }`;

  return (
    <div>
      <div className="flex flex-wrap gap-0 mb-6 border-b-2 border-gray-200 justify-center">
        <button
          className={getTabButtonClass(activeTab === 'main')}
          onClick={() => setActiveTab('main')}
        >
          메인
        </button>
        <button
          className={getTabButtonClass(activeTab === 'team')}
          onClick={() => setActiveTab('team')}
        >
          팀원별 개발 파트
        </button>
        <button
          className={getTabButtonClass(activeTab === 'me')}
          onClick={() => setActiveTab('me')}
        >
          내가 개발한 부분
        </button>
      </div>

      {activeTab === 'main' && <IndividualProject {...individualProjectProps} />}
      {activeTab === 'team' && TeamPartsComponent}
      {activeTab === 'me' && MyPartComponent}
    </div>
  );
};

export default TeamProject;
