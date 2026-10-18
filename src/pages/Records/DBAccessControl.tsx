import React from 'react';
import {
  ShieldCheck,
  ArrowRightLeft,
  Server,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Layers,
  FileSearch,
  Laptop,
} from 'lucide-react';

export const StudyContent: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      {/* 1. 핵심 요약 배너 */}
      <div className="bg-emerald-50/50 p-6 md:p-7 rounded-2xl border-l-4 border-emerald-300 shadow-sm flex items-start gap-4">
        <ShieldCheck className="w-8 h-8 text-emerald-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 text-xl">
            DB 접근제어 아키텍처 선택 기준: &ldquo;정밀한 접근 제어(Proxy) vs 감사 로그 기록 중심(Sniffing)&rdquo;
          </h4>
          <p className="text-slate-600 leading-relaxed text-base">
            사람(DBA, 개발자 등)이 직접 DB에 접속하는 환경을 통제할 때 가장 많이 비교하는 두 가지 아키텍처는 <strong>Proxy(Gateway) 방식</strong>과 <strong>Sniffing(미러링) 방식</strong>입니다.
            (※ WAS 단의 DB 접근은 <code className="bg-emerald-100/70 px-1.5 py-0.5 rounded font-semibold text-emerald-800">INFOSAFER</code> 등 별도의 전용 솔루션으로 분리하여 다룹니다.)
          </p>
        </div>
      </div>

      {/* 2. Proxy 방식 vs Sniffing 방식 상세 비교 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <ArrowRightLeft className="w-6 h-6 text-emerald-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
            Proxy Mode vs Sniffing Mode
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1) Proxy 방식 */}
          <div className="bg-white p-6 md:p-7 rounded-2xl border border-emerald-200/80 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-emerald-50/70 text-emerald-600 text-sm font-bold border border-emerald-100 flex items-center gap-1.5">
                <Lock className="w-4 h-4" />
                사용자 인증 &amp; 정밀 통제
              </span>
              <span className="text-sm font-mono text-slate-400">Proxy / Gateway</span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">1. Proxy 방식 (전용 클라이언트 기반 제어)</h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                DB에 접속하는 작업자 PC에 <strong>별도의 클라이언트 프로그램(Agent)</strong>이 설치되며, 사용자 로그인 인증을 거친 뒤 Proxy 서버를 경유하여 DB에 접속하는 구조입니다.
              </p>
            </div>

            {/* 토폴로지 다이어그램 박스 */}
            <div className="bg-slate-900 text-slate-200 p-5 rounded-xl font-mono text-sm space-y-2.5 border border-slate-800">
              <div className="text-emerald-400 font-bold">// Proxy Access Control Flow</div>
              <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-800/90 px-4 py-3 rounded-lg">
                <span className="text-sky-300">작업자 PC (전용 프로그램 로그인)</span>
                <span className="text-emerald-400">──▶ [DB 접근제어 Proxy] ──▶</span>
                <span className="text-amber-300">Target DB</span>
              </div>
              <div className="text-sm text-slate-400 pt-1">
                * 로그인된 사용자 세션을 기반으로 접속·DB 툴·테이블 권한을 실시간 통제
              </div>
            </div>

            <div className="space-y-2.5 text-sm md:text-base text-slate-600">
              <div className="font-bold text-slate-800 text-base">핵심 제어 기능</div>
              <ul className="space-y-2.5 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Laptop className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>사용자 PC 전용 프로그램 설치:</strong> 프록시 방식에서만 작업자 PC에 별도 프로그램이 설치되어 본인 인증(로그인)을 수행합니다.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>DB 접속 및 DB 툴(Tool) 통제:</strong> 인가된 사용자만 접속을 허용하며, 허용된 DB 클라이언트 툴(DBeaver, Toad 등)만 사용할 수 있도록 제어합니다.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>테이블(Object) 단위 세밀한 권한 제어:</strong> 로그인한 상태에서 해당 사용자가 접근할 수 있는 테이블까지 세밀하게 구분하여 차단·통제할 수 있습니다.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2) Sniffing 방식 */}
          <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-sky-50/70 text-sky-600 text-sm font-bold border border-sky-100 flex items-center gap-1.5">
                <FileSearch className="w-4 h-4" />
                포트 미러링 기반 로깅
              </span>
              <span className="text-sm font-mono text-slate-400">Port Mirroring Only</span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">2. Sniffing 방식 (네트워크 미러링 전용)</h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                별도의 프로그램 설치나 경로 변경 없이 스위치의 <strong>포트 미러링(Port Mirroring)</strong>만으로 패킷 사본을 수집하며, 실무자가 <strong>제어보다는 감사 로그(Log)를 남기는 것</strong>을 중요시할 때 사용됩니다.
              </p>
            </div>

            {/* 토폴로지 다이어그램 박스 */}
            <div className="bg-slate-900 text-slate-200 p-5 rounded-xl font-mono text-sm space-y-2.5 border border-slate-800">
              <div className="text-sky-400 font-bold">// Switch Port Mirroring Flow</div>
              <div className="bg-slate-800/90 px-4 py-3 rounded-lg space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sky-300">작업자 PC (별도 프로그램 없음)</span>
                  <span className="text-slate-300">──── (Direct 접속) ────▶</span>
                  <span className="text-amber-300">Target DB</span>
                </div>
                <div className="text-center text-sky-400 text-xs">
                  └─ (스위치 미러링 패킷 복사) ─▶ [Sniffing 로그 수집 서버]
                </div>
              </div>
              <div className="text-sm text-rose-300 pt-1">
                * 주의: 10G NIC 환경이라도 순간 트래픽이 허용량을 초과하면 로그가 누락될 수 있음
              </div>
            </div>

            <div className="space-y-2.5 text-sm md:text-base text-slate-600">
              <div className="font-bold text-slate-800 text-base">핵심 특징 및 명확한 한계점</div>
              <ul className="space-y-2.5 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span><strong>감사 로깅(Audit Log) 목적:</strong> 기존 DB 접속 방식에 영향을 주지 않고 사후 추적을 위한 쿼리 로그 기록이 최우선일 때 채택합니다.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong>별도의 접근/권한 제어 불가능:</strong> 미러링된 패킷만 수신하므로 사용자 로그인 인증, DB 툴 통제, 테이블 단위 접근 제어 등 사전 통제는 불가능합니다.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span><strong>허용량 초과 시 로그 유실 단점:</strong> 네트워크를 <strong>10G</strong>로 구성하더라도 순간 트래픽이 처리 허용량을 넘어가면 패킷이 드랍되어 <strong>로그가 안 남는 치명적인 단점</strong>이 있습니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 한눈에 보는 비교 매트릭스 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Layers className="w-6 h-6 text-indigo-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
            Comparison Matrix
          </h3>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-sm bg-white">
          <table className="w-full text-left border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-slate-100/90 text-slate-700 border-b border-slate-200">
                <th className="py-4 px-6 font-bold">구분 항목</th>
                <th className="py-4 px-6 font-bold text-emerald-700">Proxy 방식</th>
                <th className="py-4 px-6 font-bold text-sky-700">Sniffing (미러링) 방식</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 text-slate-600">
              <tr className="hover:bg-slate-50/60">
                <td className="py-4 px-6 font-bold text-slate-700 bg-slate-50/40">핵심 도입 목적</td>
                <td className="py-4 px-6 font-semibold text-emerald-600">실시간 접근 제어 · 권한 통제 + 감사 로깅</td>
                <td className="py-4 px-6 font-semibold text-sky-600">제어보다 감사 로그(Log) 기록 중심</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="py-4 px-6 font-bold text-slate-700 bg-slate-50/40">사용자 PC 별도 프로그램 설치</td>
                <td className="py-4 px-6 font-semibold text-slate-700">설치 필수 (전용 클라이언트 로그인)</td>
                <td className="py-4 px-6 text-slate-500">미설치 (스위치 포트 미러링만 구성)</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="py-4 px-6 font-bold text-slate-700 bg-slate-50/40">사용자 인증 &amp; DB 툴(Tool) 제어</td>
                <td className="py-4 px-6 font-semibold text-emerald-600">가능 (인가된 사용자 및 허용된 DB 툴만 접속)</td>
                <td className="py-4 px-6 text-rose-500 font-medium">불가능 (별도 제어 불가)</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="py-4 px-6 font-bold text-slate-700 bg-slate-50/40">테이블(Object) 단위 접근 제어</td>
                <td className="py-4 px-6 font-semibold text-emerald-600">가능 (로그인 계정별 접근 가능 테이블 제어)</td>
                <td className="py-4 px-6 text-rose-500 font-medium">불가능 (별도 제어 불가)</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="py-4 px-6 font-bold text-slate-700 bg-slate-50/40">대량 트래픽 발생 시 로그 정합성</td>
                <td className="py-4 px-6">Proxy 세션을 직접 경유하므로 누락 없이 기록</td>
                <td className="py-4 px-6 text-rose-500 font-medium">10G를 써도 허용량 초과 시 로그가 안 남는 단점 존재</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. 솔루션 엔지니어(SE) 실무 안내 포인트 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Server className="w-6 h-6 text-slate-600" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
            SE 실무 아키텍처 가이드
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
            <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-500" />
              1. 통제가 필요하면 무조건 Proxy
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              &ldquo;특정 작업자는 특정 테이블만 조회하게 막고 싶다&rdquo;, &ldquo;허가된 DB 툴로만 접속하게 통제하고 싶다&rdquo;는 요구사항이 있다면
              전용 프로그램 로그인을 통해 세션을 통제하는 <strong>Proxy 방식</strong>으로 구성해야 합니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
            <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              2. 스니핑의 대역폭 한계 사전 고지
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              실무자가 제어 없이 로그만 남기길 원해 <strong>Sniffing 방식</strong>을 선택하더라도,
              10G 환경에서조차 피크 타임 등 트래픽이 허용량을 넘어가면 <strong>로그 유실이 발생할 수 있음</strong>을 설계 단계에서 명확히 안내해야 합니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
            <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-500" />
              3. 사람 직접 접속 vs WAS 접근 분리
            </h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              DB 접근제어(DBSAFER)는 기본적으로 <strong>사람이 DB에 직접 붙을 때</strong>를 통제하기 위한 솔루션이며,
              애플리케이션 서버(WAS) 단에서 들어오는 접근 통제/로깅은 <strong>INFOSAFER</strong> 등 별도의 전용 솔루션으로 역할을 분리합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyContent;
