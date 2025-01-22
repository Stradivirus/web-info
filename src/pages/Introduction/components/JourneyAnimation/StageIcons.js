// StageIcons.js
import React from 'react';

const StageIcons = ({ stages }) => {
  const getIconStyle = (type) => {
    switch(type) {
      case 'certification':
        return 'certificate-icon';
      case 'internship':
        return 'internship-icon';
      case 'project':
        return 'project-icon';
      case 'education':
        return 'education-icon';
      default:
        return 'default-icon';
    }
  };

  return (
    <div className="absolute inset-0">
      {stages.map((stage, index) => (
        <div
          key={`stage-${index}`}
          className="absolute flex flex-col items-center"
          style={{
            left: `${10 + index * 16}%`,
            bottom: '20%',
            transform: 'translateX(-50%)',
            width: '120px'
          }}
        >
          <div 
            className={getIconStyle(stage.type)} 
            style={{ backgroundColor: stage.color }}
          />
          <div className="text-lg mt-4 text-center text-white font-semibold">
            {stage.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StageIcons;

