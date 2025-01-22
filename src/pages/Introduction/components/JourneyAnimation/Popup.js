// Popup.js
import React from 'react';
import { 
  DiLinux, 
  DiPython, 
  DiDjango, 
  DiDocker, 
  DiAws, 
  DiJenkins 
} from "react-icons/di";
import { 
  SiKubernetes,
  SiFastapi,
  SiRedis,
  SiPostgresql
} from "react-icons/si";

const getPopupContent = (index) => {
  switch(index) {
    case 0: // 클라우드 교육
      return (
        <div className="tech-icons">
          <div className="tech-icon" title="Linux">
            <DiLinux size={26} color="#FCC624" />
            <span>Linux</span>
          </div>
          <div className="tech-icon" title="Python">
            <DiPython size={26} color="#3776AB" />
            <span>Python</span>
          </div>
          <div className="tech-icon" title="Django">
            <DiDjango size={26} color="#092E20" />
            <span>Django</span>
          </div>
          <div className="tech-icon" title="Docker">
            <DiDocker size={26} color="#2496ED" />
            <span>Docker</span>
          </div>
          <div className="tech-icon" title="Kubernetes">
            <SiKubernetes size={26} color="#326CE5" />
            <span>K8s</span>
          </div>
          <div className="tech-icon" title="Jenkins">
            <DiJenkins size={26} color="#D24939" />
            <span>Jenkins</span>
          </div>
          <div className="tech-icon" title="AWS">
            <DiAws size={26} color="#FF9900" />
            <span>AWS</span>
          </div>
        </div>
      );
    case 1: // 팀프로젝트
      return (
        <div className="tech-icons">
          <div className="tech-icon" title="FastAPI">
            <SiFastapi size={26} color="#009688" />
            <span>FastAPI</span>
          </div>
          <div className="tech-icon" title="Redis">
            <SiRedis size={26} color="#DC382D" />
            <span>Redis</span>
          </div>
          <div className="tech-icon" title="PostgreSQL">
            <SiPostgresql size={26} color="#336791" />
            <span>PostgreSQL</span>
          </div>
          <div className="tech-icon" title="Kubernetes">
            <SiKubernetes size={26} color="#326CE5" />
            <span>K8s</span>
          </div>
          <div className="tech-icon" title="AWS">
            <DiAws size={26} color="#FF9900" />
            <span>AWS</span>
          </div>
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