import React from 'react';
import { myDevelopmentData } from '../../../pages/TeamProject/TP2/myDevelopmentData';
import type { WorkItem } from '../../../pages/TeamProject/TP2/myDevelopmentData';

export const MyPartTP2: React.FC = () => {
  const renderWorkSection = (items: WorkItem[], sectionTitle: string, borderColorClass: string) => (
    <div className="flex-1 px-0 md:px-4">
      <h3 className={`text-gray-800 mb-6 text-[22px] border-l-4 ${borderColorClass} pl-3 font-bold`}>
        {sectionTitle}
      </h3>
      {items.map((item: WorkItem) => (
        <div
          key={item.id}
          className="mb-6 p-[18px] bg-slate-50 border border-slate-200 rounded-lg"
        >
          <h4 className="text-emerald-600 text-base mb-2.5 font-semibold">
            {item.title}
          </h4>
          <p className="text-gray-600 text-sm mb-1.5 leading-relaxed">
            {item.description}
          </p>
          <p className="text-gray-500 text-[13px] m-0 leading-normal italic">
            {item.details.join(' • ')}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      {/* 데이터 수집 & 정제 - 반응형 2단 레이아웃 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b-2 border-gray-200 pb-8">
        {/* 왼쪽: 데이터 수집 */}
        {renderWorkSection(myDevelopmentData.dataCollection, '📥 데이터 수집 (MongoDB)', 'border-blue-500')}
        
        {/* 오른쪽: 데이터 정제 */}
        {renderWorkSection(myDevelopmentData.dataProcessing, '⚙️ 데이터 정제 (PostgreSQL)', 'border-purple-600')}
      </div>

      {/* 프로젝트 성과 */}
      <div className="mt-10">
        <h3 className="text-gray-800 mb-6 text-[22px] border-l-4 border-amber-600 pl-3 font-bold">
          프로젝트 성과 및 배운 점
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 왼쪽: 성과 */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 h-full">
            <span className="bg-emerald-600 text-white px-3 py-1.5 rounded-md text-sm font-bold">
              성과
            </span>
            <p className="text-green-800 text-base mt-3 mb-0 leading-[1.8] font-medium whitespace-pre-line">
              {myDevelopmentData.achievements.results}
            </p>
          </div>

          {/* 오른쪽: 배운 점 */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 h-full">
            <span className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-bold">
              배운 점
            </span>
            <p className="text-blue-800 text-base mt-3 mb-0 leading-[1.8] font-medium whitespace-pre-line">
              {myDevelopmentData.achievements.learning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
