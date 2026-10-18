import React from 'react';
import { Layers, GitCommit, CheckCircle2, FileCode } from 'lucide-react';
import { getRecordsImage } from '../../config/storage';

const refactoringCommit: string = getRecordsImage('refactoring.png');
const refactoringCommit2: string = getRecordsImage('refactoring2.png');

export const StudyContent: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      {/* 1. 리팩토링 배경 */}
      <div className="bg-purple-50/50 p-6 md:p-7 rounded-2xl border-l-4 border-purple-300 shadow-sm flex items-start gap-4">
        <Layers className="w-8 h-8 text-purple-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 text-xl">데이터와 UI의 결합도를 낮춘 컴포넌트 아키텍처 개선</h4>
          <p className="text-slate-600 leading-relaxed text-base">
            여러 프로젝트 페이지마다 동일한 UI 레이아웃이 복제되어 있고, 프로젝트 설명 데이터가 JSX 내부에 하드코딩되어 있던 문제를 해결했습니다.
            <strong> 데이터 레이어(<code className="bg-purple-100/70 px-1.5 py-0.5 rounded text-purple-800">data.ts</code>)와 공통 렌더러 컴포넌트</strong>를 분리하여 코드 라인 수를 대폭 감축했습니다.
          </p>
        </div>
      </div>

      {/* 2. 핵심 리팩토링 전략 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Layers className="w-6 h-6 text-purple-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Refactoring Strategy</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-2.5">
            <h4 className="font-bold text-indigo-600 text-lg flex items-center gap-2">
              <FileCode className="w-5 h-5" />
              데이터·뷰 분리 (Data-Driven)
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              컴포넌트 내부에 하드코딩된 프로젝트 메타데이터(제목, 기간, 기술 스택, 설명)를 독립적인 <code className="bg-slate-100 px-1.5 py-0.5 rounded">data</code> 모듈로 분리했습니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-2.5">
            <h4 className="font-bold text-purple-600 text-lg flex items-center gap-2">
              <Layers className="w-5 h-5" />
              공통 UI 컴포넌트 추상화
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              5개 이상의 프로젝트 페이지에서 반복되던 아키텍처 뷰어, 이미지 슬라이더, 기술 스택 배지 영역을 공통 컴포넌트로 통합했습니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-2.5">
            <h4 className="font-bold text-emerald-600 text-lg flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              스타일 모듈화 및 확장성
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              중복 선언되던 스타일 규칙을 일원화하여 스타일 충돌을 방지하고, 신규 프로젝트 추가 시 데이터 파일만 작성하면 즉시 렌더링되도록 개선했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Git 커밋 지표 및 결과 */}
      <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex items-center gap-2.5">
          <GitCommit className="w-6 h-6 text-slate-600" />
          <h3 className="text-2xl font-bold text-slate-800">Git 커밋 내역 및 코드 감축 지표</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base md:text-lg">Portfolio 프로젝트 리팩토링</h4>
                <p className="text-sm text-slate-500 mt-0.5">18개 파일 변경 · 컴포넌트 및 데이터 분리</p>
              </div>
              <div className="text-right font-mono text-sm">
                <div className="text-emerald-600 font-bold">+889 lines</div>
                <div className="text-rose-500 font-bold">-2,077 lines</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
              <img
                src={refactoringCommit}
                alt="포트폴리오 리팩토링 커밋 내역"
                className="w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base md:text-lg">Exam_serverless 프로젝트 리팩토링</h4>
                <p className="text-sm text-slate-500 mt-0.5">15개 파일 변경 · 공통 컴포넌트 모듈화</p>
              </div>
              <div className="text-right font-mono text-sm">
                <div className="text-emerald-600 font-bold">+796 lines</div>
                <div className="text-rose-500 font-bold">-1,171 lines</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
              <img
                src={refactoringCommit2}
                alt="exam_serverless 리팩토링 커밋 내역"
                className="w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default StudyContent;