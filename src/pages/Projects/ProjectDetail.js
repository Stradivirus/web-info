import React from 'react';
import { useParams } from 'react-router-dom';
import { Github, Globe, Calendar } from 'lucide-react';
import './ProjectDetail.css';

const projects = {
  1: {
    title: "Portfolio Website",
    description: "React와 AWS S3를 활용한 개인 포트폴리오 웹사이트 제작 프로젝트",
    period: "2024.01 - 2024.02",
    tags: ["React", "AWS S3", "GitHub Actions"],
    details: [
      {
        title: "프로젝트 개요",
        content: "개인 포트폴리오 용도의 웹사이트를 제작했습니다. React를 기반으로 제작되었으며, AWS S3를 통해 호스팅됩니다."
      },
      {
        title: "주요 기능",
        content: "반응형 디자인, 다크 모드 지원, 프로젝트 갤러리, GitHub 자동 배포 등을 구현했습니다."
      },
      {
        title: "사용 기술",
        content: "Frontend: React, React Router, CSS\nBackend: AWS S3, GitHub Actions"
      }
    ],
    links: {
      github: "https://github.com/username/portfolio",
      live: "https://portfolio.example.com"
    }
  },
  // 다른 프로젝트들도 같은 형식으로 추가...
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="project-detail-container">
      <h1>{project.title}</h1>
      <p className="project-description">{project.description}</p>
      
      <div className="project-info">
        <div className="info-item">
          <Calendar size={16} />
          <span>{project.period}</span>
        </div>
      </div>

      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      <div className="project-content">
        {project.details.map((section, index) => (
          <div key={index} className="content-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>

      <div className="project-links">
        {project.links.github && (
          <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            GitHub 저장소
          </a>
        )}
        {project.links.live && (
          <a href={project.links.live} className="project-link" target="_blank" rel="noopener noreferrer">
            <Globe size={16} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;