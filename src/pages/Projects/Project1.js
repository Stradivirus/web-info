import React from 'react';
import { Github, Globe, Calendar } from 'lucide-react';
import './Project1.css';
import ArchitectureDiagram from './Project1-Architecture.png';

const Project1 = () => {
  return (
    <div className="project1-container">
      <div className="project-header">
        <h1 className="text-4xl font-bold mb-4">Portfolio Website</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={16} />
          <span>2024.11 - 2024.11</span>
        </div>
      </div>

      {/* 사용 기술 태그 */}
      <div className="project1-tags">
        <span className="project1-tag">React</span>
        <span className="project1-tag">AWS S3</span>
        <span className="project1-tag">AWS Cloudfront</span>
        <span className="project1-tag">GitHub Actions</span>
      </div>

      {/* 프로젝트 개요와 아키텍처 다이어그램 */}
      <div className="project1-overview-container">
        <div className="project1-details">
          <div className="project1-content-box">
            <div className="project1-content-section">
              <h2>제작 목표</h2>
              <ul className="project1-feature-list">
                <li>포트폴리오 소개</li>
                <li>제작한 프로젝트 소개</li>
              </ul>
            </div>
            <div className="project1-content-section">
              <h2>주요 기능</h2>
              <ul className="project1-feature-list">
                <li>반응형 웹 디자인</li>
                <li>GitHub Actions를 통한 CI/CD 구축</li>
                <li>AWS S3를 활용한 정적 웹사이트 호스팅</li>
                <li>React Router를 이용한 SPA 구현</li>
              </ul>
            </div>
            <div className="project1-content-section">
              <h2>개발 과정</h2>
              <p>
                1. AWS S3 설정 및 nodejs 연동<br />
                2. GitHub Actions 워크플로우 설정<br />
                3. 초기 레이아웃 설계 및 컴포넌트 구조화<br />
                4. 아키텍쳐 이미지 삽입<br />
                5. 기본 구조 완성 및 배포 자동화
              </p>
            </div>
            <div className="project1-content-section">
              <h2>사용 기술</h2>
              <div className="project1-tech-details">
                <div className="project1-tech-category">
                  <h3>Frontend</h3>
                  <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <div className="project1-tech-category">
                  <h3>Deployment</h3>
                  <ul>
                    <li>AWS S3</li>
                    <li>GitHub Actions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project1-content-section">
              <h2>느낀 점</h2>
              <p>
                이 프로젝트를 통해 React 컴포넌트 구조화와
                GitHub Actions를 활용한 CI/CD 파이프라인 구축 경험을 쌓을 수 있었습니다.
                특히 AWS 서비스를 활용한 배포 과정에서 많은 것을 배웠습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="project1-architecture-diagram">
          <img src={ArchitectureDiagram} alt="Architecture Diagram" />
        </div>
      </div>

      {/* 프로젝트 링크 */}
      <div className="project1-links">
        <a href="https://github.com/stradivirus/web-info"
           className="project1-link"
           target="_blank"
           rel="noopener noreferrer">
          <Github size={16} />
          GitHub 저장소
        </a>
        <a href="https://portfolio.example.com"
           className="project1-link"
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