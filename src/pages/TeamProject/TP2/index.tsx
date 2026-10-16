import React from 'react';
import ProjectDetail from '../../../components/ProjectDetail';
import { projectData } from './data';
import { teamMembers, groupCollaborations } from './teamMembers';
import { TeamParts } from '../../../components/ProjectDetail';
import { MyPartTP2 } from '../../../components/ProjectDetail/teamp/MyPartTP2';

const Team2: React.FC = () => {
  return (
    <div>
      <ProjectDetail
        {...projectData}
        isTeamProject={true}
        TeamPartsComponent={<TeamParts members={teamMembers} collaborations={groupCollaborations} />}
        MyPartComponent={<MyPartTP2 />}
      />
    </div>
  );
};

export default Team2;