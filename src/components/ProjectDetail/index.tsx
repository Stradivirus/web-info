import React from 'react';
import IndividualProject from './IndividualProject';
import TeamProject from './TeamProject';

// Re-export common components and types for other parts of the app to use
export { TeamParts } from './teamp/TeamParts';
export { TeamByRole } from './teamp/TeamByRole';
export { MyPart } from './teamp/MyPart';

type ProjectDetailProps = {
  isTeamProject?: boolean;
  [key: string]: any; // Allow other props to pass through
};

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {
  const { isTeamProject, ...rest } = props;

  if (isTeamProject) {
    return <TeamProject {...rest} />;
  }

  return <IndividualProject {...rest} />;
};

export default ProjectDetail;
