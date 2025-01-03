import React, { useState, useCallback } from 'react';
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
  // 기본 정보
  title,
  period,
  description,
  overview,
  // 기술 스택
  techStack = [],
  
  // 내용 섹션
  objectives = [],
  features = [],
  process = "",
  techDetails = [],
  issues = [],
  improvements = "",
  reflection = "",
  
  // 이미지/링크
  media = [], // screenshots와 video를 포함한 모든 미디어 (아키텍처 다이어그램도 여기 포함)
  links,
  
  // 레이아웃 스타일 (7:3 vs 6:4)
  layoutStyle = 'default'
}) => {
  // 모달 관련 state
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // 모달 관련 핸들러
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
      setCurrentIndex(null); // 다이어그램은 네비게이션이 필요 없으므로 null
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

  // 키보드 이벤트 핸들러
  React.useEffect(() => {
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
      {/* 헤더 섹션 */}
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

      

      {/* 프로젝트 링크 */}
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
      {/* Overview 다이어그램 */}
{/* 링크 섹션 바로 아래에 추가 */}
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

      {/* 프로젝트 개요 */}
      <div className="overview-container">
        <div className={`details ${layoutStyle === 'wide' ? 'details-wide' : ''}`}>
          <div className="content-box">
            {/* 기술 스택 태그 */}
      {techStack.length > 0 && (
        <div className="tags">
          {techStack.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
      )}
            {/* 제작 목표 섹션 */}
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

            {/* 주요 기능 섹션 */}
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

            {/* 개발 과정 섹션 */}
            {process && (
              <div className="content-section">
                <h2>개발 과정</h2>
                <p><LineBreak text={process} /></p>
              </div>
            )}

            {/* 기술 상세 섹션 */}
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
            {/* 개선점 섹션 */}
            {improvements && (
              <div className="content-section">
                <h2>개선점 및 향후 계획</h2>
                <p><LineBreak text={improvements} /></p>
              </div>
            )}

            {/* 느낀 점 섹션 */}
            {reflection && (
              <div className="content-section">
                <h2>기술적 도전과 성과</h2>
                <p><LineBreak text={reflection} /></p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 미디어 섹션 */}
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

      {/* 미디어 모달 */}
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