import React from 'react';

const OverviewDiagram = ({ overview, onDiagramClick }) => {
  if (!overview?.diagram) return null;

  return (
    <div 
      className="overview-diagram-preview cursor-pointer"
      onClick={onDiagramClick}
    >
      <img 
        src={overview.diagram} 
        alt="Overview Diagram"
        width="100%"
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default OverviewDiagram;
