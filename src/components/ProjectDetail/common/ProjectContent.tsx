import React from 'react';

interface LineBreakProps {
  text: string;
}

const LineBreak = ({ text }: LineBreakProps) => (
  <>
    {text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))}
  </>
);

interface TechDetail {
  title: string;
  items: string[];
}

interface Issue {
  title: string;
  problem: string;
  solution: string;
}

interface ProjectContentProps {
  techStack?: string[];
  objectives?: string[];
  features?: string[];
  process?: string;
  techDetails?: TechDetail[];
  issues?: Issue[];
  improvements?: string;
  reflection?: string;
  layoutStyle?: 'default' | 'wide';
}

const ProjectContent = ({
  techStack = [],
  objectives = [],
  features = [],
  process = "",
  techDetails = [],
  issues = [],
  improvements = "",
  reflection = "",
  layoutStyle = 'default'
}: ProjectContentProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8 mt-4 items-start">
      <div className={`w-full ${layoutStyle === 'wide' ? 'md:flex-[7]' : 'md:flex-[6]'}`}>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-600 px-3 py-1.5 rounded-2xl text-[15px] font-medium transition-all duration-200 hover:bg-blue-600 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {objectives.length > 0 && (
            <div className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">제작 목표</h2>
              <ul className="list-none p-0">
                {objectives.map((objective, index) => (
                  <li
                    key={index}
                    className="py-2 relative pl-6 text-gray-600 leading-relaxed text-[19px] before:content-['•'] before:text-blue-600 before:absolute before:left-2"
                  >
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {features.length > 0 && (
            <div className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">주요 기능</h2>
              <ul className="list-none p-0">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="py-2 relative pl-6 text-gray-600 leading-relaxed text-[19px] before:content-['•'] before:text-blue-600 before:absolute before:left-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {process && (
            <div className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">개발 과정</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg"><LineBreak text={process} /></p>
            </div>
          )}

          {techDetails.length > 0 && (
            <div className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">사용 기술</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-4">
                {techDetails.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-blue-600 mb-3">{category.title}</h3>
                    <ul className="list-none p-0">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="py-1 text-gray-600 text-[19px] leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {issues && issues.length > 0 && (
            <div className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Project Issues</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {issues.map((issue, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-lg mb-2">{issue.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-2 text-lg">문제: {issue.problem}</p>
                    <p className="text-gray-600 leading-relaxed text-lg">해결: {issue.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {improvements && (
            <div className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">개선점 및 향후 계획</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg"><LineBreak text={improvements} /></p>
            </div>
          )}

          {reflection && (
            <div className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">기술적 도전과 성과</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg"><LineBreak text={reflection} /></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;