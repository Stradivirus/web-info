import React from 'react';
import { Database, Server, CheckCircle, ArrowRightLeft, Layout, Zap } from 'lucide-react';
import { getRecordsImage } from '../../config/storage';

const postgres_main: string = getRecordsImage('Postgres_main.png');
const postgres_stanby: string = getRecordsImage('Postgres_stanby.png');

// 주석 하이라이팅을 위한 헬퍼 함수
const HighlightComments = (code: string) => {
  const parts = code.split(/(#.*$|--.*$|\/\/.*$|\/\*[\s\S]*?\*\/|"{3}[\s\S]*?"{3})/m);
  return parts.map((part, i) => {
    if (part.startsWith('#') || part.startsWith('--') || part.startsWith('//') || part.startsWith('/*') || part.startsWith('"""')) {
      return <span key={i} className="text-emerald-500/90 italic font-medium">{part}</span>;
    }
    return part;
  });
};

export interface StudyContentProps {
  registerImages?: (images: string[]) => void;
}

export const StudyContent: React.FC<StudyContentProps> = ({ registerImages }) => {
  // 이미지 등록
  React.useEffect(() => {
    if (registerImages) {
      registerImages([postgres_main, postgres_stanby]);
    }
  }, [registerImages]);

  return (
    <div className="space-y-12 py-4">
      {/* 1. 요약 및 배경 */}
      <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
        <div className="flex items-start gap-3">
          <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <p className="text-blue-800 leading-relaxed font-medium">
            Oracle Cloud VM 환경에서 <strong>PostgreSQL 17 Primary-Standby</strong> 구조의 실시간 스트리밍 복제를 구축했습니다. 
            단순 저장을 넘어 고가용성(High Availability)과 읽기 부하 분산을 실현한 엔터프라이즈급 데이터베이스 아키텍처입니다.
          </p>
        </div>
      </div>

      {/* 2. 인스턴스 구성 (Architecture) */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <Layout className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">System Architecture</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-emerald-600 mb-3 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Primary Instance (1/6)
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• PostgreSQL 17 Server</li>
              <li>• 읽기/쓰기 권한 부여</li>
              <li>• 실시간 WAL 스트리밍 송신</li>
              <li>• IP: <strong>10.0.0.6</strong></li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Standby Instance (1/1)
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• PostgreSQL 17 Hot Standby</li>
              <li>• 읽기 전용 (Query Offloading)</li>
              <li>• WAL 데이터 비동기 수신</li>
              <li>• IP: <strong>10.0.0.188</strong></li>
            </ul>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-purple-600 mb-3 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Replication Logic
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Primary에서 발생한 변경사항을 <strong>Streaming</strong> 방식으로 Standby에 전파. 
              지연 시간 1-5초 미만의 실시간 동기화를 보장합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 상세 서버 설정 (Code Blocks) */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <Server className="w-5 h-5 text-emerald-600" />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Configuration Guide</h3>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Primary Setup */}
          <div className="space-y-6">
            <div className="bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Primary Server (10.0.0.6)</span>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase ml-1">Step 1. 복제 전용 사용자 생성</span>
                <pre className="bg-slate-900 p-4 rounded-xl text-[13px] text-slate-300 font-mono overflow-x-auto border border-slate-800">
                  <code>{HighlightComments(`sudo -u postgres psql
CREATE USER replicator WITH REPLICATION ENCRYPTED PASSWORD 'replpass_password';
\\q`)}</code>
                </pre>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase ml-1">Step 2. postgresql.conf 핵심 설정</span>
                <pre className="bg-slate-900 p-4 rounded-xl text-[13px] text-slate-300 font-mono overflow-x-auto border border-slate-800">
                  <code>{HighlightComments(`sudo vi /var/lib/pgsql/data/postgresql.conf

wal_level = replica      # 복제 수준 설정
max_wal_senders = 3      # 최대 송신 프로세스 수
wal_keep_size = 1GB      # 보관할 WAL 로그 용량
listen_addresses = '*'   # 모든 IP 허용`)}</code>
                </pre>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase ml-1">Step 3. pg_hba.conf 접근 제어</span>
                <pre className="bg-slate-900 p-4 rounded-xl text-[13px] text-slate-300 font-mono overflow-x-auto border border-slate-800">
                  <code>{HighlightComments(`sudo vi /var/lib/pgsql/data/pg_hba.conf

# Standby 서버의 복제 접근 허용
host replication replicator 10.0.0.0/16 md5

sudo systemctl restart postgresql`)}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Standby Setup */}
          <div className="space-y-6">
            <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Standby Server (10.0.0.188)</span>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase ml-1">Step 1. 인증 정보 자동화 (.pgpass)</span>
                <pre className="bg-slate-900 p-4 rounded-xl text-[13px] text-slate-300 font-mono overflow-x-auto border border-slate-800">
                  <code>{HighlightComments(`sudo -u postgres bash -c 'echo "10.0.0.6:5432:*:replicator:replpass_password" > /var/lib/pgsql/.pgpass'
sudo -u postgres chmod 600 /var/lib/pgsql/.pgpass`)}</code>
                </pre>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase ml-1">Step 2. 초기 데이터 베이스 백업 (Base Backup)</span>
                <pre className="bg-slate-900 p-4 rounded-xl text-[13px] text-slate-300 font-mono overflow-x-auto border border-slate-800">
                  <code>{HighlightComments(`sudo systemctl stop postgresql-17
sudo rm -rf /var/lib/pgsql/17/data/*

# Primary로부터 모든 데이터를 가져오고 복제 설정을 생성합니다.
sudo -u postgres pg_basebackup \\
    -h 10.0.0.6 \\
    -U replicator \\
    -D /var/lib/pgsql/17/data \\
    -P \\
    --wal-method=stream \\
    --write-recovery-conf \\
    -v

sudo systemctl start postgresql-17`)}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 상태 검증 */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <CheckCircle className="w-5 h-5 text-purple-600" />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Verification</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-700">Primary 연결 확인</h4>
            <pre className="bg-slate-900 p-4 rounded-xl text-[13px] text-slate-300 font-mono border border-slate-800">
              <code>{HighlightComments(`-- 복제 연결 상태 확인 쿼리
SELECT client_addr, state, sync_state 
FROM pg_stat_replication;

-- 결과: 10.0.0.188 | streaming | async`)}</code>
            </pre>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-700">Standby 모드 확인</h4>
            <pre className="bg-slate-900 p-4 rounded-xl text-[13px] text-slate-300 font-mono border border-slate-800">
              <code>{HighlightComments(`-- Standby 리커버리 모드 확인
SELECT pg_is_in_recovery();

-- 결과: t (true)`)}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* 5. 실전 결과 데이터 (이미지) */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <div className="text-center space-y-2">
          <h4 className="text-2xl font-bold text-slate-800">복제 데이터 및 서버 구분 검증</h4>
          <p className="text-sm text-slate-500">실제 운영 중인 서비스 환경에서 각 서버의 IP와 조회된 데이터의 일치 여부를 확인했습니다.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold text-emerald-600">Primary (10.0.0.6)</span>
              <span className="text-[10px] text-slate-400 font-mono">Master DB</span>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-emerald-100 shadow-lg">
              <img src={postgres_main} alt="Primary 서버 검증 이미지" className="w-full hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold text-blue-600">Standby (10.0.0.188)</span>
              <span className="text-[10px] text-slate-400 font-mono">Replica DB</span>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-blue-100 shadow-lg">
              <img src={postgres_stanby} alt="Standby 서버 검증 이미지" className="w-full hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-4 rounded-xl text-center border border-emerald-100">
          <span className="text-emerald-700 font-bold">
            ✅ 데이터 일치 확인: Primary와 Standby 모두 동일한 기록을 보유하고 있음을 실시간 조회로 증명했습니다.
          </span>
        </div>
      </section>

      {/* 6. 성과 및 교훈 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border border-emerald-100">
          <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            구축 성과
          </h4>
          <ul className="text-sm text-emerald-700 space-y-3 font-medium">
            <li className="flex gap-2"><span>•</span> PostgreSQL 17 스트리밍 복제 완성</li>
            <li className="flex gap-2"><span>•</span> 실시간 데이터 동기화 (1-5초 미만)</li>
            <li className="flex gap-2"><span>•</span> 고가용성(HA) 및 장애 복구 구조 확보</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
          <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5" />
            기술적 가치
          </h4>
          <ul className="text-sm text-blue-700 space-y-3 font-medium">
            <li className="flex gap-2"><span>•</span> 엔터프라이즈급 DB 운영 표준 체득</li>
            <li className="flex gap-2"><span>•</span> 읽기 부하 분산을 통한 서비스 최적화</li>
            <li className="flex gap-2"><span>•</span> 클라우드 인프라 아키텍처링 역량 강화</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyContent;
