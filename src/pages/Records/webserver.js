import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import nginxImg from '../../assets/images/records/nginx.png';
import caddyImg from '../../assets/images/records/caddy.png';

const nginxConfig = `#server {
#    listen 80;
#    server_name _;
#   root /var/www/html;
#    index index.html index.htm;
#    location / {
#        try_files $uri $uri/ /index.html;
#    }
#    location ~* .(js|css|png|jpg|jpeg|gif|ico|svg)$ {
#        expires 1y;
#        add_header Cache-Control "public, immutable";
#    }
#    gzip on;
#    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
#    gzip_min_length 256;
#}
`;

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
}
`;

const WebserverMigrationContent = ({ onImageClick, registerImages }) => {
  const [isNginxOpen, setIsNginxOpen] = useState(false);
  const [isCaddyOpen, setIsCaddyOpen] = useState(false);

  useEffect(() => {
    if (registerImages) {
      registerImages([nginxImg, caddyImg]);
    }
  }, [registerImages]);

  return (
    <div className="space-y-8">
      <section>
        <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
          <li>
            <b>Nginx</b>: 고성능 오픈소스 웹 서버이자 리버스 프록시 서버. 정적 파일 서빙, 로드밸런싱, 다양한 플러그인 지원 등으로 널리 사용됨.
          </li>
          <li>
            <b>Caddy</b>: 자동 HTTPS(무료 SSL), 간결한 설정, 모던 기능(리버스 프록시, 정적 파일, 인증 등)을 기본 제공하는 신생 웹서버. 설정이 간편하고 자동화에 강점.
          </li>
        </ul>
        <div className="bg-white border border-blue-100 rounded p-4 mb-4">
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              <b>성능</b>: 두 서버 모두 정적 파일 서빙, 프록시, 캐싱 등에서 매우 우수한 성능을 보임.
            </li>
            <li>
              <b>설정 및 자동화</b>: Nginx는 유연하지만 설정이 복잡하고, SSL 자동화 등은 별도 스크립트/툴이 필요함.<br/>
              Caddy는 <b>자동 HTTPS</b>와 <b>핫 리로드</b>, <b>간결한 설정</b>을 기본 제공하여 운영 자동화가 훨씬 편리함.
            </li>
            <li>
              <b>실제 경험</b>: 운영 자동화, SSL 관리, 설정 유지보수의 편의성 때문에 Caddy로 마이그레이션.<br/>
              <span className="text-blue-600">특히, 도메인 추가/변경, 인증서 갱신, 설정 배포가 매우 간단해짐.</span>
            </li>
            <li>
              <b>결론</b>: <b>성능</b>이 중요하다면 Nginx, <b>운영 자동화와 관리 편의성</b>을 중시한다면 Caddy가 훨씬 효율적.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">주요 변경점</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>listen/port, server_name → Caddy는 자동 HTTPS 및 다중 도메인 지원</li>
            <li>try_files, file_server, header, encode 등으로 정적 파일 캐싱 및 압축 처리</li>
            <li>gzip 관련 설정은 encode 블록으로 대체</li>
            <li>설정이 간결해지고 유지보수성이 향상됨</li>
            <li>운영 자동화(SSL, 배포, 설정 변경 등)가 Caddy에서 훨씬 편리</li>
          </ul>
        </div>
      </section>
      <section>
        {/* nginx.conf 토글 */}
        <div>
          <button
            onClick={() => setIsNginxOpen(v => !v)}
            className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors flex items-center justify-between"
          >
            <span className="font-mono text-gray-600">기존 nginx.conf</span>
            {isNginxOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
          </button>
          {isNginxOpen && (
              <div className="border-x border-b border-gray-200 rounded-b-lg">
              <pre className="p-4 overflow-x-auto bg-gray-50 rounded-b-lg">
                <code className="text-sm font-mono text-gray-800 whitespace-pre">
                  {nginxConfig}
                </code>
              </pre>
            </div>
          )}
        </div>
        {/* Caddyfile 토글 */}
        <div>
          <button
            onClick={() => setIsCaddyOpen(v => !v)}
            className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors flex items-center justify-between"
          >
            <span className="font-mono text-gray-600">새 Caddyfile</span>
            {isCaddyOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
          </button>
          {isCaddyOpen && (
              <div className="border-x border-b border-gray-200 rounded-b-lg">
              <pre className="p-4 overflow-x-auto bg-gray-50 rounded-b-lg">
                <code className="text-sm font-mono text-gray-800 whitespace-pre">
                  {caddyConfig}
                </code>
              </pre>
            </div>
          )}
        </div>
        {/* 한 줄 여백 추가 */}
        <div className="my-6"></div>
        <h3 className="text-lg font-medium mb-3">성능 스크린샷</h3>
        <div className="text-gray-700 text-base mb-4">
          <b>참고:</b> 아래 스크린샷에서 <span className="text-green-700">nginx</span>가 <span className="font-mono">476.0K</span> 메모리를 사용하고, <span className="text-blue-700">caddy</span>는 <span className="font-mono">16.6M</span> 메모리를 사용함을 알 수 있습니다.<br />
          <span className="text-gray-600">nginx가 caddy에 비해 훨씬 적은 메모리를 사용하는 것이 특징입니다.</span>
        </div>
        <div className="flex gap-8 mb-8">
          <div className="flex-1">
            <p className="mb-2 text-base text-gray-800">nginx 성능</p>
            <div
              className="rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
              onClick={() => onImageClick && onImageClick(0)}
            >
              <img src={nginxImg} alt="nginx 설정 구조" className="w-full" />
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-2 text-base text-gray-800">caddy 성능</p>
            <div
              className="rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
              onClick={() => onImageClick && onImageClick(1)}
            >
              <img src={caddyImg} alt="caddy 설정 구조" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebserverMigrationContent;