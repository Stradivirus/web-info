// Navigation.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderOpen, Award, Mail, Phone, Github, History, BookmarkPlus, UserCircle } from 'lucide-react';
import profilePhoto from '../../assets/images/profile/my-photo.jpg';
import packageJson from '../../../package.json';
import './Navigation.css';

const Navigation = () => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

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
            {/* 
           <a 
             href="https://blog.naver.com/stradivirus" 
             target="_blank" 
             rel="noopener noreferrer"
             className="contact-item contact-link"
           >
             <BookOpen className="contact-icon" size={18} />
             <span>blog.naver.com/stradivirus</span>
           </a> 
           */}
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

      {/* 네비게이션 메뉴 */}
      <NavLink to="/" className={getLinkClassName} end>
        <Home className="nav-icon" size={18} />
        <span>홈</span>
      </NavLink>
      <NavLink to="/Introduction" className={getLinkClassName} end>
        <UserCircle className="nav-icon" size={18} />
        <span>자기 소개</span>
      </NavLink>
      <NavLink to="/Records" className={getLinkClassName} end>
        <BookmarkPlus className="nav-icon" size={18} />
        <span>기록</span>
      </NavLink>

      <div className="nav-divider" style={{ background: '#e0f7fa', color: '#1976d2', fontWeight: 'bold' }}>팀 프로젝트</div>
      <NavLink to="/Project/TP1" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>로우코드 기반 고객 중심 과제 시스템</span>
      </NavLink>

      <div className="nav-divider">개인 프로젝트</div>
      <NavLink to="/Project/4" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>React와 NestJs를 사용한 <br></br>사전 예약 시스템</span>
      </NavLink>
      <NavLink to="/Project/3" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>WebSocket과 Redis를 사용한 <br></br>채팅 프로그램</span>
      </NavLink>
      <NavLink to="/Project/1" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>Oracle Cloud로 배포한 Portfolio Website</span>
      </NavLink>
      <NavLink to="/Project/5" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>기존의 CBT를 재구성 해 <br></br>서버리스로 구현</span>
      </NavLink>


      <div
        className="nav-divider archive-header"
        style={{ fontSize: '14px', backgroundColor: '#f0f9ff', cursor: 'pointer' }}
        onClick={() => setIsArchiveOpen(!isArchiveOpen)}
      >
        {isArchiveOpen ? '▼ ' : '▶ '}업데이트 종료
      </div>

      <div className={`archive-content ${isArchiveOpen ? 'open' : ''}`}>
        <NavLink to="/Project/7" className={getLinkClassName}>
          <FolderOpen className="nav-icon" size={18} />
          <span>Prometheus와 Grafana를 이용한 모니터링 시스템</span>
        </NavLink>
        <NavLink to="/Project/6" className={getLinkClassName}>
          <FolderOpen className="nav-icon" size={18} />
          <span>Kafka와 PHP를 이용한<br></br>모니터링 시스템</span>
        </NavLink>
        <NavLink to="/Project/2" className={getLinkClassName}>
          <FolderOpen className="nav-icon" size={18} />
          <span>Django와 PostGreSql를<br></br> 사용한 CBT 사이트</span>
        </NavLink>
      </div>

      <div className="nav-divider">Certifications</div>
      <NavLink to="/Certifications" className={getLinkClassName}>
        <Award className="nav-icon" size={18} />
        <span>자격증</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;