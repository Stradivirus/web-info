import React from 'react';
import { Github, Globe } from 'lucide-react';

const ProjectLinks = ({ links }) => {
  if (!links) return null;

  return (
    <div className="links">
      {links.github && (
        <button 
          className={`link ${typeof links.github === 'object' && !links.github.isEnabled ? 'disabled-link' : ''}`}
          disabled={typeof links.github === 'object' && !links.github.isEnabled}
          onClick={() => {
            const url = typeof links.github === 'string' ? links.github : links.github.url;
            if (typeof links.github === 'string' || links.github.isEnabled) {
              window.open(url, '_blank', 'noopener noreferrer');
            }
          }}
          title={typeof links.github === 'object' && !links.github.isEnabled ? "비공개 저장소" : ""}
        >
          <Github size={16} />
          GitHub 저장소
        </button>
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
