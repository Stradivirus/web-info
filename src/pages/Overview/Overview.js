import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Overview.css';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "포트폴리오 웹사이트 제작 프로젝트",
    tags: ["React", "AWS S3", "GitHub Actions"]
  },
  {
    id: 2,
    title: "Project 2",
    description: "두 번째 프로젝트 설명",
    tags: ["Node.js", "Express", "MongoDB"]
  },
  {
    id: 3,
    title: "Project 3",
    description: "세 번째 프로젝트 설명",
    tags: ["React Native", "Firebase", "Redux"]
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