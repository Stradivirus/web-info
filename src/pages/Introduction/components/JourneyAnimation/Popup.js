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
    case 1: // 프로젝트
      return (
        <div className="tech-icons">
          <div className="tech-item">사전 예약 시스템</div>
          <div className="tech-item">채팅 시스템</div>
          <div className="tech-item">서버리스 CBT</div>
          <div className="tech-item">CBT 시스템</div>
          <div className="tech-item">인프라 관리 시스템</div>
        </div>
      );
    case 2: // 인턴
      return (
        <div className="tech-icons">
        <div className="tech-item">Architecture</div> 
        <div className="tech-item">React</div>
        <div className="tech-item">NodeJS</div>
        <div className="tech-item">MySQL</div>
        <div className="tech-item">PostgreSQL</div>
        <div className="tech-item">GCP</div> 
        <div className="tech-item">Tencent<br></br> Cloud</div> 
      </div>
      );
    case 3: // 자격증
      return (
        <div className="tech-icons">
          <div className="tech-item">네트워크 관리사 2급</div>
          <div className="tech-item">AWS SAA</div>
          <div className="tech-item">리눅스마스터 2급</div>
          <div className="tech-item">정보처리기능사</div>
          <div className="tech-item">SQLD</div>
          <div className="tech-item">데이터 분석 준전문가</div>
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