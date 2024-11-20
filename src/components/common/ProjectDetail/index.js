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

const ProjectDetail = ({
  // 기본 정보
  title,
  period,
  description,
  
  // 기술 스택
  techStack = [],
  
  // 내용 섹션
  objectives = [],
  features = [],
  process = "",
  techDetails = [],
  improvements = "",
  reflection = "",
  
  // 이미지/링크
  architectureImg,
  screenshots = [],
  links,
  
  // 레이아웃 스타일 (7:3 vs 6:4)
  layoutStyle = 'default'
}) => {
  // 이미지 모달 관련 state
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // 모달 관련 핸들러
  const handleImageClick = useCallback((image, caption, index) => {
    setSelectedImage({ image, caption });
    setCurrentIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setCurrentIndex(null);
  }, []);

  const navigateImage = useCallback((direction) => {
    if (!screenshots || currentIndex === null) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : screenshots.length - 1;
    } else {
      newIndex = currentIndex < screenshots.length - 1 ? currentIndex + 1 : 0;
    }

    setCurrentIndex(newIndex);
    setSelectedImage({
      image: screenshots[newIndex].image,
      caption: screenshots[newIndex].caption
    });
  }, [currentIndex, screenshots]);

  // 키보드 이벤트 핸들러
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, navigateImage, closeModal]);

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

      {/* 기술 스택 태그 */}
      {techStack.length > 0 && (
        <div className="tags">
          {techStack.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
      )}

      {/* 프로젝트 개요와 아키텍처 다이어그램 */}
      <div className="overview-container">
        <div className={`details ${layoutStyle === 'wide' ? 'details-wide' : ''}`}>
          <div className="content-box">
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
                <h2>느낀 점</h2>
                <p><LineBreak text={reflection} /></p>
              </div>
            )}
          </div>
        </div>

        {/* 아키텍처 다이어그램 */}
        {architectureImg && (
          <div className="architecture-diagram">
            <img src={architectureImg} alt="Architecture Diagram" />
          </div>
        )}
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

      {/* 스크린샷 섹션 */}
      {screenshots.length > 0 && (
        <div className="screenshots">
          <h2>프로젝트 스크린샷</h2>
          <div className="screenshots-grid">
            {screenshots.map((screenshot, index) => (
              <div key={screenshot.id} className="screenshot-item">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.caption} 
                  className="screenshot-image"
                  onClick={() => handleImageClick(screenshot.image, screenshot.caption, index)}
                />
                <p className="screenshot-caption">{screenshot.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 이미지 모달 */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              <X size={24} />
            </button>
            {screenshots.length > 1 && (
              <>
                <button 
                  className="modal-nav-button modal-nav-prev" 
                  onClick={() => navigateImage('prev')}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className="modal-nav-button modal-nav-next" 
                  onClick={() => navigateImage('next')}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
            <img 
              src={selectedImage.image} 
              alt={selectedImage.caption}
              className="modal-image"
            />
            <p className="modal-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;