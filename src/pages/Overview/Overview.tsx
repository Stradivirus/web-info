import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Overview.css';

// 프로젝트 데이터 import
import { projectData as project1Data } from '../Projects/Project1/data';
import { projectData as project3Data } from '../Projects/Project3/data';
import { projectData as project4Data } from '../Projects/Project4/data';
import { projectData as project5Data } from '../Projects/Project5/data';
import { projectData as project8Data } from '../Projects/Project8/data';
import { projectData as TP2Data } from '../TeamProject/TP2/data';

// 다이어그램 이미지 import - Oracle Storage 사용
import { getDiagramImage } from '../../config/storage';

const diagram1 = getDiagramImage('Diagram1.png');
const diagram3 = getDiagramImage('Diagram3.png');
const diagram4 = getDiagramImage('Diagram4.png');
const diagram5 = getDiagramImage('Diagram5.png');
const diagram8 = getDiagramImage('Diagram8.png');
const diagramTP2 = getDiagramImage('TeamProject2.png');

type ProjectType = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  isTeam?: boolean;
  isInfra?: boolean;
};

const projects: ProjectType[] = [
  {
    id: 'TP2',
    title: TP2Data.title,
    description: TP2Data.overview.description,
    image: diagramTP2,
    tags: TP2Data.techStack,
    isTeam: true
  },
  {
    id: 8,
    title: project8Data.title,
    description: project8Data.overview.description,
    image: diagram8,
    tags: project8Data.techStack,
    isInfra: true
  },
  {
    id: 4,
    title: project4Data.title,
    description: project4Data.overview.description,
    image: diagram4,
    tags: project4Data.techStack
  },
  {
    id: 3,
    title: project3Data.title,
    description: project3Data.overview.description,
    image: diagram3,
    tags: project3Data.techStack
  },
  {
    id: 5,
    title: project5Data.title,
    description: project5Data.overview.description,
    image: diagram5,
    tags: project5Data.techStack
  },  
  {
    id: 1,
    title: project1Data.title,
    description: project1Data.overview.description,
    image: diagram1,
    tags: project1Data.techStack
  },
];

const Overview: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string | number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="overview-container">
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div 
            key={project.id}
            className={`project-card${project.isTeam ? ' team-project' : ''}${project.isInfra ? ' infra-project' : ''}`}
            onClick={() => handleProjectClick(project.id)}
            style={
              project.isTeam 
                ? { border: '3px solid #6AFFA8' } 
                : project.isInfra 
                ? { border: '3px solid #FFA500' } 
                : {}
            }
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img 
                src={project.image} 
                alt={`${project.title} 아키텍처`} 
                className="project-image"
              />
            </div>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;