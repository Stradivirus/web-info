import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderOpen, Award } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  // NavLink의 active 상태를 위한 클래스 설정 함수
  const getLinkClassName = ({ isActive }) => {
    return `nav-item ${isActive ? 'active' : ''}`;
  };

  return (
    <nav className="nav-container">
      <NavLink to="/" className={getLinkClassName} end>
        <Home className="nav-icon" size={18} />
        <span>홈</span>
      </NavLink>
      
      <div className="nav-divider">Projects</div>
      
      <NavLink to="/project/4" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>사전 예약 시스템</span>
      </NavLink>
      <NavLink to="/project/3" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>다소니<br></br>마음과 마음을 연결하는 채팅</span>
      </NavLink>
      <NavLink to="/project/2" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>Django와 Postgresql로<br></br> 제작한 CBT 사이트</span>
      </NavLink>
      <NavLink to="/project/5" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>CBT를 재구성 해 서버리스로 구현</span>
      </NavLink>
      <NavLink to="/project/1" className={getLinkClassName}>
        <FolderOpen className="nav-icon" size={18} />
        <span>Portfolio Website</span>
      </NavLink>

      <div className="nav-divider">Certifications</div>
      
      <NavLink to="/certifications" className={getLinkClassName}>
        <Award className="nav-icon" size={18} />
        <span>자격증</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;