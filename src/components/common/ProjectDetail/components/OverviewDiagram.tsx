interface Overview {
  diagram?: string;
}

interface OverviewDiagramProps {
  overview: Overview;
  onDiagramClick: () => void;
}

const OverviewDiagram = ({ overview, onDiagramClick }: OverviewDiagramProps) => {
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