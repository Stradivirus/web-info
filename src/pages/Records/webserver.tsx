import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Globe, Zap, FileCode, Cpu, ArrowRightLeft } from 'lucide-react';
import { getRecordsImage } from '../../config/storage';

const nginxImg: string = getRecordsImage('nginx.png');
const caddyImg: string = getRecordsImage('caddy.png');

const nginxConfig = `server {
    listen 80;
    server_name _;
    root /var/www/html;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_min_length 256;
}`;

const caddyConfig = `:80, :443, 문쫑.홈페이지.한국, xn--z92b88z.xn--hu5b25b77nvwc.xn--3e0b707e {
    root * /var/www/html
    file_server
    try_files {path} {path}/ /index.html

    @static {
        path *.js *.css *.png *.jpg *.jpeg *.gif *.ico *.svg
    }
    header @static Cache-Control "public, max-age=31536000, immutable"

    encode gzip {
        match {
            header Content-Type text/plain*
            header Content-Type text/css*
            header Content-Type application/json*
            header Content-Type application/javascript*
            header Content-Type text/xml*
            header Content-Type application/xml*
            header Content-Type text/javascript*
        }
        minimum_length 256
    }
}`;

const WebserverMigrationContent: React.FC = () => {
  const [isNginxOpen, setIsNginxOpen] = useState<boolean>(false);
  const [isCaddyOpen, setIsCaddyOpen] = useState<boolean>(false);

  return (
    <div className="space-y-12 py-4">
      {/* 1. 요약 배너 */}
      <div className="bg-emerald-50/50 p-6 md:p-7 rounded-2xl border-l-4 border-emerald-300 shadow-sm flex items-start gap-4">
        <Globe className="w-8 h-8 text-emerald-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 text-xl">운영 자동화와 Auto HTTPS를 위한 Nginx → Caddy 마이그레이션</h4>
          <p className="text-slate-600 leading-relaxed text-base">
            도메인 추가, SSL 인증서 자동 발급/갱신, 핫 리로드 등 운영 편의성을 극대화하기 위해 기존 Nginx에서 모던 웹서버 <strong>Caddy</strong>로 전환하고, 실제 메모리 점유율과 설정 복잡도를 비교 분석했습니다.
          </p>
        </div>
      </div>

      {/* 2. Nginx vs Caddy 비교 카드 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <ArrowRightLeft className="w-6 h-6 text-emerald-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Nginx vs Caddy Comparison</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-bold">Legacy: Nginx</span>
              <span className="text-sm font-mono text-emerald-600 font-bold">RAM ~476 KB</span>
            </div>
            <h4 className="font-bold text-slate-800 text-lg">초경량 고성능 리버스 프록시</h4>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• C 기반 이벤트 드리븐 구조로 메모리 점유율이 극도로 낮음</li>
              <li>• 대규모 트래픽 처리와 세밀한 튜닝에 강점</li>
              <li>• SSL(Let&apos;s Encrypt) 인증서 발급/갱신을 위해 Certbot 등 별도 스크립트 관리 필요</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-50/70 text-emerald-600 text-sm font-bold border border-emerald-100">Adopted: Caddy</span>
              <span className="text-sm font-mono text-blue-600 font-bold">RAM ~16.6 MB</span>
            </div>
            <h4 className="font-bold text-slate-800 text-lg">자동 HTTPS &amp; 선언적 설정 웹서버</h4>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• 도메인만 명시하면 SSL 인증서 발급·갱신 및 HTTP→HTTPS 리다이렉트 완전 자동화</li>
              <li>• 직관적인 <code className="bg-slate-100 px-1.5 py-0.5 rounded">Caddyfile</code> 블록 문법으로 유지보수성 대폭 향상</li>
              <li>• 한글 도메인(퓨니코드) 멀티 바인딩 및 무중단 핫 리로드 기본 지원</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 설정 파일 비교 (Dark Code Accordions) */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <FileCode className="w-6 h-6 text-slate-600" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Configuration Migration</h3>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
            <button
              type="button"
              onClick={() => setIsNginxOpen((v) => !v)}
              className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-slate-400" />
                <span className="font-mono text-slate-200 text-sm md:text-base">기존 nginx.conf</span>
              </div>
              {isNginxOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {isNginxOpen && (
              <pre className="p-6 bg-slate-900 text-sm leading-relaxed text-slate-300 overflow-x-auto font-mono">
                <code>{nginxConfig}</code>
              </pre>
            )}
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
            <button
              type="button"
              onClick={() => setIsCaddyOpen((v) => !v)}
              className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-emerald-400" />
                <span className="font-mono text-slate-200 text-sm md:text-base">신규 Caddyfile (Auto HTTPS + Gzip + Static Cache)</span>
              </div>
              {isCaddyOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {isCaddyOpen && (
              <pre className="p-6 bg-slate-900 text-sm leading-relaxed text-emerald-300 overflow-x-auto font-mono">
                <code>{caddyConfig}</code>
              </pre>
            )}
          </div>
        </div>
      </section>

      {/* 4. 리소스 사용량 실측 비교 */}
      <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-bold text-slate-800">실제 프로세스 메모리 사용량 비교 (systemctl status)</h3>
          </div>
          <span className="text-sm text-slate-500">
            극한의 경량성이 필요할 때는 Nginx(476K), 운영 자동화/SSL 편의성이 중요할 때는 Caddy(16.6M) 선택
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-base font-bold text-slate-700">Nginx 프로세스 상태</span>
              <span className="text-sm font-mono font-bold text-emerald-600 bg-emerald-50/70 px-3 py-0.5 rounded-full">Memory: 476.0K</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
              <img src={nginxImg} alt="nginx 설정 구조" className="w-full hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-base font-bold text-slate-700">Caddy 프로세스 상태</span>
              <span className="text-sm font-mono font-bold text-blue-600 bg-blue-50/70 px-3 py-0.5 rounded-full">Memory: 16.6M</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
              <img src={caddyImg} alt="caddy 설정 구조" className="w-full hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebserverMigrationContent;
export const StudyContent = WebserverMigrationContent;