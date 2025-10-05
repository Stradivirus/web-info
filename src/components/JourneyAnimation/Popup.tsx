import React from 'react';

type PopupProps = {
  isVisible: boolean;
  index: number;
};

const getPopupContent = (index: number) => {
  switch(index) {
    case 0: // 클라우드
      return (
        <div className="tech-icons">
          <div className="tech-item">Linux</div>
          <div className="tech-item">Docker</div>
          <div className="tech-item">Kubernetes</div>
          <div className="tech-item">Jenkins</div>
          <div className="tech-item">AWS</div>
          <div className="tech-item">Oracle</div>
        </div>
      );
    case 1: // 풀스택
      return (
        <div className="tech-icons">
          <div className="tech-item">SpringBoot</div>
          <div className="tech-item">FastAPI</div>
          <div className="tech-item">Django</div>
          <div className="tech-item">React</div>
          <div className="tech-item">Postgresql</div>
          <div className="tech-item">MongoDB</div>
        </div>
      );
    case 2: // 빅데이터
      return (
        <div className="tech-icons">
          <div className="tech-item">Pandas</div>
          <div className="tech-item">Keras</div>
          <div className="tech-item">Tensorflow</div>
          <div className="tech-item">Jupyter Notebook</div>
          <div className="tech-item">SQL</div>
        </div>
      );
    case 3: // 프로젝트
      return (
        <div className="tech-icons">
          <div className="tech-item">사전 예약 시스템</div>
          <div className="tech-item">채팅 시스템</div>
          <div className="tech-item">서버리스 CBT</div>
          <div className="tech-item">CBT 시스템</div>
          <div className="tech-item">인프라 관리 시스템</div>
        </div>
      );
    case 4: // 자격증
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
    default:
      return null;
  }
};

const Popup: React.FC<PopupProps> = ({ isVisible, index }) => {
  if (!isVisible) return null;

  return (
    <div className="education-popup">
      {getPopupContent(index)}
    </div>
  );
};

export default Popup;