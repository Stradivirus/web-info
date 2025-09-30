import React, { useState } from 'react';
import IndividualProject from './IndividualProject';
import './styles/ProjectDetail.base.css';
import './styles/ProjectDetail.media.css';
import './styles/ProjectDetail.responsive.css';
import './styles/MediaModal.css';



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

type TeamProjectProps = {
  // Props for IndividualProject
  title: string;
  period: string;
  description: string;
  overview?: any;
  techStack?: string[];
  objectives?: string[];
  features?: string[];
  process?: string;
  techDetails?: any[];
  issues?: string[];
  improvements?: string;
  reflection?: string;
  media?: any[];
  links?: any;
  layoutStyle?: string;

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
