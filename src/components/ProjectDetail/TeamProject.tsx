import React, { useState } from 'react';
import IndividualProject from './IndividualProject';
import './styles/ProjectDetail.base.css';
import './styles/ProjectDetail.media.css';
import './styles/ProjectDetail.responsive.css';
import './styles/MediaModal.css';



import type { ProjectData } from '../../types/types';

const tabButtonStyle = (active: boolean): React.CSSProperties => ({
  padding: '12px 24px',
  cursor: 'pointer',
  backgroundColor: active ? '#e0f7fa' : 'transparent',
  border: 'none',
  borderBottom: active ? '3px solid #007bff' : '3px solid transparent',
  fontWeight: active ? 'bold' : 'normal',
  color: active ? '#0056b3' : '#333',
  transition: 'all 0.3s ease',
});

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

  return (
    <div>
      <div style={{ display: 'flex', gap: 0, marginBottom: '24px', borderBottom: '2px solid #e5e7eb', justifyContent: 'center' }}>
        <button
          style={tabButtonStyle(activeTab === 'main')}
          onClick={() => setActiveTab('main')}
        >
          메인
        </button>
        <button
          style={tabButtonStyle(activeTab === 'team')}
          onClick={() => setActiveTab('team')}
        >
          팀원별 개발 파트
        </button>
        <button
          style={tabButtonStyle(activeTab === 'me')}
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
