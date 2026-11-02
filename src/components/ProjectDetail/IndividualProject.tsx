import React, { useState, useCallback, useEffect } from 'react';
import ProjectHeader from './common/ProjectHeader';
import ProjectLinks from './common/ProjectLinks';
import OverviewDiagram from './common/OverviewDiagram';
import ProjectContent from './common/ProjectContent';
import MediaSection from './common/MediaSection';
import MediaModal from './common/MediaModal';
import type { MediaItem, ProjectData } from '../../types/types';
import './styles/ProjectDetail.base.css';
import './styles/ProjectDetail.media.css';
import './styles/ProjectDetail.responsive.css';
import './styles/MediaModal.css';


type ProjectDetailProps = Partial<ProjectData> & {
  title: string;
  period: string;
  description: string;
  issues?: any[];
  layoutStyle?: 'default' | 'wide';
};

const IndividualProject: React.FC<ProjectDetailProps> = ({
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
  links = {} as any,
  layoutStyle = 'default',
}) => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMediaClick = useCallback((mediaItem: MediaItem, index: number) => {
    setSelectedMedia(mediaItem);
    setCurrentIndex(index);
  }, []);

  const handleDiagramClick = useCallback(() => {
    if (overview?.diagram) {
      setSelectedMedia({
        id: 'overview-diagram',
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
    const next = media[newIndex];
    if (next) {
      setSelectedMedia(next);
    }
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
      <MediaModal
        selectedMedia={selectedMedia}
        currentIndex={currentIndex}
        media={media}
        onClose={closeModal}
        onNavigate={navigateMedia}
      />

      <ProjectHeader
        title={title}
        description={description}
        period={period}
      />

      <ProjectLinks links={links} />

      <OverviewDiagram
        overview={overview || ({} as any)}
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
    </div>
  );
};

export default IndividualProject;
