import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { MediaItem } from '../../../types/types';

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
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000] !scale-100"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* 헤더 */}
      <div className="fixed top-0 left-0 w-full h-[50px] md:h-[60px] bg-gradient-to-b from-black/80 to-transparent flex justify-between items-center px-[15px] md:px-5 z-[1001]">
        <div className="flex flex-col gap-1">
          <span className="text-white text-base md:text-[30px] font-semibold">{selectedMedia.caption}</span>
          {canNavigate && (
            <span className="text-white/80 text-sm md:text-xl font-medium">
              {currentIndex !== null ? currentIndex + 1 : ''} / {media.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            className="bg-red-600/80 hover:bg-red-600 border-none text-white px-2 py-1.5 md:px-3 md:py-2 rounded-md cursor-pointer flex items-center justify-center transition-all duration-200 text-xs md:text-sm min-w-[32px] h-8 md:min-w-[40px] md:h-9"
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
            className="fixed top-1/2 -translate-y-1/2 left-[15px] md:left-[30px] bg-black/50 hover:bg-black/80 hover:scale-110 border-none text-white w-10 h-10 md:w-[50px] md:h-[50px] rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 z-[1001]"
            onClick={() => onNavigate('prev')}
            title="이전 (←)"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="fixed top-1/2 -translate-y-1/2 right-[15px] md:right-[30px] bg-black/50 hover:bg-black/80 hover:scale-110 border-none text-white w-10 h-10 md:w-[50px] md:h-[50px] rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 z-[1001]"
            onClick={() => onNavigate('next')}
            title="다음 (→)"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* 미디어 콘텐츠 */}
      <div className="flex items-center justify-center py-[50px] px-5 md:py-[60px] md:px-20 box-border pointer-events-none">
        {isVideo ? (
          <video
            src={selectedMedia.url}
            controls
            autoPlay
            className="max-w-full max-h-full outline-none pointer-events-auto"
          />
        ) : (
          <img
            src={selectedMedia.url}
            alt={selectedMedia.caption}
            className="max-w-[min(90vw,1400px)] max-h-[min(80vh,1000px)] object-contain select-none pointer-events-auto"
          />
        )}
      </div>
    </div>,
    document.body
  );
};

export default MediaModal;