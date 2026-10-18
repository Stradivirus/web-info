import React from 'react';
import {
  Network,
  Shield,
  Server,
  Globe,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Cable,
  ArrowRight,
  Layers,
} from 'lucide-react';

export const StudyContent: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      {/* 1. 핵심 요약 배너 */}
      <div className="bg-emerald-50/50 p-6 md:p-7 rounded-2xl border-l-4 border-emerald-300 shadow-sm flex items-start gap-4">
        <Network className="w-8 h-8 text-emerald-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 text-xl">
            엔터프라이즈 망 분리(외부망 · DMZ · 내부망)와 방화벽 경계 보안의 이해
          </h4>
          <p className="text-slate-600 leading-relaxed text-base">
            기업 인프라는 보안 수준과 서비스 목적에 따라 네트워크를 <strong>외부망(Public) · DMZ(완충 지대) · 내부망(Private)</strong>으로 엄격히 분리하며,
            각 구간 사이에는 <strong>방화벽(Firewall)</strong>을 배치하여 허용된 IP와 포트만 통신할 수 있도록 통제합니다.
          </p>
        </div>
      </div>

      {/* 2. 네트워크 3대 영역(Zone) 개념 정리 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Layers className="w-6 h-6 text-emerald-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
            Network Zones: 외부망 · DMZ · 내부망
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 외부망 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-rose-50/70 text-rose-600 text-sm font-bold border border-rose-100 flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                외부망 (Untrust)
              </span>
              <span className="text-xs font-mono text-slate-400">External Zone</span>
            </div>
            <h4 className="text-lg font-bold text-slate-800">1. 외부망 (Public / Internet)</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              불특정 다수의 외부 사용자가 접속하는 인터넷 구간입니다. 보안 관점에서는 <strong>신뢰할 수 없는 영역(Untrust Zone)</strong>으로 간주하며, 내부 시스템으로의 직접 접근을 원천 차단합니다.
            </p>
          </div>

          {/* DMZ */}
          <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-amber-50/70 text-amber-700 text-sm font-bold border border-amber-100 flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                DMZ (완충 지대)
              </span>
              <span className="text-xs font-mono text-slate-400">Demilitarized Zone</span>
            </div>
            <h4 className="text-lg font-bold text-slate-800">2. DMZ (대외 서비스 구간)</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              외부망과 내부망 사이에 둔 <strong>중간 완충 구역</strong>입니다. 외부에 공개되어야 하는 <strong>Web 서버</strong> 등을 배치하며, 만약 Web 서버가 해킹당하더라도 내부망으로 직접 침투하지 못하도록 2차 방화벽으로 격리합니다.
            </p>
          </div>

          {/* 내부망 */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-50/70 text-emerald-600 text-sm font-bold border border-emerald-100 flex items-center gap-1.5">
                <Lock className="w-4 h-4" />
                내부망 (Trust)
              </span>
              <span className="text-xs font-mono text-slate-400">Internal / Private</span>
            </div>
            <h4 className="text-lg font-bold text-slate-800">3. 내부망 (핵심 보호 구역)</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              외부 인터넷과 완전히 단절된 사설 네트워크 구간입니다. 기업의 핵심 자산인 <strong>DB 서버, WAS, 보안 솔루션 서버 및 내부 업무망</strong>이 위치하며 가장 높은 보안 정책이 적용됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 방화벽(Firewall) 구조와 트래픽 흐름 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Shield className="w-6 h-6 text-indigo-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
            Firewall Architecture &amp; Traffic Control
          </h3>
        </div>

        <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
          {/* 네트워크 토폴로지 다이어그램 */}
          <div className="bg-slate-900 text-slate-200 p-5 md:p-6 rounded-xl font-mono text-sm space-y-3 border border-slate-800 overflow-x-auto">
            <div className="text-emerald-400 font-bold">// Enterprise 2-Tier Firewall &amp; Zone Topology</div>
            <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-800/90 px-4 py-3.5 rounded-lg">
              <span className="text-rose-300">[외부망 사용자]</span>
              <span className="text-slate-400">──▶</span>
              <span className="text-amber-300 font-bold">[외부 방화벽]</span>
              <span className="text-slate-400">──▶</span>
              <span className="text-sky-300">[DMZ (Web 서버)]</span>
              <span className="text-slate-400">──▶</span>
              <span className="text-amber-300 font-bold">[내부 방화벽]</span>
              <span className="text-slate-400">──▶</span>
              <span className="text-emerald-300">[내부망 (WAS / 솔루션 / DB)]</span>
            </div>
            <div className="text-sm text-slate-400 pt-1">
              * 외부에서 내부망(DB)으로의 Direct 통신은 차단되며, 각 방화벽에 등록된 정책(Source IP · Destination IP · Port)만 통과 가능
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/70 space-y-2">
              <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Default Deny (화이트리스트 통제 원칙)
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                방화벽의 기본 원칙은 <strong>&ldquo;명시적으로 허용하지 않은 모든 통신은 차단(Deny All)&rdquo;</strong>하는 것입니다.
                따라서 새로운 서버나 보안 솔루션을 도입할 때는 반드시 출발지 IP, 목적지 IP, 프로토콜(TCP/UDP), 서비스 포트를 지정하여 방화벽 정책을 개방해야 통신이 성립합니다.
              </p>
            </div>

            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200/70 space-y-2">
              <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-indigo-500" />
                방향성(Direction)의 중요성
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                방화벽은 <strong>누가 먼저 연결(SYN)을 시도하는지</strong>에 따라 정책 방향이 결정됩니다.
                예를 들어 작업자 PC에서 솔루션 서버로 접속하는 포트와, 솔루션 서버가 대상 DB로 접속하는 포트의 방향(Inbound/Outbound)을 정확히 구분하여 신청해야 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 솔루션 구축 현장 실무 경험 & 트러블슈팅 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Server className="w-6 h-6 text-slate-600" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
            SE 현장 구축 실무 사례 &amp; 트러블슈팅
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 사례 1: 내외부망 분리로 인한 솔루션 서버 2대 구성 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50/70 text-indigo-600 text-sm font-bold border border-indigo-100">
              <Layers className="w-4 h-4" />
              Case 01 · 망 분리 아키텍처
            </div>
            <h4 className="font-bold text-slate-800 text-lg">
              내·외부망 분리 환경으로 인한 솔루션 서버 2대 구축
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              고객사 네트워크가 <strong>내부망과 외부망으로 완전히 분리</strong>되어 있는 환경이었습니다.
              하나의 솔루션 서버로 양쪽 망의 시스템을 동시에 수용하려면 망 간 방화벽을 다수 열어야 해 망 분리 보안 취지가 훼손되므로,
              <strong> 내부망 전담 솔루션 서버 1대와 외부망 전담 솔루션 서버 1대(총 2대)</strong>를 각각 분리 구축하여 보안성을 유지했습니다.
            </p>
          </div>

          {/* 사례 2: 10G 스니핑 vs 1G 일반 통신 라인 미포설 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50/70 text-amber-700 text-sm font-bold border border-amber-100">
              <Cable className="w-4 h-4" />
              Case 02 · 물리 네트워크 포설
            </div>
            <h4 className="font-bold text-slate-800 text-lg">
              스니핑 10G만 구성하고 관리용 1G를 포설하지 않아 접속 불가
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              미러링 패킷을 수집하기 위한 <strong>스니핑용 10G 인터페이스</strong>는 구성해 두었으나,
              정작 장비에 IP를 부여하고 접속·관리할 <strong>일반 1G 네트워크 라인</strong>을 포설하지 않아 장비에 아예 접속하지 못했던 적이 있습니다.
              미러링 포트는 수신 전용이므로 <strong>수집용(10G)과 관리/통신용(1G) 라인이 각각 포설되었는지</strong> 사전에 반드시 확인해야 합니다.
            </p>
          </div>

          {/* 사례 3: 방화벽 미오픈으로 인한 대기 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50/70 text-rose-600 text-sm font-bold border border-rose-100">
              <AlertTriangle className="w-4 h-4" />
              Case 03 · 방화벽 정책 오픈 지연
            </div>
            <h4 className="font-bold text-slate-800 text-lg">
              설치는 완료했으나 방화벽 미오픈으로 인한 개통 지연
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              현장에서 서버에 솔루션 설치와 설정은 금방 끝내놓았는데, 구간별 <strong>방화벽 정책이 열려 있지 않아</strong> 방화벽을 여느라 하염없이 시간이 걸렸던 경험이 많습니다.
              구축 일정 지연을 막기 위해서는 방문 전 <strong>출발지·목적지 IP와 포트 목록을 사전에 전달해 오픈 여부를 먼저 검증</strong>하는 과정이 필수적입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyContent;
