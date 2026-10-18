import React from 'react';
import { Database, Shield, Server, CheckCircle2 } from 'lucide-react';
import { getRecordsImage } from '../../config/storage';

const pgHbaImg = getRecordsImage('pg_hba_conf.png');
const pgConfImg = getRecordsImage('postgresql_conf.png');

export const StudyContent: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      {/* 1. 구현 배경 요약 */}
      <div className="bg-purple-50/50 p-6 md:p-7 rounded-2xl border-l-4 border-purple-300 shadow-sm flex items-start gap-4">
        <Database className="w-8 h-8 text-purple-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 text-xl">컨테이너 의존성 탈피 및 독립 DB 서버 구축</h4>
          <p className="text-slate-600 leading-relaxed text-base">
            Docker로 서비스를 관리하던 중 컨테이너 재시작이나 이미지 갱신 과정에서 DB 데이터가 초기화되는 위험이 있었습니다.
            데이터 영속성과 운영 안정성을 높이기 위해 <strong>Oracle Cloud 독립 VM에 PostgreSQL 17을 분리 구축</strong>했습니다.
          </p>
        </div>
      </div>

      {/* 2. 구현 환경 & 핵심 설정 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Server className="w-6 h-6 text-indigo-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Environment &amp; Key Configuration</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-bold text-purple-600 mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full" />
              System Spec
            </h4>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• Oracle Cloud Free Tier VM</li>
              <li>• Rocky Linux 9 OS</li>
              <li>• PostgreSQL 17 Engine</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              pg_hba.conf 접근 제어
            </h4>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• 인가된 특정 IP 대역만 접속 허용</li>
              <li>• <code className="bg-slate-100 px-1.5 py-0.5 rounded">md5</code> / <code className="bg-slate-100 px-1.5 py-0.5 rounded">scram-sha-256</code> 암호화 인증 적용</li>
              <li>• 무차별 외부 접근 원천 차단</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <h4 className="font-bold text-emerald-600 mb-3 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              postgresql.conf 네트워크
            </h4>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• <code className="bg-slate-100 px-1.5 py-0.5 rounded">listen_addresses</code> 외부 인터페이스 바인딩</li>
              <li>• 5432 포트 및 커넥션 풀 파라미터 튜닝</li>
              <li>• 애플리케이션 서버와의 안정적 연결 확보</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 설정 스크린샷 */}
      <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex items-center gap-2.5">
          <Shield className="w-6 h-6 text-purple-500" />
          <h3 className="text-2xl font-bold text-slate-800">실제 서버 설정 검증 스크린샷</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-base font-bold text-slate-700">pg_hba.conf 설정</span>
              <span className="text-sm font-mono text-slate-400">Client Authentication</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
              <img
                src={pgHbaImg}
                alt="pg_hba.conf 설정"
                className="w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-base font-bold text-slate-700">postgresql.conf 설정</span>
              <span className="text-sm font-mono text-slate-400">Network &amp; Listener</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
              <img
                src={pgConfImg}
                alt="postgresql.conf 설정"
                className="w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. 학습 및 개선 효과 (연한 톤 카드) */}
      <div className="bg-slate-50/90 p-7 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
        <h4 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2.5">
          <span className="w-6 h-1 bg-purple-400 rounded-full" />
          Key Takeaways &amp; Impact
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            '컨테이너 재배포와 무관하게 데이터베이스 영속성(Persistence) 완벽 보장',
            '클라우드 방화벽과 DB 자체 인증(pg_hba.conf)을 결합한 이중 보안 체계 체득',
            '추후 Primary-Standby 스트리밍 복제 아키텍처로 확장하기 위한 기반 마련',
          ].map((text, idx) => (
            <div key={idx} className="bg-white border border-slate-200/70 p-5 rounded-2xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base text-slate-600 leading-relaxed">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StudyContent;