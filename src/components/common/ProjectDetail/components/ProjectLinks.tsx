import { Github, Globe } from 'lucide-react';

type LinkType = string | { url: string; isEnabled: boolean };
type DemoType = { url: string; isEnabled: boolean };

interface ProjectLinksProps {
  links?: {
    github?: LinkType;
    demo?: DemoType;
  };
}

const ProjectLinks = ({ links }: ProjectLinksProps) => {
  if (!links) return null;

  const github = links.github;
  const isGithubObject = typeof github === 'object' && github !== null;

  return (
    <div className="links">
      {github && (
        <button
          className={`link ${isGithubObject && !github.isEnabled ? 'disabled-link' : ''}`}
          disabled={isGithubObject && !github.isEnabled}
          onClick={() => {
            const url = isGithubObject ? github.url : github;
            if (!isGithubObject || github.isEnabled) {
              window.open(url, '_blank', 'noopener noreferrer');
            }
          }}
          title={isGithubObject && !github.isEnabled ? "비공개 저장소" : ""}
        >
          <Github size={16} />
          GitHub 저장소
        </button>
      )}
      {links.demo && (
        <button
          className={`link ${!links.demo.isEnabled ? 'disabled-link' : ''}`}
          disabled={!links.demo.isEnabled}
          onClick={() => {
            if (links.demo.isEnabled) {
              window.open(links.demo.url, '_blank', 'noopener noreferrer');
            }
          }}
          title={!links.demo.isEnabled ? "서비스 종료" : ""}
        >
          <Globe size={16} />
          Live Demo
        </button>
      )}
    </div>
  );
};

export default ProjectLinks;