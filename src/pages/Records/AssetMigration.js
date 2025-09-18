import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getRecordsImage } from '../../config/storage';

const oracleApiMonitoring = getRecordsImage('OracleApiMonitoring.png');
const oracleObjectStorage = getRecordsImage('OracleBucket.png');

export const StudyContent = ({ onImageClick, registerImages }) => {
  const [isStorageCodeVisible, setIsStorageCodeVisible] = useState(false);
  const [isCaddyCodeVisible, setIsCaddyCodeVisible] = useState(false);
  const [isBeforeAfterVisible, setIsBeforeAfterVisible] = useState(false);

  useEffect(() => {
    if (registerImages) {
      registerImages([oracleApiMonitoring, oracleObjectStorage]);
    }
  }, [registerImages]);    return (
        <div className="space-y-8">
            <section>
                <h3 className="text-lg font-medium mb-3">리팩토링 배경</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>React 번들에 포함된 대용량 이미지/비디오 파일로 인한 번들 크기 증가</li>
                    <li>확장 가능한 에셋 관리 체계와 CDN 효과를 통한 성능 최적화 필요성</li>
                </ul>
            </section>

            <section>
                <h3 className="text-lg font-medium mb-3">구현 환경</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Oracle Cloud Object Storage (Always Free Tier)</li>
                    <li>React 앱 (기존 로컬 assets 구조)</li>
                    <li>Caddy 웹서버 (캐싱 최적화)</li>
                </ul>
            </section>

            <section>
                <h3 className="text-lg font-medium mb-3">구현 내용</h3>
                <div className="space-y-4 text-gray-600">
                    <div>
                        <h4 className="font-medium mb-2">1. Oracle Cloud Object Storage 설정</h4>
                        <div className="space-y-2 pl-4">
                            <p>- 퍼블릭 버킷 생성 및 읽기 전용 권한 설정</p>
                            <p>- 폴더 구조 설계: records/, project/, video/, profile/, certifications/ 등</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium mb-2">2. React 앱 리팩토링</h4>
                        <div className="space-y-2 pl-4">
                            <p>- storage.js 중앙화된 URL 관리 시스템 구축</p>
                            <p>- require.context 제거 및 동적 import 최적화</p>
                            <p>- 모든 프로젝트와 Records 컴포넌트의 Oracle Storage 함수 적용</p>
                            <p>- 이미지 모달 기능 제거로 UI 단순화</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium mb-2">3. 성능 최적화</h4>
                        <div className="space-y-2 pl-4">
                            <p>- Caddy 웹서버 캐싱 설정: 이미지 2주, 비디오 1달</p>
                            <p>- Oracle Cloud API 요청 최소화 전략 수립</p>
                            <p>- 브라우저 캐시 활용으로 재방문 시 API 요청 0건</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="text-lg font-medium mb-3">주요 코드</h3>
                <div className="space-y-4">
                    <div>
                        <button
                            onClick={() => setIsStorageCodeVisible(!isStorageCodeVisible)}
                            className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <span className="font-mono text-gray-600">storage.js - 중앙화된 URL 관리</span>
                                </div>
                                {isStorageCodeVisible ?
                                    <ChevronUp className="w-5 h-5 text-gray-500" /> :
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                }
                            </div>
                        </button>
                        {isStorageCodeVisible && (
                            <div className="border-x border-b border-gray-200 rounded-b-lg">
                                <div className="p-4 bg-gray-100 border-b border-gray-200">
                                    <p className="text-sm text-gray-700 mb-2">
                                        <strong>핵심 아이디어</strong>: 폴더별 전용 함수로 중앙화된 URL 관리 시스템 구축
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                                        <div>
                                            <strong>Records 폴더</strong>: 기술 문서 이미지
                                        </div>
                                        <div>
                                            <strong>Project 폴더</strong>: 프로젝트별 스크린샷
                                        </div>
                                        <div>
                                            <strong>Video 폴더</strong>: 데모 비디오 파일
                                        </div>
                                        <div>
                                            <strong>Profile 폴더</strong>: 프로필 이미지
                                        </div>
                                    </div>
                                </div>
                                <pre className="p-4 overflow-x-auto bg-gray-900 rounded-b-lg">
                                    <code className="text-sm font-mono text-green-400">
                                        {`// Oracle Cloud Object Storage 설정
const BUCKET_BASE_URL = 'https://objectstorage.ap-osaka-1.oraclecloud.com/n/axt322c13ce3/b/PortFolio/o/';

// 기본 이미지 URL 생성 함수
export const getImageUrl = (path) => {
  return \`\${BUCKET_BASE_URL}\${path}\`;
};

// Records 폴더 이미지 전용 함수
export const getRecordsImage = (filename) => {
  return getImageUrl(\`records/\${filename}\`);
};

// Project 별 폴더 이미지 전용 함수들
export const getProject2Image = (filename) => {
  return getImageUrl(\`project/2/\${filename}\`);
};

export const getProject3Image = (filename) => {
  return getImageUrl(\`project/3/\${filename}\`);
};

// Video 폴더 비디오 전용 함수
export const getVideoUrl = (filename) => {
  return getImageUrl(\`video/\${filename}\`);
};`}
                                    </code>
                                </pre>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            onClick={() => setIsBeforeAfterVisible(!isBeforeAfterVisible)}
                            className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <span className="font-mono text-gray-600">마이그레이션 전후 비교</span>
                                </div>
                                {isBeforeAfterVisible ?
                                    <ChevronUp className="w-5 h-5 text-gray-500" /> :
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                }
                            </div>
                        </button>
                        {isBeforeAfterVisible && (
                            <div className="border-x border-b border-gray-200 rounded-b-lg">
                                <div className="p-4 bg-gray-100 border-b border-gray-200">
                                    <p className="text-sm text-gray-700 mb-2">
                                        <strong>주요 변경사항</strong>: require.context 복잡한 구조 → 간단한 Oracle Storage 함수 호출
                                    </p>
                                </div>
                                <pre className="p-4 overflow-x-auto bg-gray-900 rounded-b-lg">
                                    <code className="text-sm font-mono">
                                        <span className="text-orange-400">
{`// 마이그레이션 전 (로컬 assets)
import screenshot1 from '../../../assets/images/project/Project3/screenshot1.png';
const imageContext = require.context('../../../assets/images/project/Project3', false, /screenshot\\d+\\.png$/);`}
                                        </span>
                                        <span className="text-green-400">
{`

// 마이그레이션 후 (Oracle Storage)
import { getProject3Image } from '../../../config/storage';
const screenshot1 = getProject3Image('screenshot1.png');

// 간단한 배열 맵핑으로 변경
const screenshots = [1, 2].map(num => ({
  id: String(num),
  type: 'image',
  url: getProject3Image(\`screenshot\${num}.png\`),
  caption: captions[String(num)] || \`스크린샷 \${num}\`
}));`}
                                        </span>
                                    </code>
                                </pre>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            onClick={() => setIsCaddyCodeVisible(!isCaddyCodeVisible)}
                            className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <span className="font-mono text-gray-600">Caddy 캐싱 최적화 설정</span>
                                </div>
                                {isCaddyCodeVisible ?
                                    <ChevronUp className="w-5 h-5 text-gray-500" /> :
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                }
                            </div>
                        </button>
                        {isCaddyCodeVisible && (
                            <div className="border-x border-b border-gray-200 rounded-b-lg">
                                <div className="p-4 bg-gray-100 border-b border-gray-200">
                                    <p className="text-sm text-gray-700 mb-2">
                                        <strong>캐싱 전략</strong>: 파일 변경 빈도에 따른 차등 캐싱으로 Oracle API 요청 최소화
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">
                                        <div>
                                            <strong>24시간</strong>: CSS, JS<br />
                                            <span className="text-gray-500">(자주 업데이트)</span>
                                        </div>
                                        <div>
                                            <strong>2주</strong>: 이미지, 폰트<br />
                                            <span className="text-gray-500">(거의 변경 없음)</span>
                                        </div>
                                        <div>
                                            <strong>1달</strong>: 비디오<br />
                                            <span className="text-gray-500">(대용량, 변경 없음)</span>
                                        </div>
                                    </div>
                                </div>
                                <pre className="p-4 overflow-x-auto bg-gray-900 rounded-b-lg">
                                    <code className="text-sm font-mono text-green-400">
{`  # 정적 파일 캐싱 설정
    header {
        # CSS, JS 파일 - 24시간 캐싱
        ?*.css "Cache-Control" "public, max-age=`}<span className="text-orange-400">86400</span>{`"
        ?*.js "Cache-Control" "public, max-age=`}<span className="text-orange-400">86400</span>{`"
        
        # 이미지 파일 - 2주 캐싱 (1,209,600초)
        ?*.png "Cache-Control" "public, max-age=`}<span className="text-orange-400">1209600</span>{`"
        ?*.jpg "Cache-Control" "public, max-age=`}<span className="text-orange-400">1209600</span>{`"
        ?*.jpeg "Cache-Control" "public, max-age=`}<span className="text-orange-400">1209600</span>{`"
        ?*.gif "Cache-Control" "public, max-age=`}<span className="text-orange-400">1209600</span>{`"
        ?*.webp "Cache-Control" "public, max-age=`}<span className="text-orange-400">1209600</span>{`"
        ?*.svg "Cache-Control" "public, max-age=`}<span className="text-orange-400">1209600</span>{`"
        ?*.ico "Cache-Control" "public, max-age=`}<span className="text-orange-400">1209600</span>{`"
        
        # 폰트 파일 - 2주 캐싱
        ?*.woff "Cache-Control" "public, max-age=`}<span className="text-orange-400">1209600</span>{`"
        ?*.woff2 "Cache-Control" "public, max-age=`}<span className="text-orange-400">1209600</span>{`"
        ?*.ttf "Cache-Control" "public, max-age=`}<span className="text-orange-400">1209600</span>{`"
        ?*.eot "Cache-Control" "public, max-age=`}<span className="text-orange-400">1209600</span>{`"
        
        # 비디오 파일 - 1달 캐싱 (2,592,000초)
        ?*.mp4 "Cache-Control" "public, max-age=`}<span className="text-orange-400">2592000</span>{`"
        
        # HTML 파일은 캐시하지 않음 (React SPA 권장)
        ?*.html "Cache-Control" "no-cache, no-store, must-revalidate"
        
        # 보안 헤더
        "X-Content-Type-Options" "nosniff"
        "X-Frame-Options" "DENY"
        "Referrer-Policy" "strict-origin-when-cross-origin"
    }
}`}
                                    </code>
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section>
                <h3 className="text-lg font-medium mb-3">개선된 점</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-semibold text-green-800 mb-3">✅ 결과</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                            <li>• React 번들 크기 대폭 감소 (이미지/비디오 파일 제거)</li>
                            <li>• 빌드 시간 1분 단축 (대용량 에셋 제거 효과)</li>
                            <li>• CDN 효과로 전 세계 어디서든 빠른 이미지 로딩 속도 확보</li>
                            <li>• 중앙화된 URL 관리로 유지보수성 향상</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-semibold text-purple-800 mb-3">🔧 기술 역량</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                            <li>• 클라우드 스토리지 서비스 실무 활용 경험</li>
                            <li>• React 앱 성능 최적화 및 번들 크기 관리 기법</li>
                            <li>• 웹서버 캐싱 전략 수립 및 적용 경험</li>
                            <li>• 대규모 리팩토링 프로젝트 계획 및 실행 경험</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <h3 className="text-lg font-medium mb-3">Oracle Cloud 스크린샷</h3>
                <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-1">
                        <p className="mb-3 text-base text-gray-800">Object Storage 폴더 구조</p>
                        <div className="rounded-lg overflow-hidden border border-gray-200">
                            <img
                                src={oracleObjectStorage}
                                alt="Oracle Cloud Object Storage 폴더 구조"
                                className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            * 폴더 구조로 에셋 관리: certifications, diagram, pixel, profile, project, records, video
                        </p>
                    </div>
                    
                    <div className="col-span-3">
                        <p className="mb-3 text-base text-gray-800">API 사용량 실시간 모니터링</p>
                        <div className="rounded-lg overflow-hidden border border-gray-200">
                            <img
                                src={oracleApiMonitoring}
                                alt="Oracle Cloud API 사용량 모니터링 그래프"
                                className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            * 개발/테스트 과정에서 250건의 API 요청 사용 (월 한도 50,000건의 0.5%)
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};