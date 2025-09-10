// src/components/study/PostgreSQLReplication.js
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Database, Server, CheckCircle } from 'lucide-react';
import postgres_main from '../../assets/images/records/Postgres_main.png';
import postgres_stanby from '../../assets/images/records/Postgres_stanby.png';

export const StudyContent = ({ onImageClick, registerImages }) => {
  const [isArchitectureVisible, setIsArchitectureVisible] = useState(false);
  const [isPrimarySetupVisible, setIsPrimarySetupVisible] = useState(false);
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <p className="text-blue-700">
          Oracle Cloud VM 환경에서 PostgreSQL 17 Primary-Standby 구조의 실시간 스트리밍 복제를 직접 구축하여 
          고가용성 데이터베이스 아키텍처를 완성했습니다.
        </p>
      </div>

      {/* 아키텍처 설계 */}
      <div className="bg-white border rounded-lg">
        <button
          onClick={() => setIsArchitectureVisible(!isArchitectureVisible)}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center space-x-2">
            <Database className="w-5 h-5 text-blue-600" />
            <span className="font-medium">인스턴스 구성</span>
          </div>
          {isArchitectureVisible ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        {isArchitectureVisible && (
          <div className="p-4 border-t bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800">1/6 인스턴스 (Primary)</h4>
                <ul className="text-sm text-green-700 mt-2">
                  <li>• PostgreSQL 17 Server</li>
                  <li>• 읽기/쓰기 모든 작업</li>
                  <li>• WAL 스트리밍 송신</li>
                  <li>• IP: 10.0.0.6</li>
                </ul>
              </div>
              <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">1/1 인스턴스 (Standby)</h4>
                <ul className="text-sm text-blue-700 mt-2">
                  <li>• PostgreSQL 17 Server</li>
                  <li>• 읽기 전용 (Hot Standby)</li>
                  <li>• 실시간 WAL 수신</li>
                  <li>• IP: 10.0.0.188</li>
                </ul>
              </div>
              <div className="bg-purple-100 p-3 rounded border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800">복제 순서</h4>
                <ul className="text-sm text-purple-700 mt-2">
                  <li>1. Primary (1/6)</li>
                  <li>2. WAL 스트리밍</li>
                  <li>3. Standby (1/1)</li>
                  <li>• 실시간 동기화 (지연 시간: 1-5초), 장애 시 자동 페일오버 지원</li>
                </ul>
              </div>
            </div>
            
          </div>
        )}
      </div>

      {/* Primary & Standby 서버 설정 (합친 아코디언) */}
      <div className="bg-white border rounded-lg">
        <button
          onClick={() => setIsPrimarySetupVisible(!isPrimarySetupVisible)}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center space-x-2">
            <Server className="w-5 h-5 text-green-600" />
            <span className="font-medium">Primary & Standby 서버 설정</span>
          </div>
          {isPrimarySetupVisible ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        {isPrimarySetupVisible && (
          <div className="p-4 border-t bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Primary 설정 */}
              <div>
                <h4 className="font-semibold mb-2 text-green-700">Primary 서버 (1/6 인스턴스)</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-1">1. 복제 사용자 생성</h5>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`sudo -u postgres psql
CREATE USER replicator WITH REPLICATION ENCRYPTED PASSWORD 'replpass_password';
\\q`}
                    </pre>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">2. postgresql.conf 설정</h5>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`sudo vi /var/lib/pgsql/data/postgresql.conf

# 복제 설정
wal_level = replica
max_wal_senders = 3
wal_keep_size = 1GB
listen_addresses = '*'`}
                    </pre>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">3. pg_hba.conf 설정</h5>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`sudo vi /var/lib/pgsql/data/pg_hba.conf

# Standby 서버 접근 허용
host replication replicator 10.0.0.0/16 md5

sudo systemctl restart postgresql`}
                    </pre>
                  </div>
                </div>
              </div>
              {/* Standby 설정 */}
              <div>
                <h4 className="font-semibold mb-2 text-blue-700">Standby 서버 (1/1 인스턴스)</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-1">1. .pgpass 파일 생성</h5>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`sudo -u postgres bash -c 'echo "10.0.0.6:5432:*:replicator:replpass_password" > /var/lib/pgsql/.pgpass'
sudo -u postgres chmod 600 /var/lib/pgsql/.pgpass`}
                    </pre>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">2. Base Backup 실행</h5>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`sudo systemctl stop postgresql-17
sudo rm -rf /var/lib/pgsql/17/data/*

sudo -u postgres pg_basebackup \\
    -h 10.0.0.6 \\
    -U replicator \\
    -D /var/lib/pgsql/17/data \\
    -P \\
    --wal-method=stream \\
    --write-recovery-conf \\
    -v

sudo chmod 700 /var/lib/pgsql/17/data
sudo chown -R postgres:postgres /var/lib/pgsql/17/data
sudo systemctl start postgresql-17`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 복제 상태 확인 */}
      <div className="bg-white border rounded-lg">
        <button
          onClick={() => setIsVerificationVisible(!isVerificationVisible)}
          className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-purple-600" />
            <span className="font-medium">복제 상태 확인 및 검증</span>
          </div>
          {isVerificationVisible ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        {isVerificationVisible && (
          <div className="p-4 border-t bg-gray-50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Primary에서 확인</h4>
                <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`-- 복제 연결 상태 확인
SELECT client_addr, state, sync_state 
FROM pg_stat_replication;

-- 결과 :
-- 10.0.0.188 | streaming | async`}
                </pre>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Standby에서 확인</h4>
                <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`-- Standby 모드 확인
SELECT pg_is_in_recovery();
-- 결과: t (true)`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 결과 및 가치 (항상 보이게) */}
      <div className="bg-white border rounded-lg p-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-3">✅ 결과</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• PostgreSQL 17 스트리밍 복제 완성</li>
              <li>• 실시간 데이터 동기화 (1-5초 지연)</li>
              <li>• 실제 reservation 데이터 완벽 복제</li>
              <li>• 고가용성 아키텍처 구현</li>
              <li>• 장애 복구 시나리오 대응 가능</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-800 mb-3">🚀 가치</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 엔터프라이즈급 DB 아키텍처 경험</li>
              <li>• 읽기 부하 분산으로 성능 향상</li>
              <li>• 무중단 서비스 운영 가능</li>
              <li>• 실제 운영환경 표준 구조</li>
              <li>• 클라우드 인프라 설계 능력</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded border">
          <h4 className="font-semibold mb-3">복제 데이터 및 서버 구분 (실제 서비스)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary */}
            <div>
              <p className="mb-2 font-medium text-green-700">Primary 서버 (10.0.0.6)</p>
              <div className="rounded-lg overflow-hidden border border-gray-200 mb-2">
                <img src={postgres_main} alt="Primary 서버 IP 및 DB 결과" className="w-full" />
              </div>
            </div>
            {/* Standby */}
            <div>
              <p className="mb-2 font-medium text-blue-700">Standby 서버 (10.0.0.188)</p>
              <div className="rounded-lg overflow-hidden border border-gray-200 mb-2">
                <img src={postgres_stanby} alt="Standby 서버 IP 및 DB 결과" className="w-full" />
              </div>
            </div>
          </div>
          <div className="mt-4 text-green-700 font-semibold">
            ✅ Primary와 Standby 모두 동일한 데이터, 각 서버의 IP로 구분 가능함을 확인!
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default StudyContent;
