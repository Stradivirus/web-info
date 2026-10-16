import React, { useState } from 'react';
import { myDevelopmentData } from '../../../pages/TeamProject/TP1/myDevelopmentData';

type CodeSnippet = {
  comment: string;
  code: string[];
};

type Feature = {
  id: string;
  title: string;
  description: string;
  frontend: {
    title: string;
    description: string;
    codeSnippet: CodeSnippet;
  };
  backend: {
    title: string;
    description: string;
    codeSnippet: CodeSnippet;
  };
};

type MyDevelopmentData = {
  features: Feature[];
  challenges: {
    technicalChallenges: string[];
  };
  achievements: {
    results: string;
    learning: string;
  };
};

export const MyPart: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (featureId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  const renderCodeSnippet = (codeSnippet: CodeSnippet) => (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-[13px] font-mono whitespace-pre-wrap overflow-x-auto">
      <div className="text-slate-500 mb-2">{codeSnippet.comment}</div>
      {codeSnippet.code.map((line, idx) => (
        <div
          key={idx}
          className={`text-gray-800 ${
            line.startsWith('    ') ? 'ml-8' : line.startsWith('  ') ? 'ml-4' : 'ml-0'
          }`}
        >
          {line}
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      {/* 주요 개발 기능 */}
      <div className="mb-8">
        <h3 className="text-gray-800 mb-4 text-lg font-bold border-l-4 border-blue-500 pl-3">
          주요 개발 기능
        </h3>
        {(myDevelopmentData as MyDevelopmentData).features.map((feature) => {
          const isExpanded = expandedItems[feature.id];
          return (
            <div key={feature.id} className="mb-6">
              {/* 기능 제목 - 클릭 가능 */}
              <div
                onClick={() => toggleExpand(feature.id)}
                className="cursor-pointer flex items-center p-3 bg-slate-50 border border-slate-200 rounded-lg mb-3 hover:bg-slate-100 transition-colors"
              >
                <span
                  className={`mr-2 text-sm transition-transform duration-200 ${
                    isExpanded ? 'rotate-90' : 'rotate-0'
                  }`}
                >
                  ▶
                </span>
                <h4 className="text-emerald-600 text-base font-semibold m-0 flex-1">
                  {feature.title}
                </h4>
              </div>
              {/* 기능 설명 */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              {/* 접었다 폈다 내용 */}
              {isExpanded && (
                <div className="ml-4 border-l-[3px] border-slate-200 pl-4">
                  {/* 프론트엔드 섹션 */}
                  <div className="mb-6">
                    <h5 className="text-blue-600 text-[15px] mb-2 font-semibold">
                      🎨 {feature.frontend.title}
                    </h5>
                    <p className="text-gray-600 text-[13px] mb-3 leading-snug">
                      {feature.frontend.description}
                    </p>
                    {renderCodeSnippet(feature.frontend.codeSnippet)}
                  </div>
                  {/* 백엔드 섹션 */}
                  <div className="mb-4">
                    <h5 className="text-red-600 text-[15px] mb-2 font-semibold">
                      ⚙️ {feature.backend.title}
                    </h5>
                    <p className="text-gray-600 text-[13px] mb-3 leading-snug">
                      {feature.backend.description}
                    </p>
                    {renderCodeSnippet(feature.backend.codeSnippet)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* 기술적 도전과 해결 */}
      <div className="mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="text-red-600 text-base font-semibold mb-2">
            🚀 개발 과정동안 구현한 기능
          </h4>
          <ul className="m-0 pl-5 list-disc text-gray-600 text-sm space-y-1.5">
            {(myDevelopmentData as MyDevelopmentData).challenges.technicalChallenges.map((challenge, idx) => (
              <li key={idx}>{challenge}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* 프로젝트 성과 */}
      <div>
        <h3 className="text-gray-800 mb-4 text-lg font-bold border-l-4 border-emerald-600 pl-3">
          프로젝트 성과 및 배운 점
        </h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="mb-3">
            <span className="bg-emerald-600 text-white px-2 py-1 rounded text-xs font-bold">
              성과
            </span>
            <p className="text-green-800 text-sm mt-2 mb-0 leading-relaxed">
              {(myDevelopmentData as MyDevelopmentData).achievements.results}
            </p>
          </div>
          <div>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
              배운 점
            </span>
            <p className="text-blue-800 text-sm mt-2 mb-0 leading-relaxed">
              {(myDevelopmentData as MyDevelopmentData).achievements.learning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};