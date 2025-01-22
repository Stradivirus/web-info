// Popup.js
import React from 'react';

const getPopupContent = (index) => {
  switch(index) {
    case 0: // 클라우드 교육
      return (
        <div className="tech-icons">
          <div className="tech-item">Linux</div>
          <div className="tech-item">Python</div>
          <div className="tech-item">Django</div>
          <div className="tech-item">Docker</div>
          <div className="tech-item">K8s</div>
          <div className="tech-item">Jenkins</div>
          <div className="tech-item">AWS</div>
        </div>
      );
    case 1: // 팀프로젝트
      return (
        <div className="tech-icons">
          <div className="tech-item">FastAPI</div>
          <div className="tech-item">Redis</div>
          <div className="tech-item">PostgreSQL</div>
          <div className="tech-item">K8s</div>
          <div className="tech-item">AWS</div>
        </div>
      );
    case 2: // 인턴
      return (
        <div className="tech-icons">
        <div className="tech-item">Architecture</div>
        <div className="tech-item">GCP</div>  
        <div className="tech-item">React</div>
        <div className="tech-item">NodeJS</div>
        <div className="tech-item">MySQL</div>
        <div className="tech-item">PostgreSQL</div>
        <div className="tech-item">Tencent<br></br> Cloud</div> 
      </div>
      );
    case 3: // 자격증
      return (
        <div className="tech-icons">
          <div className="tech-item">NCP</div>
          <div className="tech-item">AWS SAA</div>
          <div className="tech-item">리눅스마스터 2급</div>
          <div className="tech-item">정보처리기능사</div>
        </div>
      );
    case 4: // 방통대 편입
      return (
        <div className="tech-icons">
          <div className="tech-item">컴퓨터공학과</div>
        </div>
      );
    default:
      return null;
  }
};

const Popup = ({ isVisible, index }) => {
  if (!isVisible) return null;

  return (
    <div className="education-popup">
      {getPopupContent(index)}
    </div>
  );
};

export default Popup;