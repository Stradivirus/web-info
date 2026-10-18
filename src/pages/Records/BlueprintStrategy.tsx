import React from 'react';
import {
  Database,
  Server,
  Layout,
  GitMerge,
  Search,
  ShieldCheck,
  Zap,
  Coffee,
  Workflow,
  Layers,
  Scissors,
  RotateCcw,
  BookMarked,
} from 'lucide-react';

export const StudyContent: React.FC = () => {
  return (
    <div className="space-y-14 py-4">
      {/* 1. 개발 워크플로우 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Workflow className="w-6 h-6 text-blue-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Logical Step-by-Step Workflow</h3>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative z-10">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600 font-bold text-lg">01</div>
              <h4 className="font-bold text-slate-800 mb-2 text-lg">Data &amp; Schema</h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                DB 스키마와 데이터 흐름을 먼저 정의하여 시스템의 뼈대를 잡습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative z-10">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 text-emerald-600 font-bold text-lg">02</div>
              <h4 className="font-bold text-slate-800 mb-2 text-lg">API &amp; Logic</h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                데이터를 처리할 비즈니스 로직과 API를 완벽하게 구축합니다.
              </p>
            </div>
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-200/80 shadow-sm relative z-10">
              <div className="w-10 h-10 bg-blue-100/80 rounded-xl flex items-center justify-center mb-4 text-blue-700 font-bold text-lg">03</div>
              <h4 className="font-bold text-blue-900 mb-2 text-lg">Functionality First</h4>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                디자인은 잠시 미뤄두고, 기능이 완벽히 도는지 &lsquo;생코드&rsquo;로 검증합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative z-10">
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-4 text-purple-600 font-bold text-lg">04</div>
              <h4 className="font-bold text-slate-800 mb-2 text-lg">UI/UX Polish</h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                검증된 기능을 바탕으로 사용자 경험을 극대화할 수 있는 옷을 입힙니다.
              </p>
            </div>
          </div>
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
        </div>
      </section>

      {/* 2. 유지보수 및 모듈화 전략 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Scissors className="w-6 h-6 text-rose-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Maintenance &amp; Modularization</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50/60 p-7 rounded-2xl border border-slate-200/80 shadow-sm flex gap-5">
            <div className="flex-shrink-0 w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 border border-rose-100">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">300라인의 법칙</h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                파일이 <strong>300줄</strong>을 넘어가면 관심사를 분리할 신호입니다.
                복잡도가 임계점에 도달하기 전에 모듈화하여 관리 효율성을 유지합니다.
              </p>
            </div>
          </div>
          <div className="bg-slate-50/60 p-7 rounded-2xl border border-slate-200/80 shadow-sm flex gap-5">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 border border-emerald-100">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">점진적 고도화</h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                일단 돌아가는 코드를 빠르게 만든 뒤, AI를 활용해 중복 로직을 추출하고 추상화 수준을 높이는 리팩토링을 반복합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 프레임워크 선정 기준 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Layers className="w-6 h-6 text-purple-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Framework Decision Matrix</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Frontend Selection (1/3) */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-base font-bold text-slate-500 uppercase tracking-wider ml-1 flex items-center gap-2">
              <Layout className="w-5 h-5" /> Frontend
            </h4>
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-white rounded-xl border border-slate-200/80 flex items-center justify-center shadow-sm">
                  <Search className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 text-lg font-mono">React</h5>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">방대한 자료와 커뮤니티로 가장 빠른 문제 해결이 가능합니다.</p>
                </div>
              </div>
              <div className="flex gap-4 border-t pt-6 border-slate-200/80">
                <div className="flex-shrink-0 w-11 h-11 bg-white rounded-xl border border-slate-200/80 flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 text-lg font-mono">TypeScript</h5>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">오류를 즉각적으로 찾아내어 안정성을 극대화합니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Selection (2/3) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-slate-500 uppercase tracking-wider ml-1 flex items-center gap-2">
              <Server className="w-5 h-5" /> Backend
            </h4>
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-rose-50/80 rounded-xl flex items-center justify-center text-rose-500">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-lg font-mono">Spring Framework</h5>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      국내 Java 생태계의 표준성과 대규모 엔터프라이즈 환경에서의 안정성을 고려한 선정.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-blue-50/80 rounded-xl flex items-center justify-center text-blue-500">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-lg font-mono">FastAPI</h5>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      파이썬의 높은 생산성과 현대적인 비동기 성능을 동시에 확보하기 위한 선택.
                    </p>
                  </div>
                </div>
              </div>
              {/* Django Narrative */}
              <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/80 flex items-start gap-4">
                <BookMarked className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="font-bold text-slate-800 text-lg">Django: The Foundation</h5>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    나의 첫 번째 프레임워크. 웹 개발의 MVC 패턴을 깊이 있게 이해했으며, Spring과 FastAPI를 빠르게 습득할 수 있는 밑거름이 되었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 데이터베이스 진화 전략 (연한 톤 카드) */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Database className="w-6 h-6 text-emerald-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Database Evolution</h3>
        </div>
        <div className="bg-slate-50/80 p-7 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <GitMerge className="w-32 h-32" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h4 className="text-xl md:text-2xl font-bold text-slate-800">Prototype to Robust Schema</h4>
              <p className="text-slate-600 text-base leading-relaxed">
                초기에는 <strong>MongoDB Atlas</strong>로 유연하게 형태를 검증하고, 로직이 정교해지면 <strong>Postgres/MySQL</strong>로 정규화하여 데이터 무결성을 확보합니다.
              </p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 bg-white p-5 rounded-2xl border border-emerald-200/70 text-center shadow-sm">
                <div className="text-emerald-600 font-bold mb-1 text-sm uppercase">Step 1</div>
                <div className="text-lg text-slate-800 font-bold">MongoDB Atlas</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Verification</div>
              </div>
              <div className="text-slate-400 font-bold text-xl">➔</div>
              <div className="flex-1 bg-white p-5 rounded-2xl border border-blue-200/70 text-center shadow-sm">
                <div className="text-blue-600 font-bold mb-1 text-sm uppercase">Step 2</div>
                <div className="text-lg text-slate-800 font-bold">Postgres / MySQL</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Normalization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 결론 */}
      <div className="bg-indigo-50/50 p-6 md:p-7 rounded-2xl border-l-4 border-indigo-300 flex items-center gap-4 shadow-sm">
        <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
          &ldquo;지속적으로 쪼개고, 끊임없이 다듬는다.&rdquo; 관리 가능한 규모를 유지하며 AI와 함께 진화하는 것, 이것이 현대적 지휘자의 설계 방식입니다.
        </p>
      </div>
    </div>
  );
};

export default StudyContent;
