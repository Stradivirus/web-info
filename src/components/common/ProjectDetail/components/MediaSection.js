import React from 'react';

const MediaSection = ({ media = [], onMediaClick }) => {
  if (media.length === 0) return null;

  return (
    <div className="media-section">
      <h2>프로젝트 미디어</h2>
      <div className="media-grid">
        {media.map((item, index) => (
          <div key={item.id} className="media-item">
            {item.type === 'video' ? (
              <video 
                src={item.url}
                className="media-preview"
                onClick={() => onMediaClick(item, index)}
              />
            ) : (
              <img 
                src={item.url} 
                alt={item.caption} 
                className="media-preview"
                onClick={() => onMediaClick(item, index)}
              />
            )}
            <p className="media-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSection;
