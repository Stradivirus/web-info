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
      className="my-6 mx-auto bg-white w-full md:w-[60%] block cursor-pointer"
      onClick={onDiagramClick}
    >
      <img
        src={overview.diagram}
        alt="Overview Diagram"
        className="w-full cursor-pointer"
      />
    </div>
  );
};

export default OverviewDiagram;