import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Network, Server, FileCode, Activity, CheckCircle2 } from 'lucide-react';
import { getRecordsImage } from '../../config/storage';

const loadBalancer1: string = getRecordsImage('Loadbalancer1.png');
const loadBalancer2: string = getRecordsImage('Loadbalancer2.png');

const HighlightComments = (code: string) => {
  const parts = code.split(/(#.*$)/m);
  return parts.map((part, i) => {
    if (part.startsWith('#')) {
      return <span key={i} className="text-emerald-400 italic font-medium">{part}</span>;
    }
    return part;
  });
};

export const StudyContent: React.FC = () => {
  const [isConfigVisible, setIsConfigVisible] = useState<boolean>(false);

  const nginxConfig = `user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
   worker_connections 1024;
}

http {
   include /etc/nginx/mime.types;
   default_type application/octet-stream;
   
   # 로그 포맷 정의 (응답한 업스트림 서버 IP 기록)
   log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                   '$status $body_bytes_sent "$http_referer" '
                   '"$http_user_agent" "$http_x_forwarded_for" "$upstream_addr"';
   
   access_log /var/log/nginx/access.log main;

   # 업스트림 서버 정의 (자동 헬스 체크 및 장애 격리 포함)
   upstream frontend {
       server frontend1:3000 max_fails=3 fail_timeout=30s;
       server frontend2:3000 max_fails=3 fail_timeout=30s;
       server frontend3:3000 max_fails=3 fail_timeout=30s;
   }

   server {
       listen 80;
       server_name localhost;

       # 리버스 프록시 및 트래픽 분산 설정
       location / {
           proxy_pass http://frontend;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           
           # 어떤 프론트엔드 컨테이너가 응답했는지 응답 헤더에 추가
           add_header X-Served-By $upstream_addr;

           # 프록시 타임아웃 설정
           proxy_connect_timeout 300;
           proxy_send_timeout 300;
           proxy_read_timeout 300;
           send_timeout 300;
       }
   }

   sendfile on;
   keepalive_timeout 65;
}`;

  return (
    <div className="space-y-12 py-4">
      {/* 1. 요약 배너 */}
      <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm flex items-start gap-4">
        <Network className="w-7 h-7 text-emerald-600 mt-0.5 flex-shrink-0" />
        <div className="space-y-1.5">
          <h4 className="font-bold text-emerald-900 text-lg">Nginx Upstream 기반 프론트엔드 다중화 및 무중단 가용성 확보</h4>
          <p className="text-emerald-800/90 leading-relaxed text-sm">
            단일 컨테이너로 운영되던 React 프론트엔드 서버를 <strong>로드밸런서 1대 + 프론트엔드 인스턴스 3대</strong> 구조로 확장했습니다.
            헬스체크 기반 자동 장애 격리(<code className="bg-emerald-100 px-1 rounded">max_fails=3</code>)와 <code className="bg-emerald-100 px-1 rounded">X-Served-By</code> 헤더 추적을 구현했습니다.
          </p>
        </div>
      </div>

      {/* 2. 아키텍처 핵심 설계 */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <Server className="w-5 h-5 text-emerald-600" />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Load Balancing Architecture</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-emerald-600 mb-3 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              Traffic Distribution
            </h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• Round-Robin 기반 3개 노드 균등 분산</li>
              <li>• <code className="bg-slate-100 px-1 rounded">frontend1~3:3000</code> 컨테이너 클러스터</li>
              <li>• CPU 및 메모리 부하 평준화 달성</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-3 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Health Check & Failover
            </h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• <code className="bg-slate-100 px-1 rounded">max_fails=3</code> / <code className="bg-slate-100 px-1 rounded">fail_timeout=30s</code></li>
              <li>• 비정상 응답 노드 자동 라우팅 제외</li>
              <li>• 단일 노드 다운 시에도 무중단 서비스 유지</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-purple-600 mb-3 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              Observability
            </h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• <code className="bg-slate-100 px-1 rounded">X-Served-By: $upstream_addr</code> 헤더 주입</li>
              <li>• 브라우저 네트워크 탭에서 응답 컨테이너 즉시 식별</li>
              <li>• 커스텀 Access Log로 업스트림 응답 추적</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Nginx 설정 코드 */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <FileCode className="w-5 h-5 text-slate-700" />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Nginx Load Balancer Config</h3>
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <button
            type="button"
            onClick={() => setIsConfigVisible(!isConfigVisible)}
            className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileCode className="w-5 h-5 text-emerald-400" />
              <span className="font-mono text-slate-200 text-sm">nginx.conf (Upstream & Proxy Pass)</span>
            </div>
            {isConfigVisible ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
          </button>
          {isConfigVisible && (
            <pre className="p-6 bg-slate-900 text-[13px] leading-relaxed text-slate-300 overflow-x-auto font-mono">
              <code>{HighlightComments(nginxConfig)}</code>
            </pre>
          )}
        </div>
      </section>

      {/* 4. 구현 결과 검증 */}
      <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-emerald-600" />
          <h3 className="text-xl font-bold text-slate-800">컨테이너 리소스 분산 및 라우팅 검증 결과</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-[68%] space-y-3">
            <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md">
              <img src={loadBalancer1} alt="Docker 컨테이너 상태" className="w-full" />
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>7개의 컨테이너가 정상 동작하며, <code className="font-mono font-bold">frontend1, 2, 3</code> 서버의 CPU·메모리 사용량이 고르게 유지됩니다.</span>
            </div>
          </div>

          <div className="w-full lg:w-[32%] space-y-3">
            <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md">
              <img src={loadBalancer2} alt="로드밸런싱 결과" className="w-full" />
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
              <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><code className="font-mono font-bold">X-Served-By</code> 헤더를 통해 <code className="font-mono">192.168.64.3 / .4 / .6</code>으로 트래픽이 분산됨을 확인했습니다.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default StudyContent;