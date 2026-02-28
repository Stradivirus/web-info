import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Layers, 
  GitBranch, 
  Clock, 
  CheckCircle2, 
  FileCode,
  Terminal
} from 'lucide-react';
import { getRecordsImage } from '../../config/storage';

const composeTime = getRecordsImage('Time.png');

// 주석 하이라이팅을 위한 헬퍼 함수 (YAML, Groovy 대응)
const HighlightComments = (code: string) => {
  const parts = code.split(/(#.*$|\/\/.*$|\/\*[\s\S]*?\*\/)/m);
  return parts.map((part, i) => {
    if (part.startsWith('#') || part.startsWith('//') || part.startsWith('/*')) {
      return <span key={i} className="text-emerald-500/90 italic font-medium">{part}</span>;
    }
    return part;
  });
};

type StudyContentProps = {
  registerImages?: (images: string[]) => void;
};

export const StudyContent: React.FC<StudyContentProps> = ({ registerImages }) => {
  const [isBackendCodeVisible, setIsBackendCodeVisible] = useState(false);
  const [isJenkinsCodeVisible, setIsJenkinsCodeVisible] = useState(false);

  useEffect(() => {
    if (registerImages) {
      registerImages([composeTime]);
    }
  }, [registerImages]);

  return (
    <div className="space-y-12 py-4">
      {/* 1. 요약 카드 (Pain Point & Goal) */}
      <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-500 shadow-sm flex items-start gap-4">
        <Zap className="w-8 h-8 text-rose-600 mt-1 flex-shrink-0 animate-pulse" />
        <div className="space-y-2">
          <h4 className="font-bold text-rose-800 text-lg">배포 지연의 병목 현상 해결</h4>
          <p className="text-rose-700 leading-relaxed text-sm">
            단일 <code className="bg-rose-100 px-1 rounded text-rose-800">docker-compose.yml</code>로 관리되던 전체 서비스는 작은 수정에도 <strong>7분</strong>이라는 긴 배포 시간이 소요되었습니다. 
            이를 도메인별로 분리하고 Jenkins 파이프라인을 최적화하여 배포 효율을 극대화했습니다.
          </p>
        </div>
      </div>

      {/* 2. 분리 전략 (Strategy) */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Decoupling Strategy</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
            <h4 className="font-bold text-blue-600 mb-3 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Frontend Bundle
            </h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• Nginx Load Balancer</li>
              <li>• React App Instances (x3)</li>
              <li>• Static Asset Caching</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
            <h4 className="font-bold text-emerald-600 mb-3 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Backend Services
            </h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• Registration API</li>
              <li>• Notification (Slack)</li>
              <li>• Coupon Logic Service</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
            <h4 className="font-bold text-purple-600 mb-3 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Infrastructure
            </h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• PostgreSQL Database</li>
              <li>• Monitoring (Grafana)</li>
              <li>• Redis Cache Store</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 주요 구현 코드 (Interactive) */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <Terminal className="w-5 h-5 text-slate-600" />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Implementation Details</h3>
        </div>
        <div className="space-y-6">
          {/* Backend Compose */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <button
              onClick={() => setIsBackendCodeVisible(!isBackendCodeVisible)}
              className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-emerald-400" />
                <span className="font-mono text-slate-200 text-sm">docker-compose.backend.yml</span>
              </div>
              {isBackendCodeVisible ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {isBackendCodeVisible && (
              <pre className="p-6 bg-slate-900 text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
                <code>{HighlightComments(`services:
  backend:
    build:
      context: ./back/registration
      dockerfile: Dockerfile
    environment:
      DATABASE_URL: postgres://\${USER}:\${PASS}@db:5432/\${DB}
    networks:
      - app-network # 프론트와 통신을 위한 네트워크
    ports:
      - "8086:8086"

  notification:
    build:
      context: ./back/notification
    environment:
      SLACK_WEBHOOK_URL: \${SLACK_WEBHOOK_URL}
    networks:
      - app-network
    depends_on:
      - backend # 의존성 명시를 통해 실행 순서 보장`)}</code>
              </pre>
            )}
          </div>

          {/* Jenkinsfile */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <button
              onClick={() => setIsJenkinsCodeVisible(!isJenkinsCodeVisible)}
              className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <GitBranch className="w-5 h-5 text-blue-400" />
                <span className="font-mono text-slate-200 text-sm">Jenkinsfile (Selective Deployment)</span>
              </div>
              {isJenkinsCodeVisible ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {isJenkinsCodeVisible && (
              <pre className="p-6 bg-slate-900 text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
                <code>{HighlightComments(`// Git Diff를 통해 변경된 부분만 골라 배포하는 지능형 파이프라인
stage('Check Changes') {
    steps {
        script {
            def changes = sh(script: "git diff --name-only HEAD^", returnStdout: true).trim()
            
            // 변경된 경로에 따라 플래그 설정
            env.FRONTEND_CHANGES = changes.contains('front/') || changes.contains('nginx/')
            env.BACKEND_CHANGES = changes.contains('back/')
        }
    }
}
stage('Deploy Backend') {
    when { expression { env.BACKEND_CHANGES == 'true' } }
    steps {
        sh "docker compose -f docker-compose.backend.yml up -d --build"
    }
}`)}</code>
              </pre>
            )}
          </div>
        </div>
      </section>

      {/* 4. 결과 및 데이터 시각화 */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-600" />
              배포 시간 70% 단축
            </h4>
            <p className="text-slate-600 leading-relaxed">
              프로젝트 전체를 통째로 빌드하던 방식에서 <strong>증분 배포(Incremental Deployment)</strong> 방식으로 전환한 결과, 
              평균 배포 시간을 7분에서 2분대로 혁신적으로 단축했습니다.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-3 rounded-lg text-center">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Before</div>
                <div className="text-xl font-bold text-rose-500">7m 12s</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <div className="text-[10px] text-blue-400 font-bold uppercase">After</div>
                <div className="text-xl font-bold text-blue-600">2m 05s</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-lg group">
              <img 
                src={composeTime} 
                alt="배포 시간 단축 지표" 
                className="w-full hover:scale-110 transition-transform duration-700 cursor-zoom-in" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. 핵심 성과 리스트 */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <CheckCircle2 className="w-24 h-24 text-emerald-400" />
        </div>
        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-1 bg-emerald-400 rounded-full"></span>
          Optimization Results
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {[
            "서비스 독립성 확보를 통한 관리 효율성 향상",
            "CI/CD 리소스 사용량 최적화 (불필요한 빌드 방지)",
            "장애 발생 시 특정 도메인만 즉각 롤백 가능",
            "서비스별 독자적인 스케일링 전략 수립 기반 마련"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyContent;
