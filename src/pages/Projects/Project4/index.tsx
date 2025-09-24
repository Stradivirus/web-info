import React from 'react';
import ProjectDetail from '../../../components/ProjectDetail';
import { projectData } from './data';

const Project4: React.FC = () => {
  return <ProjectDetail {...projectData} />;
};

export default Project4;