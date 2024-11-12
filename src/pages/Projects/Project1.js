import React from 'react';
import { Github, Globe, Calendar } from 'lucide-react';
import './ProjectDetail.css';
import ArchitectureDiagram from './Projent1-Architecture.png';

const Project1 = () => {
  return (
    <div className="project-detail-container">
      <h1>Portfolio Website</h1>

      {/* 프로젝트 기간 */}
      <div className="project-info">
        <div className="info-item">
          <Calendar size={16} />
          <span>2024.11 - 2024.11</span>
        </div>
      </div>

      {/* 사용 기술 태그 */}
      <div className="project-tags">
        <span className="tag">React</span>
        <span className="tag">AWS S3</span>
        <span className="tag">GitHub Actions</span>
      </div>

      {/* 프로젝트 개요와 아키텍처 다이어그램 */}
      <div className="project-overview-container">
        <div className="project-details">
          <div className="content-box">
            <div className="content-section">
              <h2>주요 기능</h2>
              <ul className="feature-list">
                <li>반응형 웹 디자인</li>
                <li>GitHub Actions를 통한 CI/CD 구축</li>
                <li>AWS S3를 활용한 정적 웹사이트 호스팅</li>
                <li>React Router를 이용한 SPA 구현</li>
              </ul>
            </div>
            <div className="content-section">
              <h2>개발 과정</h2>
              <p>
                1. 초기 레이아웃 설계 및 컴포넌트 구조화<br />
                2. 반응형 디자인 구현<br />
                3. GitHub Actions 워크플로우 설정<br />
                4. AWS S3 버킷 설정 및 배포 자동화
              </p>
            </div>
            <div className="content-section">
              <h2>사용 기술</h2>
              <div className="tech-details">
                <div className="tech-category">
                  <h3>Frontend</h3>
                  <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h3>Deployment</h3>
                  <ul>
                    <li>AWS S3</li>
                    <li>GitHub Actions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-section">
              <h2>느낀 점</h2>
              <p>
                이 프로젝트를 통해 React 컴포넌트 구조화와
                GitHub Actions를 활용한 CI/CD 파이프라인 구축 경험을 쌓을 수 있었습니다.
                특히 AWS 서비스를 활용한 배포 과정에서 많은 것을 배웠습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="architecture-diagram">
          <img src={ArchitectureDiagram} alt="Architecture Diagram" />
        </div>
      </div>

      {/* 프로젝트 링크 */}
      <div className="project-links">
        <a href="https://github.com/stradivirus/web-info"
           className="project-link"
           target="_blank"
           rel="noopener noreferrer">
          <Github size={16} />
          GitHub 저장소
        </a>
        <a href="https://portfolio.example.com"
           className="project-link"
           target="_blank"
           rel="noopener noreferrer">
          <Globe size={16} />
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Project1;