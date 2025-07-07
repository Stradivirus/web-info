import React, { useState, useCallback, useEffect } from 'react';
import ProjectHeader from './components/ProjectHeader';
import ProjectLinks from './components/ProjectLinks';
import OverviewDiagram from './components/OverviewDiagram';
import ProjectContent from './components/ProjectContent';
import MediaSection from './components/MediaSection';
import MediaModal from './components/MediaModal';
import './ProjectDetail.base.css';
import './ProjectDetail.media.css';
import './ProjectDetail.responsive.css';
import './MediaModal.css';

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
  layoutStyle = 'default',
  activeTab: externalActiveTab,
  setActiveTab: externalSetActiveTab,
  tabButtonStyle,
  ...props
}) => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [internalTab, setInternalTab] = useState('main');
  const activeTab = externalActiveTab ?? internalTab;
  const setActiveTab = externalSetActiveTab ?? setInternalTab;

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
      {/* 미디어 모달 */}
      <MediaModal
        selectedMedia={selectedMedia}
        currentIndex={currentIndex}
        media={media}
        onClose={closeModal}
        onNavigate={navigateMedia}
      />

      {/* 탭 버튼 */}
      <div style={{ display: 'flex', gap: 0, marginBottom: '24px', borderBottom: '2px solid #e5e7eb', justifyContent: 'center' }}>
        <button
          style={tabButtonStyle ? tabButtonStyle(activeTab === 'main') : {}}
          onClick={() => setActiveTab('main')}
        >
          메인
        </button>
        <button
          style={tabButtonStyle ? tabButtonStyle(activeTab === 'team') : {}}
          onClick={() => setActiveTab('team')}
        >
          팀원별 개발 파트
        </button>
        <button
          style={tabButtonStyle ? tabButtonStyle(activeTab === 'me') : {}}
          onClick={() => setActiveTab('me')}
        >
          내가 개발한 부분
        </button>
      </div>

      {/* 탭별 내용 */}
      {activeTab === 'main' && (
        <>
          <ProjectHeader 
            title={title}
            description={description}
            period={period}
          />
          
          <ProjectLinks links={links} />
          
          <OverviewDiagram 
            overview={overview}
            onDiagramClick={handleDiagramClick}
          />
          
          <ProjectContent
            techStack={techStack}
            objectives={objectives}
            features={features}
            process={process}
            techDetails={techDetails}
            issues={issues}
            improvements={improvements}
            reflection={reflection}
            layoutStyle={layoutStyle}
          />

          <MediaSection 
            media={media}
            onMediaClick={handleMediaClick}
          />
        </>
      )}
      {activeTab === 'team' && props.TeamPartsComponent ? (
        props.TeamPartsComponent
      ) : null}
      {activeTab === 'me' && props.MyPartComponent ? (
        props.MyPartComponent
      ) : null}
    </div>
  );
};

export default ProjectDetail;