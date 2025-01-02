import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderOpen, Award, BookOpen, Mail, Phone, Github, History } from 'lucide-react';
import profilePhoto from '../../assets/images/profile/my-photo.jpg';
import packageJson from '../../../package.json';  // 추가
import './Navigation.css';

const Navigation = () => {
  const getLinkClassName = ({ isActive }) => {
    return `nav-item ${isActive ? 'active' : ''}`;
  };

  const buildTime = process.env.REACT_APP_BUILD_TIME || '업데이트 정보 없음';

  return (
    <nav className="nav-container">
      {/* 프로필 섹션 */}
      <div className="profile-section">
        <div className="profile-photo">
          <img src={profilePhoto} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-info">
          <h2 className="profile-name">문성종의 PortFolio</h2>
          <div className="profile-contact">
            <div className="contact-item">
              <Mail className="contact-icon" size={18} />
              <span>stradivirus@naver.com</span>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" size={18} />
              <span>010-9875-6325</span>
            </div>
            <a 
              href="https://github.com/stradivirus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-item contact-link"
            >
              <Github className="contact-icon" size={18} />
              <span>github.com/stradivirus</span>
            </a>
            <div className="contact-item">
              <History className="contact-icon" size={18} />
              <div className="update-info">
                <span className="update-label">마지막 업데이트</span>
                <span className="update-time">{buildTime}</span>
                <span className="version-info">v{packageJson.version}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 네비게이션 메뉴 - 이전과 동일 */}
      <NavLink to="/" className={getLinkClassName} end>
        <Home className="nav-icon" size={18} />
        <span>홈</span>
      </NavLink>
      
      <div className="nav-divider">Projects</div>
      <NavLink to="/project/4" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>React와 Express를 사용한 <br></br>사전 예약 시스템</span>
      </NavLink>
      <NavLink to="/project/3" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>WebSocket과 Redis를 사용한 <br></br>채팅 프로그램</span>
      </NavLink>
      <NavLink to="/project/2" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>Django와 Postgresql를<br></br> 사용한 CBT 사이트</span>
      </NavLink>
      <NavLink to="/project/5" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>기존의 CBT를 재구성 해 <br></br>서버리스로 구현</span>
      </NavLink>
      <NavLink to="/project/1" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>Aws S3와 Cloudfront로 배포한<br></br> Portfolio Website</span>
      </NavLink>

      <div className="nav-divider">Certifications</div>
      <NavLink to="/certifications" className={getLinkClassName}>
        <Award className="nav-icon" size={18} />
        <span>자격증</span>
      </NavLink>
      
      <div className="nav-divider">Study & Skills</div>
      <NavLink to="/study-skills/programming" className={getLinkClassName}>
        <BookOpen className="nav-icon" size={18} />
        <span>Programming Languages</span>
      </NavLink>
      <NavLink to="/study-skills/git" className={getLinkClassName}>
        <BookOpen className="nav-icon" size={18} />
        <span>Git</span>
      </NavLink>
      <NavLink to="/study-skills/database" className={getLinkClassName}>
        <BookOpen className="nav-icon" size={18} />
        <span>Database & Message Queue</span>
      </NavLink>
      <NavLink to="/study-skills/container" className={getLinkClassName}>
        <BookOpen className="nav-icon" size={18} />
        <span>Container Orchestration</span>
      </NavLink>
      <NavLink to="/study-skills/CICD" className={getLinkClassName}>
        <BookOpen className="nav-icon" size={18} />
        <span>CI & CD & IaC</span>
      </NavLink>
      <NavLink to="/study-skills/Aws" className={getLinkClassName}>
        <BookOpen className="nav-icon" size={18} />
        <span>Aws</span>
      </NavLink>
      <NavLink to="/study-skills/DevTools" className={getLinkClassName}>
        <BookOpen className="nav-icon" size={18} />
        <span>DevTools</span>
      </NavLink>
      <NavLink to="/study-skills/monitoring" className={getLinkClassName}>
         <BookOpen className="nav-icon" size={18} />
         <span>Monitoring Tools</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;