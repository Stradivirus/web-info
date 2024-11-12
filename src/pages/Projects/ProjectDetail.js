const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects[id];
  
    if (!project) {
      return <div>프로젝트를 찾을 수 없습니다.</div>;
    }
  
    return (
      <div className="project-detail-container">
        <h1>{project.title}</h1>
        
        <div className="project-info">
          <div className="info-item">
            <Calendar size={16} />
            <span>{project.period}</span>
          </div>
        </div>
  
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
  
        {/* 여기서부터는 두 번째 코드의 내용을 가져옵니다 */}
        <div className="project-content">
          {/* 주요 기능, 개발 과정, 사용 기술 등의 섹션을 추가 */}
        </div>
  
        <div className="project-links">
          {project.links.github && (
            <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              GitHub 저장소
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} className="project-link" target="_blank" rel="noopener noreferrer">
              <Globe size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    );
  };