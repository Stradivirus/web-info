import React from 'react';
import ProjectDetail from '../../../components/common/ProjectDetail';
import { projectData } from './data';
import { teamMembers } from './teamMembers';
import { TeamParts, MyPart } from '../../../components/common/ProjectDetail/TeamPro';

const tabButtonStyle = (active) => ({
  padding: '10px 24px',
  border: 'none',
  borderRadius: '8px 8px 0 0',
  background: active ? '#2563eb' : '#f3f4f6',
  color: active ? '#fff' : '#222',
  fontWeight: 600,
  fontSize: '17px',
  marginRight: '4px',
  cursor: 'pointer',
  transition: 'background 0.2s, color 0.2s',
  outline: 'none',
  boxShadow: active ? '0 -2px 8px #2563eb22' : 'none',
});

const Team1 = () => {
  const [activeTab, setActiveTab] = React.useState('main');
  return (
    <div>
      <ProjectDetail
        {...projectData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabButtonStyle={tabButtonStyle}
        TeamPartsComponent={<TeamParts members={teamMembers} />}
        MyPartComponent={<MyPart />}
      />
    </div>
  );
};

export default Team1;