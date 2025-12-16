import React from 'react';

// 만약 아키텍처 다이어그램 이미지가 있다면 여기에 import 하세요.
// import { getRecordsImage } from '../../config/storage';
// const infraDiagram = getRecordsImage('infra_diagram.png');

export const StudyContent: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-lg font-medium mb-3">구현 배경</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>외부 공격 원천 차단을 위한 DB 포트(5432) 비공개 전환 필요성</li>
          <li>IP 직접 접속을 막고 도메인(HTTPS)으로만 접속을 허용하여 보안 강화</li>
          <li>GitHub Actions(외부)에서 사설망 DB에 안전하게 접속할 자동화 파이프라인 구축</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">구현 환경</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Oracle Cloud Infrastructure (OCI)</li>
          <li>Rocky Linux 9</li>
          <li>GitHub Actions (CI/CD)</li>
          <li>Caddy (Web Server)</li>
          <li>SSH Tunneling</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">구현 내용</h3>
        <div className="space-y-6 text-gray-600">
          
          {/* 1. SSH 터널링 */}
          <div>
            <h4 className="font-medium mb-2 text-blue-600">1. GitHub Actions SSH 터널링 구축</h4>
            <p className="mb-2 text-sm">외부에 DB 포트를 개방하지 않고, SSH 터널을 통해 안전하게 데이터 파이프라인을 연결했습니다.</p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto">
              <p className="text-gray-500"># .github/workflows/pca-update.yml</p>
              <p className="text-purple-600">- name: Setup SSH Tunnel</p>
              <p className="pl-4">run: |</p>
              <p className="pl-8 text-green-600">ssh -o StrictHostKeyChecking=no -f -N \</p>
              <p className="pl-8 text-green-600">-i ~/.ssh/id_rsa \</p>
              <p className="pl-8 text-green-600">-L 5432:127.0.0.1:5432 \</p>
              <p className="pl-8 text-green-600">rocky@$SSH_HOST</p>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              * Local Forwarding(-L)을 사용하여 GitHub Runner의 5432 포트를 원격 서버 내부의 DB 포트로 연결
            </p>
          </div>

          {/* 2. Caddy 보안 설정 */}
          <div>
            <h4 className="font-medium mb-2 text-blue-600">2. Caddy 웹서버 보안 강화</h4>
            <p className="mb-2 text-sm">IP 직접 접속을 차단하고 도메인 접속만 허용하여 인증서 오류 및 봇 접근을 방지했습니다.</p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
              <p className="text-gray-500"># Caddyfile 설정</p>
              {/* 아래 줄에서 -> 기호를 {'->'}로 감싸서 수정했습니다 */}
              <p className="text-gray-400"># IP 주소 명시 제거 {'->'} 도메인만 허용</p>
              <p className="text-blue-600">문쫑.홈페이지.한국 {'{'}</p>
              <p className="pl-4">root * /usr/share/caddy/html</p>
              <p className="pl-4">file_server</p>
              <p className="pl-4">try_files {'{path}'} /index.html</p>
              <p className="text-blue-600">{'}'}</p>
            </div>
          </div>

          {/* 3. 트러블슈팅 */}
          <div>
            <h4 className="font-medium mb-2 text-blue-600">3. 트러블슈팅: OCI 보안 그룹</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">문제:</span> OS 방화벽을 개방했음에도 스탠바이 DB 접근 시 타임아웃 발생</p>
              <p><span className="font-semibold">원인:</span> 스탠바이 DB에 보안 그룹 추가하는 것을 누락</p>
              <p><span className="font-semibold">해결:</span> 보안 그룹 추가하여 해결</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};