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

export { TeamParts } from './TeamParts';
export { TeamByRole } from './TeamByRole';
export { MyPart } from './MyPart';

type OverviewType = {
  diagram?: string;
  [key: string]: any;
};

type MediaType = {
  type: string;
  url: string;
  caption?: string;
  [key: string]: any;
};

type ProjectDetailProps = {
  title: string;
  period: string;
  description: string;
  overview?: OverviewType;
  techStack?: string[];
  objectives?: string[];
  features?: string[];
  process?: string;
  techDetails?: string[];
  issues?: string[];
  improvements?: string;
  reflection?: string;
  media?: MediaType[];
  links?: any;
  layoutStyle?: string;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
  tabButtonStyle?: (active: boolean) => React.CSSProperties;
  isTeamProject?: boolean;
  TeamPartsComponent?: React.ReactNode;
  MyPartComponent?: React.ReactNode;
  [key: string]: any;
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({
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
  isTeamProject = false,
  ...props
}) => {
  const [selectedMedia, setSelectedMedia] = useState<MediaType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [internalTab, setInternalTab] = useState<string>('main');
  const activeTab = externalActiveTab ?? internalTab;
  const setActiveTab = externalSetActiveTab ?? setInternalTab;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMediaClick = useCallback((mediaItem: MediaType, index: number) => {
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

  const navigateMedia = useCallback((direction: 'prev' | 'next') => {
    if (!media || currentIndex === null) return;

    let newIndex: number;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : media.length - 1;
    } else {
      newIndex = currentIndex < media.length - 1 ? currentIndex + 1 : 0;
    }

    setCurrentIndex(newIndex);
    setSelectedMedia(media[newIndex]);
  }, [currentIndex, media]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

      {/* 탭 버튼 - 팀 프로젝트일 때만 표시 */}
      {isTeamProject && (
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
      )}

      {/* 탭별 내용 */}
      {(!isTeamProject || activeTab === 'main') && (
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
      {isTeamProject && activeTab === 'team' && props.TeamPartsComponent ? (
        props.TeamPartsComponent
      ) : null}
      {isTeamProject && activeTab === 'me' && props.MyPartComponent ? (
        props.MyPartComponent
      ) : null}
    </div>
  );
};

export default ProjectDetail;