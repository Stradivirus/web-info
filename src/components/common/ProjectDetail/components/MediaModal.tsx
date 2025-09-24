import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type MediaItem = {
  id?: string;
  type: 'image' | 'video';
  url: string;
  caption?: string;
};

interface MediaModalProps {
  selectedMedia: MediaItem | null;
  currentIndex: number | null;
  media?: MediaItem[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const MediaModal = ({
  selectedMedia,
  currentIndex,
  media = [],
  onClose,
  onNavigate,
}: MediaModalProps) => {
  useEffect(() => {
    if (!selectedMedia) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && media.length > 1 && currentIndex !== null) {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight' && media.length > 1 && currentIndex !== null) {
        onNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, media.length, currentIndex, onClose, onNavigate]);

  if (!selectedMedia) return null;

  const isVideo = selectedMedia.type === 'video';
  const hasMultipleMedia = media.length > 1;
  const canNavigate = hasMultipleMedia && currentIndex !== null;

  return ReactDOM.createPortal(
    <div
      className="media-modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* 헤더 */}
      <div className="media-modal-header">
        <div className="media-modal-info">
          <span className="media-modal-caption">{selectedMedia.caption}</span>
          {canNavigate && (
            <span className="media-modal-counter">
              {currentIndex !== null ? currentIndex + 1 : ''} / {media.length}
            </span>
          )}
        </div>

        <div className="media-modal-controls">
          <button
            className="media-modal-control-btn media-modal-close"
            onClick={onClose}
            title="닫기 (ESC)"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      {canNavigate && (
        <>
          <button
            className="media-modal-nav media-modal-nav-prev"
            onClick={() => onNavigate('prev')}
            title="이전 (←)"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="media-modal-nav media-modal-nav-next"
            onClick={() => onNavigate('next')}
            title="다음 (→)"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* 미디어 콘텐츠 */}
      <div className="media-modal-content">
        {isVideo ? (
          <video
            src={selectedMedia.url}
            controls
            autoPlay
            className="media-modal-video"
          />
        ) : (
          <img
            src={selectedMedia.url}
            alt={selectedMedia.caption}
            className="media-modal-image"
          />
        )}
      </div>
    </div>,
    document.body
  );
};

export default MediaModal;