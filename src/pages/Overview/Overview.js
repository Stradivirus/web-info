import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Overview.css';
import diagram1 from './Simple Diagram 1.png';
import diagram2 from './Simple Diagram 2.png';
import diagram3 from './Simple Diagram 3.png';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "포트폴리오 웹사이트 제작 프로젝트",
    image: diagram1,
    tags: ["React", "AWS S3", "AWS Cloudfront", "GitHub Actions"]
  },
  {
    id: 2,
    title: "CBT 까짓것 내가 만든다",
    description: "Django와 Postgresql을 사용한 CBT 제작",
    image: diagram2,
    tags: ["Docker-compose", "Django", "Postgresql","GCP"]
  },
  {
    id: 3,
    title: "다소니 - 마음과 마음을 연결합니다",
    description: "websocket, redis를 이용한 채팅",
    image: diagram3,
    tags: ["Websocket", "Redis", "Fastapi", "Docker-compose"]
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