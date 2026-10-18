import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Cloud, FileCode, Zap, CheckCircle2, BarChart3, FolderTree } from 'lucide-react';
import { getRecordsImage } from '../../config/storage';

const oracleApiMonitoring = getRecordsImage('OracleApiMonitoring.png');
const oracleObjectStorage = getRecordsImage('OracleBucket.png');

export const StudyContent: React.FC = () => {
  const [isStorageCodeVisible, setIsStorageCodeVisible] = useState(false);
  const [isCaddyCodeVisible, setIsCaddyCodeVisible] = useState(false);
  const [isBeforeAfterVisible, setIsBeforeAfterVisible] = useState(false);

  return (
    <div className="space-y-12 py-4">
      {/* 1. 요약 배너 */}
      <div className="bg-emerald-50/50 p-6 md:p-7 rounded-2xl border-l-4 border-emerald-300 shadow-sm flex items-start gap-4">
        <Cloud className="w-8 h-8 text-emerald-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 text-xl">정적 에셋 클라우드 스토리지 분리 및 차등 캐싱 최적화</h4>
          <p className="text-slate-600 leading-relaxed text-base">
            React 빌드 번들에 포함되어 있던 대용량 이미지와 데모 비디오를 <strong>Oracle Cloud Object Storage</strong>로 분리하고,
            Caddy 웹서버의 파일 유형별 <strong>차등 캐싱(24시간 / 2주 / 1달)</strong>을 결합해 빌드 시간을 1분 단축하고 재방문 시 API 요청을 0건으로 줄였습니다.
          </p>
        </div>
      </div>

      {/* 2. 3대 핵심 전략 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <FolderTree className="w-6 h-6 text-emerald-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Migration &amp; Caching Strategy</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-bold text-emerald-600 mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              1. OCI Object Storage
            </h4>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• Always Free 퍼블릭 버킷(읽기 전용) 구성</li>
              <li>• <code className="bg-slate-100 px-1 rounded">records/</code>, <code className="bg-slate-100 px-1 rounded">project/</code>, <code className="bg-slate-100 px-1 rounded">video/</code>, <code className="bg-slate-100 px-1 rounded">certifications/</code> 계층 설계</li>
              <li>• 웹팩 번들에서 대용량 바이너리 완전 분리</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              2. React 코드 리팩토링
            </h4>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• <code className="bg-slate-100 px-1 rounded">storage.ts</code> 중앙화된 에셋 URL 헬퍼 구축</li>
              <li>• 무거운 <code className="bg-slate-100 px-1 rounded">require.context</code> 제거 및 정적 매핑</li>
              <li>• 빌드 속도 1분 단축 및 번들 경량화 달성</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-bold text-purple-600 mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full" />
              3. Caddy 차등 캐싱
            </h4>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• CSS/JS: <strong>24시간</strong> · 이미지/폰트: <strong>2주</strong> · 비디오: <strong>1달</strong></li>
              <li>• HTML은 <code className="bg-slate-100 px-1 rounded">no-store</code>로 SPA 최신성 보장</li>
              <li>• 브라우저 캐시 히트로 재방문 시 OCI API 호출 0건</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 주요 구현 코드 (Dark Accordions) */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <FileCode className="w-6 h-6 text-slate-600" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Implementation Code</h3>
        </div>
        <div className="space-y-4">
          {/* storage.ts */}
          <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
            <button
              type="button"
              onClick={() => setIsStorageCodeVisible(!isStorageCodeVisible)}
              className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-emerald-400" />
                <span className="font-mono text-slate-200 text-sm md:text-base">src/config/storage.ts - 중앙화된 URL 관리 시스템</span>
              </div>
              {isStorageCodeVisible ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {isStorageCodeVisible && (
              <pre className="p-6 bg-slate-900 text-sm leading-relaxed text-emerald-300 overflow-x-auto font-mono">
                <code>{`// Oracle Cloud Object Storage 설정
const BUCKET_BASE_URL = 'https://objectstorage.ap-osaka-1.oraclecloud.com/n/axt322c13ce3/b/PortFolio/o/';

// 기본 이미지 URL 생성 함수
export const getImageUrl = (path: string) => \`\${BUCKET_BASE_URL}\${path}\`;

// 도메인별 전용 헬퍼 함수
export const getRecordsImage = (filename: string) => getImageUrl(\`records/\${filename}\`);
export const getProject2Image = (filename: string) => getImageUrl(\`project/2/\${filename}\`);
export const getProject3Image = (filename: string) => getImageUrl(\`project/3/\${filename}\`);
export const getVideoUrl = (filename: string) => getImageUrl(\`video/\${filename}\`);`}</code>
              </pre>
            )}
          </div>

          {/* Before/After */}
          <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
            <button
              type="button"
              onClick={() => setIsBeforeAfterVisible(!isBeforeAfterVisible)}
              className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="font-mono text-slate-200 text-sm md:text-base">Before &amp; After: require.context 제거 및 경량화</span>
              </div>
              {isBeforeAfterVisible ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {isBeforeAfterVisible && (
              <pre className="p-6 bg-slate-900 text-sm leading-relaxed overflow-x-auto font-mono">
                <code>
                  <span className="text-rose-400">{`// [Before] 로컬 assets 번들 포함 & 무거운 require.context
import screenshot1 from '../../../assets/images/project/Project3/screenshot1.png';
const imageContext = require.context('../../../assets/images/project/Project3', false, /screenshot\\d+\\.png$/);`}</span>
                  {'\n\n'}
                  <span className="text-emerald-300">{`// [After] Oracle Object Storage URL 매핑
import { getProject3Image } from '../../../config/storage';
const screenshots = [1, 2].map(num => ({
  id: String(num),
  type: 'image',
  url: getProject3Image(\`screenshot\${num}.png\`),
  caption: captions[String(num)] || \`스크린샷 \${num}\`
}));`}</span>
                </code>
              </pre>
            )}
          </div>

          {/* Caddyfile */}
          <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
            <button
              type="button"
              onClick={() => setIsCaddyCodeVisible(!isCaddyCodeVisible)}
              className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-sky-400" />
                <span className="font-mono text-slate-200 text-sm md:text-base">Caddyfile - 확장자별 차등 Cache-Control 및 보안 헤더</span>
              </div>
              {isCaddyCodeVisible ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {isCaddyCodeVisible && (
              <pre className="p-6 bg-slate-900 text-sm leading-relaxed text-slate-300 overflow-x-auto font-mono">
                <code>{`header {
    # CSS, JS 파일 - 24시간 캐싱
    ?*.css "Cache-Control" "public, max-age=86400"
    ?*.js  "Cache-Control" "public, max-age=86400"

    # 이미지 및 폰트 파일 - 2주 캐싱 (1,209,600초)
    ?*.png  "Cache-Control" "public, max-age=1209600"
    ?*.jpg  "Cache-Control" "public, max-age=1209600"
    ?*.webp "Cache-Control" "public, max-age=1209600"
    ?*.svg  "Cache-Control" "public, max-age=1209600"
    ?*.woff2 "Cache-Control" "public, max-age=1209600"

    # 비디오 파일 - 1달 캐싱 (2,592,000초)
    ?*.mp4 "Cache-Control" "public, max-age=2592000"

    # HTML 파일은 캐시하지 않음 (React SPA 즉시 반영)
    ?*.html "Cache-Control" "no-cache, no-store, must-revalidate"

    # 보안 헤더
    "X-Content-Type-Options" "nosniff"
    "X-Frame-Options" "DENY"
    "Referrer-Policy" "strict-origin-when-cross-origin"
}`}</code>
              </pre>
            )}
          </div>
        </div>
      </section>

      {/* 4. Oracle Cloud 버킷 & 모니터링 스크린샷 */}
      <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex items-center gap-2.5">
          <BarChart3 className="w-6 h-6 text-emerald-500" />
          <h3 className="text-2xl font-bold text-slate-800">Oracle Cloud 버킷 구조 및 API 모니터링</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          <div className="md:col-span-1 space-y-2">
            <span className="text-sm font-bold text-slate-600 block">폴더 계층 구조</span>
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
              <img
                src={oracleObjectStorage}
                alt="Oracle Cloud Object Storage 폴더 구조"
                className="w-full"
              />
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-sm font-bold text-slate-600 block">Object Storage API 사용량 모니터링</span>
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
              <img
                src={oracleApiMonitoring}
                alt="Oracle Cloud API 사용량 모니터링 그래프"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. 성과 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-200/60">
          <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            정량적 개선 결과
          </h4>
          <ul className="text-sm md:text-base text-slate-600 space-y-2.5 leading-relaxed">
            <li>• 대용량 미디어 제거로 React 빌드 번들 크기 대폭 감량</li>
            <li>• CI/CD 프론트엔드 빌드 시간 약 1분 단축</li>
            <li>• 브라우저 캐시 적중을 통해 재방문 시 스토리지 API 요청 0건 달성</li>
          </ul>
        </div>
        <div className="bg-indigo-50/40 p-6 rounded-2xl border border-indigo-200/60">
          <h4 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-500" />
            아키텍처적 가치
          </h4>
          <ul className="text-sm md:text-base text-slate-600 space-y-2.5 leading-relaxed">
            <li>• 코드 배포 없이도 스토리지 버킷 교체만으로 미디어 즉시 업데이트 가능</li>
            <li>• 중앙 집중식 <code className="bg-indigo-100/70 px-1.5 py-0.5 rounded text-sm">storage.ts</code> 모듈로 에셋 경로 파편화 해결</li>
            <li>• 클라우드 프리티어 한도를 지키는 비용 최적화 캐싱 전략 확립</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default StudyContent;