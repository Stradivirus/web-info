import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Overview.css';

// 프로젝트 데이터 import
import { projectData as project1Data } from '../Projects/Project1/data';
import { projectData as project2Data } from '../Projects/Project2/data';
import { projectData as project3Data } from '../Projects/Project3/data';
import { projectData as project4Data } from '../Projects/Project4/data';
import { projectData as project5Data } from '../Projects/Project5/data';

// 다이어그램 이미지 import - 경로는 그대로 유지
import diagram1 from '../../assets/images/overview/diagrams/Diagram1.png';
import diagram2 from '../../assets/images/overview/diagrams/Diagram2.png';
import diagram3 from '../../assets/images/overview/diagrams/Diagram3.png';
import diagram4 from '../../assets/images/overview/diagrams/Diagram4.png';
import diagram5 from '../../assets/images/overview/diagrams/Diagram5.png';
const projects = [
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
    id: 2,
    title: project2Data.title,
    description: project2Data.overview.description,
    image: diagram2,
    tags: project2Data.techStack
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
  }
];

const Overview = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="overview-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project.id)}
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