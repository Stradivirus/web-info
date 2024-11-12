import React from 'react';
import { Code, Github, Monitor } from 'lucide-react';
import './Overview.css';

const Overview = () => {
  return (
    <div className="overview-container">
      {/* About Section */}
      <section className="overview-section">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          안녕하세요! 프론트엔드 개발자입니다.
          사용자 경험을 중요시하며, 깔끔하고 효율적인 코드 작성을 지향합니다.
        </p>
      </section>

      {/* Skills Section */}
      <section className="overview-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">
              <Monitor className="category-icon" />
              Frontend
            </h3>
            <ul className="skill-list">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <Code className="category-icon" />
              Backend
            </h3>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <Github className="category-icon" />
              Tools
            </h3>
            <ul className="skill-list">
              <li>Git</li>
              <li>AWS</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="overview-section">
        <h2 className="section-title">Recent Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>Portfolio Website</h3>
              <span className="project-date">2024</span>
            </div>
            <p className="project-description">
              React와 AWS를 활용한 포트폴리오 웹사이트 제작
            </p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">AWS S3</span>
              <span className="tag">GitHub Actions</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;