import type { MediaItem } from '../../../types/types';

interface MediaSectionProps {
  media?: MediaItem[];
  onMediaClick: (item: MediaItem, index: number) => void;
}

const MediaSection = ({ media = [], onMediaClick }: MediaSectionProps) => {
  if (media.length === 0) return null;

  return (
    <div className="mt-6 sm:mt-8 bg-gray-50 rounded-lg border border-gray-200 p-3 sm:p-6">
      <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-6">프로젝트 미디어</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {media.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-gray-200 transition-all duration-200 cursor-pointer relative hover:-translate-y-1 hover:shadow-md"
          >
            {item.type === 'video' ? (
              <video
                src={item.url}
                className="w-full h-auto aspect-video object-cover border-b border-gray-200"
                onClick={() => onMediaClick(item, index)}
              />
            ) : (
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-auto aspect-video object-cover border-b border-gray-200"
                onClick={() => onMediaClick(item, index)}
              />
            )}
            <p className="py-3 px-4 text-center text-base font-medium text-gray-600 m-0">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSection;