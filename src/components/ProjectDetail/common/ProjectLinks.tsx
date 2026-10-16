import { Github, Globe, FileDown } from 'lucide-react';

type LinkType = string | { url: string; isEnabled: boolean };
type DemoType = { url: string; isEnabled: boolean };

interface ProjectLinksProps {
  links?: {
    github?: LinkType;
    demo?: DemoType;
    document?: string;
  };
}

const ProjectLinks = ({ links }: ProjectLinksProps) => {
  if (!links) return null;

  const github = links.github;
  const isGithubObject = typeof github === 'object' && github !== null;

  // URL에서 파일명 추출 (디코딩하여 한글도 표시)
  const getFileNameFromUrl = (url: string): string => {
    try {
      const parts = url.split('/');
      const encodedFileName = parts[parts.length - 1];
      return encodedFileName ? decodeURIComponent(encodedFileName) : '';
    } catch {
      return '';
    }
  };

  const baseLinkClass =
    'inline-flex items-center justify-center md:justify-start gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg no-underline font-medium transition-colors duration-200 hover:bg-blue-700 border-none cursor-pointer';
  const disabledLinkClass =
    '!bg-gray-400 !cursor-not-allowed opacity-60 hover:!bg-gray-400';

  return (
    <div className="mt-4 flex flex-col md:flex-row gap-4">
      {github && (
        <button
          className={`${baseLinkClass} ${isGithubObject && !github.isEnabled ? disabledLinkClass : ''}`}
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
          className={`${baseLinkClass} ${!links.demo.isEnabled ? disabledLinkClass : ''}`}
          disabled={!links.demo.isEnabled}
          onClick={() => {
            if (links.demo?.isEnabled) {
              window.open(links.demo.url, '_blank', 'noopener noreferrer');
            }
          }}
          title={!links.demo.isEnabled ? "서비스 종료" : ""}
        >
          <Globe size={16} />
          Live Demo
        </button>
      )}
      {links.document && (
        <button
          className={baseLinkClass}
          onClick={() => {
            window.open(links.document, '_blank', 'noopener noreferrer');
          }}
          title={getFileNameFromUrl(links.document)}
        >
          <FileDown size={16} />
          자료 다운로드
        </button>
      )}
    </div>
  );
};

export default ProjectLinks;