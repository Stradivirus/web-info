import React from 'react';
import {
  Wrench,
  Sparkles,
  RefreshCw,
  Brain,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  History,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Zap,
  FileCode,
  Scissors,
  Gauge,
  HardDrive,
  PackageCheck,
} from 'lucide-react';

export const StudyContent: React.FC = () => {
  return (
    <div className="space-y-14 py-4">
      {/* 0. 인트로 요약 배너 */}
      <div className="bg-indigo-50/60 p-6 md:p-7 rounded-2xl border-l-4 border-indigo-400 shadow-sm flex items-start gap-4">
        <RefreshCw className="w-8 h-8 text-indigo-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 text-xl">
            &ldquo;일단 돌아가게 만들고, 끊임없이 다시 열어 다듬는다&rdquo;
          </h4>
          <p className="text-slate-600 leading-relaxed text-base">
            코드는 한 번 배포했다고 끝나는 결과물이 아니라, 서비스의 성장과 기술 생태계의 변화에 맞춰 계속 진화해야 하는 유기체입니다.
            기능 구현 우선주의와 중복 제거부터 <strong>발전하는 AI 모델과의 재검증, 보안 하드닝, 기술 스택 전환, 리소스 다이어트, 그리고 미래의 나를 위한 맥락 보존</strong>까지
            주기적인 유지보수를 멈추지 않는 핵심 이유를 정리했습니다.
          </p>
        </div>
      </div>

      {/* 1. 선 기능 구현, 후 지속적 보완 & 중복 코드 다이어트 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Wrench className="w-6 h-6 text-indigo-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
            1. Make It Work, Then Make It Better
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-200/70 rounded-lg text-xs font-bold uppercase tracking-wider">
                Step 1 · 초기 구축
              </span>
              <Zap className="w-5 h-5 text-blue-500" />
            </div>
            <h4 className="font-bold text-slate-800 text-lg">일단 핵심 기능부터 돌아가게</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              처음부터 완벽한 구조와 모든 예외 처리를 고민하느라 시작도 못 하는 것보다,
              <strong> 핵심 비즈니스 로직이 실제로 돌아가는 상태(MVP)</strong>를 빠르게 만드는 것이 우선입니다.
              직접 화면을 띄우고 데이터를 흘려보내야 진짜 필요한 요구사항이 보이기 때문입니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 border border-indigo-200/70 rounded-lg text-xs font-bold uppercase tracking-wider">
                Step 2 · 지속적 보완
              </span>
              <RefreshCw className="w-5 h-5 text-indigo-500" />
            </div>
            <h4 className="font-bold text-slate-800 text-lg">&lsquo;돌아가는 코드&rsquo;를 &lsquo;좋은 코드&rsquo;로</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              기능이 돌아간다고 해서 거기서 손을 떼면 기술 부채가 쌓입니다.
              급하게 구현하느라 빠졌던 예외 처리와 엣지 케이스, UI/UX 디테일을
              <strong> 주기적으로 보완하는 유지보수 사이클</strong>이 프로젝트를 완성도 있게 만듭니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-purple-50 text-purple-600 border border-purple-200/70 rounded-lg text-xs font-bold uppercase tracking-wider">
                Step 3 · 코드 다이어트
              </span>
              <Scissors className="w-5 h-5 text-purple-500" />
            </div>
            <h4 className="font-bold text-slate-800 text-lg">&lsquo;복붙&rsquo;으로 불어난 중복 걷어내기</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              기능을 빠르게 붙이다 보면 비슷한 컴포넌트나 로직이 복제되기 쉽습니다.
              나중에 버튼 하나를 바꿀 때 파일 10개를 고치는 지옥을 겪지 않으려면,
              <strong> 주기적으로 중복을 찾아내 공통 모듈로 압축(DRY)</strong>하는 정리가 필수적입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 2. 배포 후 발견되는 사각지대 & 진화하는 AI와의 재협업 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Sparkles className="w-6 h-6 text-amber-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
            2. Post-Deploy Blind Spots &amp; Evolving AI
          </h3>
        </div>

        <div className="bg-slate-50/80 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 배포 후 사각지대 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-rose-500 font-bold text-lg">
                <AlertCircle className="w-5 h-5" />
                <h4>배포 후에야 비로소 보이는 운영상의 빈틈</h4>
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                개발 당시 로컬 환경에서는 나도, AI도 미처 생각하지 못했던 엣지 케이스나 네트워크·성능 병목이 실제 배포 후 운영 환경에서 드러나곤 합니다.
                실제 트래픽과 데이터를 겪으며 발견된 사각지대는 주기적인 코드 점검을 통해서만 메울 수 있습니다.
              </p>
            </div>

            {/* AI 모델 성능 향상 */}
            <div className="bg-indigo-50/40 p-6 rounded-2xl border border-indigo-100/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-indigo-600 font-bold text-lg">
                <Cpu className="w-5 h-5" />
                <h4>시간이 지날수록 더 똑똑해지는 AI</h4>
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                바이브 코딩에서 가장 흥미로운 점은 <strong>시간이 지나면 AI 모델 자체의 추론 능력과 코딩 성능도 비약적으로 좋아진다</strong>는 것입니다.
                예전 모델과 함께 짰던 코드를 최신 AI에게 다시 검토시키면, 당시엔 놓쳤던 비효율이나 잠재적 버그를 기가 막히게 찾아내어 한 단계 높은 품질로 업그레이드할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="bg-white px-5 py-4 rounded-xl border border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2 font-medium text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>과거의 나 + 과거의 AI가 작성한 레거시 코드</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 hidden sm:block" />
            <div className="flex items-center gap-2 font-bold text-indigo-600">
              <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>더 쌓인 내 경험 + 업그레이드된 최신 AI로 주기적 재검증 및 리팩토링</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 보안 취약점(CVE) 방어 및 코드 하드닝 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <ShieldAlert className="w-6 h-6 text-rose-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
            3. Security Patching &amp; Code Hardening
          </h3>
        </div>

        <div className="bg-rose-50/40 p-5 md:p-6 rounded-2xl border border-rose-200/70 mb-6 flex items-start gap-3.5">
          <Lock className="w-6 h-6 text-rose-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            <strong>&ldquo;내가 코드를 한 줄도 수정하지 않아도, 시간이 지나면 보안은 저절로 취약해진다.&rdquo;</strong>
            <br />
            외부 라이브러리의 신규 취약점(CVE)은 매일 발견되며, 초기 개발 시 편의를 위해 열어둔 설정들은 운영 단계에서 치명적인 공격 표면이 됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2.5">
            <h4 className="font-bold text-rose-600 text-lg flex items-center gap-2">
              <PackageCheck className="w-5 h-5" />
              패키지 취약점(CVE) 패치
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              React(<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">npm</code>), Python(<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">pip</code>), Spring(<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">Gradle</code>) 등 외부 의존성의 보안 권고를 주기적으로 점검하고 패치하여 알려진 취약점 공격을 차단합니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2.5">
            <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-500" />
              초기 설정의 보안 고삐 죄기
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              빠른 개발을 위해 넓게 열어두었던 CORS 허용 범위, 하드코딩된 설정값의 환경변수(<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">.env</code>) 분리 여부, DB 및 API 접근 권한을 최소 권한 원칙으로 다시 잠급니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2.5">
            <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              AI 생성 코드 보안 재검증
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              AI는 별도 지시가 없으면 &lsquo;기능 동작&rsquo;을 최우선으로 작성하기 때문에 입력값 검증이나 인가(Authorization) 체크를 누락할 수 있습니다. 보안 관점의 주기적 코드 리뷰가 필수입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 프로젝트 체급 성장에 맞춘 기술 스택 진화 & 생태계 도태 방지 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Layers className="w-6 h-6 text-emerald-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
            4. Tech Stack Evolution &amp; Preventing Deprecation
          </h3>
        </div>

        <p className="text-slate-600 text-base leading-relaxed mb-6">
          서비스의 규모가 커지거나 안정성이 중요해지면 처음에 빠르게 시작하기 위해 선택했던 도구의 한계가 찾아옵니다.
          평소에 코드 구조를 꾸준히 관리해 두었기 때문에 과감한 <strong>기술 스택 전환(Migration)</strong>과 <strong>생태계 최신화</strong>가 가능했습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Case 1: React -> TS */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  Frontend Safety
                </span>
                <ShieldCheck className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex items-center gap-2 font-mono font-bold text-slate-800 text-base md:text-lg pt-1">
                <span className="text-slate-500">React (JS)</span>
                <ArrowRight className="w-4 h-4 text-blue-500" />
                <span className="text-blue-600">TypeScript</span>
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                순수 리액트(JS)로만 작성했던 프로젝트가 커지면서 데이터 구조를 한눈에 파악하기 어려워졌습니다.
                <strong> TypeScript를 도입</strong>해 컴파일 단계에서 타입 오류를 잡고 컴포넌트 간 데이터 규격을 명확히 만들었습니다.
              </p>
            </div>
          </div>

          {/* Case 2: Flask -> FastAPI */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                  Python Backend
                </span>
                <Zap className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="flex items-center gap-2 font-mono font-bold text-slate-800 text-base md:text-lg pt-1">
                <span className="text-slate-500">Flask</span>
                <ArrowRight className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600">FastAPI</span>
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                가볍게 API를 띄우기 좋았던 Flask에서 더 나아가, 비동기(Async) 처리 성능과 Pydantic 기반의 데이터 검증,
                자동 Swagger 문서화를 위해 <strong>FastAPI로 백엔드를 전환</strong>하여 생산성과 성능을 동시에 끌어올렸습니다.
              </p>
            </div>
          </div>

          {/* Case 3: Django -> Spring */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                  Enterprise Scale
                </span>
                <Layers className="w-5 h-5 text-purple-500" />
              </div>
              <div className="flex items-center gap-2 font-mono font-bold text-slate-800 text-base md:text-lg pt-1">
                <span className="text-slate-500">Django</span>
                <ArrowRight className="w-4 h-4 text-purple-500" />
                <span className="text-purple-600">Spring</span>
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                초기 프로토타이핑과 빠른 웹 구축을 도와줬던 Django에서 출발해, 프로젝트의 규모를 본격적으로 키우고
                엔터프라이즈급 아키텍처와 생태계를 적용하기 위해 <strong>Spring Framework로 체급을 확장</strong>했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Deprecated 방지 서브 배너 */}
        <div className="bg-slate-50/80 p-5 md:p-6 rounded-2xl border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-bold text-slate-800 text-base md:text-lg flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-emerald-500" />
              라이브러리 지원 종료(Deprecated) 및 생태계 도태 방지
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              1~2년만 버전을 방치해도 기존 문법이 <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-xs">Deprecated</code>되어 나중에 손대려면 사실상 재작성(Rewrite) 수준이 됩니다.
              게다가 <strong>최신 AI들도 신버전 문법 기준으로 코드를 제안</strong>하기 때문에, 주기적으로 버전을 맞춰 두어야 AI와의 호흡도 어긋나지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 5. 리소스·성능 최적화와 인프라 다이어트 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Gauge className="w-6 h-6 text-sky-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
            5. Performance &amp; Resource Optimization
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 border border-sky-100">
              <HardDrive className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-800">정적 에셋 분리 및 빌드 경량화</h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                처음엔 코드 저장소 안에 이미지나 영상을 함께 넣고 시작하더라도, 프로젝트가 커지면 빌드 속도와 배포 용량에 부담이 됩니다.
                주기적인 정비를 통해 무거운 미디어 파일을 <strong>Oracle Cloud Storage로 분리</strong>하여 코드베이스를 가볍게 유지합니다.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 border border-emerald-100">
              <Gauge className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-800">코드 스플리팅 &amp; 서버 리소스 절감</h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                기능이 늘어날수록 초기 로딩 속도가 느려지거나 불필요한 API/DB 쿼리가 발생할 수 있습니다.
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs mx-1">React.lazy</code> 기반 코드 스플리팅과 백그라운드 비동기 처리 등으로
                <strong> 사용자 체감 속도와 서버 리소스를 지속적으로 최적화</strong>합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 내가 짠 코드도 시간이 지나면 잊어버린다 */}
      <section className="bg-slate-50/90 border border-slate-200/80 rounded-3xl p-7 md:p-9 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-6 h-6 text-rose-500" />
          <h3 className="text-2xl font-bold text-slate-800">
            6. &ldquo;분명 내가 만든 건데 기억이 안 날 때가 있다&rdquo;
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-slate-600 text-base leading-relaxed">
              여러 프로젝트를 동시에 만들고 운영하다 보면, 몇 달 전에 분명 내가 직접 고민해서 만든 코드인데도
              오랜만에 다시 열어보면 <strong>&ldquo;이걸 왜 이렇게 짰지?&rdquo;</strong> 하고 낯설게 느껴질 때가 있습니다.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              인간의 기억력은 휘발되기 때문에, 기억에 의존하는 코드는 시간이 지날수록 손대기 무서운 레거시가 됩니다.
              주기적으로 코드를 열어 <strong>폴더 구조를 직관적으로 정리하고, 비대해진 파일을 쪼개고, 의도가 담긴 주석(Vibe)을 최신화</strong>해 두는 것은
              결국 몇 달 뒤 다시 코드를 열어볼 &lsquo;미래의 나&rsquo;와 AI가 헤매지 않도록 길을 닦아두는 가장 확실한 투자입니다.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <h4 className="font-bold text-slate-800 text-base flex items-center gap-2 border-b border-slate-100 pb-2.5">
              <History className="w-4 h-4 text-indigo-500" />
              미래의 나를 위한 유지보수 체크리스트
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <FileCode className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>맥락 주석(Vibe) 점검:</strong> 오랜만에 봐도 왜 이 로직이 필요한지 단번에 이해되는가?
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <FileCode className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>구조 단순화:</strong> 한 파일에 너무 많은 역할이 섞여 있어 파악하는 데 시간이 걸리지 않는가?
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <FileCode className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>데드 코드 정리:</strong> 더 이상 쓰지 않는 임시 코드나 구버전 흔적이 남아 혼란을 주지 않는가?
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyContent;
