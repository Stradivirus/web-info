import React from 'react';
import { Layers, GitCommit, CheckCircle2, FileCode, Sparkles } from 'lucide-react';
import { getRecordsImage } from '../../config/storage';

const refactoringCommit: string = getRecordsImage('refactoring.png');
const refactoringCommit2: string = getRecordsImage('refactoring2.png');

export const StudyContent: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      {/* 1. 리팩토링 배경 */}
      <div className="bg-purple-50 p-6 rounded-2xl border-l-4 border-purple-500 shadow-sm flex items-start gap-4">
        <Sparkles className="w-7 h-7 text-purple-600 mt-0.5 flex-shrink-0" />
        <div className="space-y-1.5">
          <h4 className="font-bold text-purple-900 text-lg">데이터와 UI의 결합도를 낮춘 컴포넌트 아키텍처 개선</h4>
          <p className="text-purple-800/90 leading-relaxed text-sm">
            여러 프로젝트 페이지마다 동일한 UI 레이아웃이 복제되어 있고, 프로젝트 설명 데이터가 JSX 내부에 하드코딩되어 있던 문제를 해결했습니다.
            <strong> 데이터 레이어(<code className="bg-purple-100 px-1 rounded">data.ts</code>)와 공통 렌더러 컴포넌트</strong>를 분리하여 코드 라인 수를 대폭 감축했습니다.
          </p>
        </div>
      </div>

      {/* 2. 핵심 리팩토링 전략 */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <Layers className="w-5 h-5 text-purple-600" />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Refactoring Strategy</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-indigo-600 text-sm flex items-center gap-2">
              <FileCode className="w-4 h-4" />
              데이터·뷰 분리 (Data-Driven)
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              컴포넌트 내부에 하드코딩된 프로젝트 메타데이터(제목, 기간, 기술 스택, 설명)를 독립적인 <code className="bg-slate-100 px-1 rounded">data</code> 모듈로 분리했습니다.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-purple-600 text-sm flex items-center gap-2">
              <Layers className="w-4 h-4" />
              공통 UI 컴포넌트 추상화
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              5개 이상의 프로젝트 페이지에서 반복되던 아키텍처 뷰어, 이미지 슬라이더, 기술 스택 배지 영역을 공통 컴포넌트로 통합했습니다.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="font-bold text-emerald-600 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              스타일 모듈화 및 확장성
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              중복 선언되던 스타일 규칙을 일원화하여 스타일 충돌을 방지하고, 신규 프로젝트 추가 시 데이터 파일만 작성하면 즉시 렌더링되도록 개선했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Git 커밋 지표 및 결과 */}
      <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <GitCommit className="w-5 h-5 text-slate-700" />
          <h3 className="text-xl font-bold text-slate-800">Git 커밋 내역 및 코드 감축 지표</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Portfolio 프로젝트 리팩토링</h4>
                <p className="text-xs text-slate-500 mt-0.5">18개 파일 변경 · 컴포넌트 및 데이터 분리</p>
              </div>
              <div className="text-right font-mono text-xs">
                <div className="text-emerald-600 font-bold">+889 lines</div>
                <div className="text-rose-500 font-bold">-2,077 lines</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md">
              <img
                src={refactoringCommit}
                alt="포트폴리오 리팩토링 커밋 내역"
                className="w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Exam_serverless 프로젝트 리팩토링</h4>
                <p className="text-xs text-slate-500 mt-0.5">15개 파일 변경 · 공통 컴포넌트 모듈화</p>
              </div>
              <div className="text-right font-mono text-xs">
                <div className="text-emerald-600 font-bold">+796 lines</div>
                <div className="text-rose-500 font-bold">-1,171 lines</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md">
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