import React from 'react';
import { ShieldCheck, Server, Terminal, AlertTriangle, CheckCircle2, Lock } from 'lucide-react';

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
  const sshTunnelCode = `# .github/workflows/pca-update.yml
- name: Setup SSH Tunnel
  run: |
    ssh -o StrictHostKeyChecking=no -f -N \\
      -i ~/.ssh/id_rsa \\
      -L 5432:127.0.0.1:5432 \\
      rocky@$SSH_HOST`;

  const caddySecurityCode = `# Caddyfile 설정
# IP 주소 명시 제거 -> 도메인만 허용하여 봇 스캐닝 및 인증서 오류 차단
문쫑.홈페이지.한국 {
    root * /usr/share/caddy/html
    file_server
    try_files {path} /index.html
}`;

  return (
    <div className="space-y-12 py-4">
      {/* 1. 요약 배너 */}
      <div className="bg-emerald-50/50 p-6 md:p-7 rounded-2xl border-l-4 border-emerald-300 shadow-sm flex items-start gap-4">
        <ShieldCheck className="w-8 h-8 text-emerald-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 text-xl">Zero-Trust 기반 클라우드 보안 및 배포 자동화</h4>
          <p className="text-slate-600 leading-relaxed text-base">
            외부 공격을 원천 차단하기 위해 DB 포트(5432)를 비공개 전환하고, IP 직접 접속 대신 <strong>도메인(HTTPS) 전용 접속</strong>만 허용했습니다.
            외부 GitHub Actions에서는 <strong>SSH Local Port Forwarding</strong>을 통해 사설망 DB에 안전하게 접속하는 파이프라인을 구축했습니다.
          </p>
        </div>
      </div>

      {/* 2. 구현 환경 & 보안 목표 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Server className="w-6 h-6 text-emerald-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Environment &amp; Security Goals</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-bold text-emerald-600 mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              Cloud &amp; OS
            </h4>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• Oracle Cloud Infrastructure (OCI)</li>
              <li>• Rocky Linux 9</li>
              <li>• OCI Security List &amp; Firewalld</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              Network &amp; Web Server
            </h4>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• Caddy Web Server (Auto HTTPS)</li>
              <li>• 도메인 전용 인바운드 허용</li>
              <li>• DB 포트(5432) 외부 노출 제거</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-bold text-purple-600 mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full" />
              Secure Automation
            </h4>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• GitHub Actions CI/CD</li>
              <li>• SSH Tunneling (-L 5432)</li>
              <li>• 비공개 키 기반 무인 인증</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 핵심 구현 코드 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Terminal className="w-6 h-6 text-slate-600" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Implementation Details</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-base md:text-lg font-bold text-slate-800 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-500" />
                1. GitHub Actions SSH 터널링 구축
              </h4>
              <span className="text-xs font-mono text-slate-400">pca-update.yml</span>
            </div>
            <p className="text-sm md:text-base text-slate-600">
              외부에 DB 포트를 개방하지 않고 Local Forwarding(<code className="bg-slate-100 px-1.5 py-0.5 rounded">-L</code>)으로 GitHub Runner와 원격 DB를 안전하게 연결합니다.
            </p>
            <pre className="bg-slate-900 p-5 rounded-2xl text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto border border-slate-800">
              <code>{HighlightComments(sshTunnelCode)}</code>
            </pre>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-base md:text-lg font-bold text-slate-800 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                2. Caddy 웹서버 도메인 접근 제어
              </h4>
              <span className="text-xs font-mono text-slate-400">Caddyfile</span>
            </div>
            <p className="text-sm md:text-base text-slate-600">
              IP 직접 접속을 차단하고 지정된 도메인 접속만 허용하여 무작위 IP 스캐닝 봇과 SSL 인증서 오류를 방지했습니다.
            </p>
            <pre className="bg-slate-900 p-5 rounded-2xl text-sm leading-relaxed text-slate-200 font-mono overflow-x-auto border border-slate-800">
              <code>{HighlightComments(caddySecurityCode)}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* 4. 트러블슈팅 */}
      <section className="bg-amber-50/40 p-6 md:p-8 rounded-3xl border border-amber-200/60 shadow-sm">
        <div className="flex items-center gap-2.5 mb-5">
          <AlertTriangle className="w-6 h-6 text-amber-500" />
          <h3 className="text-xl font-bold text-slate-800">Troubleshooting: OCI 보안 그룹(NSG) 누락 이슈</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
          <div className="bg-white p-5 rounded-xl border border-amber-100/80">
            <div className="text-sm font-bold text-rose-500 uppercase mb-1.5">Problem (문제 현상)</div>
            <p className="text-slate-600 leading-relaxed">
              OS 내부 방화벽(firewalld)에서 5432 포트를 개방했음에도 Standby DB 접근 시 연결 타임아웃 발생
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-amber-100/80">
            <div className="text-sm font-bold text-amber-600 uppercase mb-1.5">Root Cause (원인)</div>
            <p className="text-slate-600 leading-relaxed">
              클라우드 네트워크 레벨인 OCI 인스턴스 설정에서 Standby DB에 Security Group(NSG) 연결이 누락됨을 확인
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-emerald-100/80">
            <div className="text-sm font-bold text-emerald-600 uppercase mb-1.5 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Solution (해결)
            </div>
            <p className="text-slate-600 leading-relaxed">
              OCI 콘솔에서 사설 서브넷 간 5432 인바운드가 허용된 보안 그룹을 Standby 인스턴스에 매핑하여 즉시 해결
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default StudyContent;