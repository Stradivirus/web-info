import React from 'react';
import { Github, Globe } from 'lucide-react';

const ProjectLinks = ({ links }) => {
  if (!links) return null;

  return (
    <div className="links">
      {links.github && (
        <a 
          href={links.github}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} />
          GitHub 저장소
        </a>
      )}
      {links.demo && (
        <button 
          className={`link ${!links.demo.isEnabled ? 'disabled-link' : ''}`}
          disabled={!links.demo.isEnabled}
          onClick={() => {
            if (links.demo.isEnabled) {
              window.open(links.demo.url, '_blank', 'noopener noreferrer');
            }
          }}
          title={!links.demo.isEnabled ? "서비스 종료" : ""}
        >
          <Globe size={16} />
          Live Demo
        </button>
      )}
    </div>
  );
};

export default ProjectLinks;
