import React, { useState, useCallback, useEffect } from 'react';
import { Github, Globe, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ProjectDetail.css';

const LineBreak = ({ text }) => {
  return (
    <>{text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))}</>
  );
};

const MediaModal = ({ media, onClose, onNavigate }) => {
  if (!media) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <X size={24} />
        </button>
        {onNavigate && (
          <>
            <button 
              className="modal-nav-button modal-nav-prev" 
              onClick={() => onNavigate('prev')}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="modal-nav-button modal-nav-next" 
              onClick={() => onNavigate('next')}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        {media.type === 'video' ? (
          <video 
            src={media.url} 
            controls
            className="modal-video"
          />
        ) : (
          <img 
            src={media.url} 
            alt={media.caption}
            className="modal-image"
          />
        )}
        <p className="modal-caption">{media.caption}</p>
      </div>
    </div>
  );
};

const ProjectDetail = ({
  title,
  period,
  description,
  overview,
  techStack = [],
  objectives = [],
  features = [],
  process = "",
  techDetails = [],
  issues = [],
  improvements = "",
  reflection = "",
  media = [],
  links,
  layoutStyle = 'default'
}) => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMediaClick = useCallback((mediaItem, index) => {
    setSelectedMedia(mediaItem);
    setCurrentIndex(index);
  }, []);

  const handleDiagramClick = useCallback(() => {
    if (overview?.diagram) {
      setSelectedMedia({
        type: 'image',
        url: overview.diagram,
        caption: 'Overview Diagram'
      });
      setCurrentIndex(null);
    }
  }, [overview]);

  const closeModal = useCallback(() => {
    setSelectedMedia(null);
    setCurrentIndex(null);
  }, []);

  const navigateMedia = useCallback((direction) => {
    if (!media || currentIndex === null) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : media.length - 1;
    } else {
      newIndex = currentIndex < media.length - 1 ? currentIndex + 1 : 0;
    }

    setCurrentIndex(newIndex);
    setSelectedMedia(media[newIndex]);
  }, [currentIndex, media]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMedia) return;

      if (e.key === 'ArrowLeft' && selectedMedia) {
        navigateMedia('prev');
      } else if (e.key === 'ArrowRight' && selectedMedia) {
        navigateMedia('next');
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, navigateMedia, closeModal]);

  return (
    <div className="container">
      <div className="project-header">
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <Calendar size={16} />
          <span>{period}</span>
        </div>
      </div>

      {links && (
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
            <a 
              href={links.demo}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={16} />
              Live Demo
            </a>
          )}
        </div>
      )}

      {overview?.diagram && (
        <div 
          className="overview-diagram-preview cursor-pointer"
          onClick={handleDiagramClick}
        >
          <img 
            src={overview.diagram} 
            alt="Overview Diagram"
            width="100%"
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}

      <div className="overview-container">
        <div className={`details ${layoutStyle === 'wide' ? 'details-wide' : ''}`}>
          <div className="content-box">
            {techStack.length > 0 && (
              <div className="tags">
                {techStack.map((tech, index) => (
                  <span key={index} className="tag">{tech}</span>
                ))}
              </div>
            )}

            {objectives.length > 0 && (
              <div className="content-section">
                <h2>제작 목표</h2>
                <ul className="feature-list">
                  {objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            )}

            {features.length > 0 && (
              <div className="content-section">
                <h2>주요 기능</h2>
                <ul className="feature-list">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {process && (
              <div className="content-section">
                <h2>개발 과정</h2>
                <p><LineBreak text={process} /></p>
              </div>
            )}

            {techDetails.length > 0 && (
              <div className="content-section">
                <h2>사용 기술</h2>
                <div className="tech-details">
                  {techDetails.map((category, index) => (
                    <div key={index} className="tech-category">
                      <h3>{category.title}</h3>
                      <ul>
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {issues && issues.length > 0 && (
              <div className="content-section">
                <h2>Project Issues</h2>
                <div className="issues-grid">
                  {issues.map((issue, index) => (
                    <div key={index} className="issue-card">
                      <h3>{issue.title}</h3>
                      <p className="issue-problem">문제: {issue.problem}</p>
                      <p className="issue-solution">해결: {issue.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {improvements && (
              <div className="content-section">
                <h2>개선점 및 향후 계획</h2>
                <p><LineBreak text={improvements} /></p>
              </div>
            )}

            {reflection && (
              <div className="content-section">
                <h2>기술적 도전과 성과</h2>
                <p><LineBreak text={reflection} /></p>
              </div>
            )}
          </div>
        </div>
      </div>

      {media.length > 0 && (
        <div className="media-section">
          <h2>프로젝트 미디어</h2>
          <div className="media-grid">
            {media.map((item, index) => (
              <div key={item.id} className="media-item">
                {item.type === 'video' ? (
                  <video 
                    src={item.url}
                    className="media-preview"
                    onClick={() => handleMediaClick(item, index)}
                  />
                ) : (
                  <img 
                    src={item.url} 
                    alt={item.caption} 
                    className="media-preview"
                    onClick={() => handleMediaClick(item, index)}
                  />
                )}
                <p className="media-caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedMedia && (
        <MediaModal 
          media={selectedMedia}
          onClose={closeModal}
          onNavigate={currentIndex !== null && media.length > 1 ? navigateMedia : null}
        />
      )}
    </div>
  );
};

export default ProjectDetail;