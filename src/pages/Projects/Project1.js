import React from 'react';
import { Github, Globe, Calendar } from 'lucide-react';
import './Project1.css';
import ArchitectureDiagram from './Project1-Architecture.png';

const Project1 = () => {
  return (
    <div className="project1-container">
      {/* 프로젝트 헤더 섹션 */}
      <div className="project-header">
        <h1 className="text-4xl font-bold mb-3">Portfolio Website</h1>
        <div className="flex items-center gap-2 text-gray-600 mb-3">
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
            {/* 제작 목표 섹션 */}
            <div className="project1-content-section">
              <h2>제작 목표</h2>
              <ul className="project1-feature-list">
                <li>프로젝트 이력을 담은 포트폴리오 웹사이트</li>
              </ul>
            </div>

            {/* 주요 기능 섹션 */}
            <div className="project1-content-section">
              <h2>주요 기능</h2>
              <ul className="project1-feature-list">
                <li>GitHub Actions를 통한 CI/CD 구축</li>
                <li>AWS S3를 활용한 정적 웹사이트 호스팅</li>
                <li>React Router를 이용한 SPA 구현</li>
              </ul>
            </div>

            {/* 개발 과정 섹션 */}
            <div className="project1-content-section">
              <h2>개발 과정</h2>
              <p>
                1. 초기 레이아웃 설계 및 컴포넌트 구조화<br />
                2. 기본 구조 완성 및 테스트<br />
                3. AWS S3 버킷 생성 및 정적 웹 호스팅 설정<br />
                4. CloudFront 배포<br />
                5. GitHub Actions 워크플로우 작성 및 배포 자동화 구축
              </p>
            </div>

            {/* 사용 기술 섹션 */}
            <div className="project1-content-section">
              <h2>사용 기술</h2>
              <div className="project1-tech-details">
                <div className="project1-tech-category">
                  <h3>Frontend</h3>
                  <ul>
                    <li>React - 사용자 인터페이스 구축</li>
                    <li>React Router - 클라이언트 사이드 라우팅</li>
                    <li>CSS - 반응형 디자인 및 스타일링</li>
                  </ul>
                </div>
                <div className="project1-tech-category">
                  <h3>Deployment</h3>
                  <ul>
                    <li>AWS S3 - 정적 웹사이트 호스팅</li>
                    <li>GitHub Actions - CI/CD 자동화</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project1-content-section">
            <h2>개선점 및 향후 계획</h2>
 <p>
   현재 각 프로젝트 별로 나누다보니 컴포넌트 부분이나 CSS부분은 중복되는 부분이 많음<br />
   <br />
   • 코드 구조 개선<br />
   - 현재: 각 프로젝트마다 동일한 컴포넌트와 CSS 코드 중복<br /> 
   - 개선: 공통 컴포넌트 라이브러리 구축 및 스타일 시스템 구축<br />
   <br />
   • 컴포넌트 분리<br />
   - ImageGallery, Modal 등 재사용 가능한 컴포넌트 추출<br />
   - 프로젝트별 고유 로직과 UI 분리<br />
   <br />
   • CSS 최적화<br />
   - 공통 스타일을 Base CSS로 분리<br />
   - CSS-in-JS 또는 Styled Components 도입 검토<br />
   - 테일윈드 유틸리티 클래스 활용 확대<br />
 </p>
</div>
            {/* 느낀 점 섹션 */}
            <div className="project1-content-section">
              <h2>느낀 점</h2>
              <p>
                이 프로젝트를 통해 React 컴포넌트 구조화와
                GitHub Actions를 활용한 CI/CD 파이프라인 구축 경험을 쌓을 수 있었습니다.<br></br>
                특히 AWS 서비스를 활용한 배포 과정에서 많은 것을 배웠습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 아키텍처 다이어그램 */}
        <div className="project1-architecture-diagram">
          <img 
            src={ArchitectureDiagram} 
            alt="포트폴리오 웹사이트의 아키텍처 다이어그램" 
          />
        </div>
      </div>

      {/* 프로젝트 링크 */}
      <div className="project1-links">
        <a 
          href="https://github.com/stradivirus/web-info"
          className="project1-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} />
          GitHub 저장소
        </a>
        <a 
          href="https://d8d53oijcrep7.cloudfront.net/"
          className="project1-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe size={16} />
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Project1;