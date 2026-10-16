import React from 'react';
import ProjectDetail from '../../../components/ProjectDetail';
import { projectData } from './data';
import { teamMembers, groupCollaborations } from './teamMembers';
import { TeamParts, MyPart } from '../../../components/ProjectDetail';

const Team1: React.FC = () => {
  return (
    <div>
      <ProjectDetail
        {...projectData}
        isTeamProject={true}
        TeamPartsComponent={<TeamParts members={teamMembers} collaborations={groupCollaborations} />}
        MyPartComponent={<MyPart />}
      />
    </div>
  );
};

export default Team1;