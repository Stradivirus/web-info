import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, Server, RefreshCw, FileCode, Clock, Activity } from 'lucide-react';
import { getRecordsImage } from '../../config/storage';

const nodesDashboard: string = getRecordsImage('jenkins_nodes.png');

const HighlightComments = (code: string) => {
  const parts = code.split(/(\/\/.*$)/m);
  return parts.map((part, i) => {
    if (part.startsWith('//')) {
      return <span key={i} className="text-emerald-400 italic font-medium">{part}</span>;
    }
    return part;
  });
};

export const StudyContent: React.FC = () => {
  const [isPipelineVisible, setIsPipelineVisible] = useState<boolean>(false);

  const jenkinsCode = String.raw`pipeline {
    agent { label 'built-in' }
    triggers {
        cron('0 18 1 * *')  // 매월 1일 KST 새벽 3시(UTC 18:00)
    }
    
    stages {
        stage('Initialize Process') {
            steps {
                echo "=== 전체 노드 시스템 관리 프로세스 시작 ==="
                echo "시작 시간: \${new Date()}"
                echo "작업 내용: 디스크 정리 → 노드 재시작 → 서비스 헬스체크"
            }
        }
        
        stage('System Cleanup - Caddy Node') {
            steps {
                script {
                    echo '=== STEP 1-A: Caddy 노드 디스크 정리 ==='
                    cleanupSystem('Caddy', '10.0.0.191')
                }
            }
        }
        
        stage('Restart Caddy Node') {
            steps {
                script {
                    echo '=== STEP 1-B: Caddy 노드 재시작 ==='
                    restartServer('Caddy', '10.0.0.191')
                }
            }
        }
        
        stage('Verify Caddy Services') {
            steps {
                script {
                    echo '=== STEP 1-C: Caddy 서비스 검증 ==='
                    verifyServices('Caddy', '10.0.0.191')
                }
            }
        }
        
        // Postgres Main 처리 (동일한 3단계)
        // Postgres Standby 처리 (재시도 로직 포함)
        
        stage('Final System Report') {
            steps {
                script {
                    echo '=== 전체 시스템 최종 상태 리포트 ==='
                    generateSystemReport()
                }
            }
        }
    }
    
    post {
        success {
            script {
                def endTime = new Date()
                echo "🎉 전체 노드 시스템 관리 프로세스 완료!"
                echo "완료 시간: \${endTime}"
                echo "다음 자동 실행: 다음 달 1일 새벽 3시"
            }
        }
        failure {
            echo "❌ 시스템 관리 프로세스 실패!"
            echo "수동 확인 방법: ssh rocky@[노드IP]"
        }
        always {
            echo "=== 시스템 관리 프로세스 로그 종료 ==="
            echo "실행 완료 시간: \${new Date()}"
        }
    }
}

// 핵심 함수들
def cleanupSystem(serverName, ipAddress) {
    echo "🧹 \${serverName} 시스템 정리 시작..."
    // 로그 파일, 임시 파일, 패키지 캐시 정리
    // PostgreSQL 전용 정리 (해당 노드인 경우)
}

def verifyServices(serverName, ipAddress) {
    echo "🔍 \${serverName} 서비스 상태 검증 시작..."
    // systemctl 상태 확인
    // 포트 리스닝 확인  
    // DB 복제 상태 확인 (PostgreSQL인 경우)
}`;

  return (
    <div className="space-y-12 py-4">
      {/* 0. 아키텍처 최적화 알림 */}
      <div className="bg-amber-50/50 border-l-4 border-amber-300 p-6 md:p-7 rounded-2xl shadow-sm flex items-start gap-4">
        <AlertTriangle className="w-7 h-7 text-amber-500 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <h4 className="text-xl font-bold text-slate-800">아키텍처 경량화 업데이트 알림 (2025.12)</h4>
            <span className="text-xs font-bold bg-amber-100/80 text-amber-800 px-2.5 py-0.5 rounded-full">Legacy v1 → Cron v2</span>
          </div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            본 문서는 초기 구축했던 <strong>Jenkins 멀티노드 오케스트레이션 파이프라인(v1)</strong> 기록입니다.
            이후 Oracle Cloud Free Tier의 RAM 리소스 한계를 극복하기 위해 상주 메모리를 차지하는 Jenkins Agent를 걷어내고,
            동일한 3단계 관리 로직을 <strong>OS 레벨 Crontab + Shell Script 경량 아키텍처(v2)</strong>로 이관하여 운영 중입니다.
          </p>
        </div>
      </div>

      {/* 1. 대상 인프라 및 스케줄 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <Server className="w-6 h-6 text-sky-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Managed Nodes &amp; Schedule</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-sky-600">Node 01 (Web)</span>
              <span className="font-mono text-sm text-slate-400">10.0.0.191</span>
            </div>
            <h4 className="font-bold text-slate-800 text-lg mb-1.5">Caddy Web Server</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">리버스 프록시, 정적 에셋 캐싱 및 SSL 인증서 자동 관리 노드 (1순위 처리)</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-emerald-600">Node 02 (Master DB)</span>
              <span className="font-mono text-sm text-slate-400">10.0.0.6</span>
            </div>
            <h4 className="font-bold text-slate-800 text-lg mb-1.5">PostgreSQL Primary</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">메인 읽기/쓰기 DB 서버 · 재시작 후 Standby 동기화를 위해 5분 대기 보장</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-purple-600">Node 03 (Replica DB)</span>
              <span className="font-mono text-sm text-slate-400">10.0.0.188</span>
            </div>
            <h4 className="font-bold text-slate-800 text-lg mb-1.5">PostgreSQL Standby</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">실시간 스트리밍 복제 DB · 복제 지연 검증 및 최대 2회 자동 재시도 적용</p>
          </div>
        </div>
      </section>

      {/* 2. 노드별 3단계 자동화 사이클 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <RefreshCw className="w-6 h-6 text-indigo-500" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">3-Step Maintenance Cycle</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80">
            <div className="inline-block px-3 py-1 rounded-lg bg-amber-50 border border-amber-200/60 text-amber-700 text-sm font-bold mb-3">
              STEP A · 디스크 및 캐시 정리
            </div>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• 오래된 시스템 로그 및 Journald(7일/100MB) 정리</li>
              <li>• 임시 파일 및 DNF 패키지 캐시 삭제</li>
              <li>• PostgreSQL WAL 아카이브 및 임시 파일 정리</li>
            </ul>
          </div>

          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80">
            <div className="inline-block px-3 py-1 rounded-lg bg-sky-50 border border-sky-200/60 text-sky-700 text-sm font-bold mb-3">
              STEP B · 순차적 노드 재부팅
            </div>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• Caddy → Primary DB → (5분 동기화) → Standby DB</li>
              <li>• 안전한 시스템 재부팅 및 SSH 온라인 복귀 대기</li>
              <li>• Standby 연결 실패 시 자동 재시도 메커니즘</li>
            </ul>
          </div>

          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80">
            <div className="inline-block px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-sm font-bold mb-3">
              STEP C · 헬스체크 &amp; 복제 검증
            </div>
            <ul className="text-sm md:text-base text-slate-600 space-y-2 leading-relaxed">
              <li>• <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200/60">systemctl is-active</code> 데몬 상태 확인</li>
              <li>• <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200/60">ss</code> 포트 리스닝 및 <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200/60">curl</code> 응답 검증</li>
              <li>• <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200/60">pg_stat_replication</code> 스트리밍 복제 무결성 확인</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Groovy 파이프라인 코드 */}
      <section>
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200/80 pb-3">
          <FileCode className="w-6 h-6 text-slate-600" />
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Declarative Pipeline Code</h3>
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
          <button
            type="button"
            onClick={() => setIsPipelineVisible(!isPipelineVisible)}
            className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileCode className="w-5 h-5 text-sky-400" />
              <span className="font-mono text-slate-200 text-sm md:text-base">Jenkinsfile (Multi-Node Scheduled Maintenance Pipeline)</span>
            </div>
            {isPipelineVisible ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
          </button>
          {isPipelineVisible && (
            <pre className="p-6 bg-slate-900 text-sm leading-relaxed text-slate-300 overflow-x-auto font-mono max-h-[520px]">
              <code>{HighlightComments(jenkinsCode)}</code>
            </pre>
          )}
        </div>
      </section>

      {/* 4. 실행 성과 및 모니터링 대시보드 */}
      <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Activity className="w-6 h-6 text-sky-500" />
            <h3 className="text-2xl font-bold text-slate-800">실제 운영 성과 및 노드 모니터링</h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50/70 border border-emerald-100 px-3.5 py-1.5 rounded-full font-bold">
            <Clock className="w-4 h-4" />
            매월 1일 03:00 KST 자동 실행 · 평균 14분 소요
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/70 text-center">
            <div className="text-xs font-bold text-slate-400 uppercase">수동 점검 시간 절감</div>
            <div className="text-xl md:text-2xl font-extrabold text-sky-600 mt-1">월 2시간 → 0분</div>
          </div>
          <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/70 text-center">
            <div className="text-xs font-bold text-slate-400 uppercase">디스크 공간 확보</div>
            <div className="text-xl md:text-2xl font-extrabold text-emerald-600 mt-1">노드당 ~100MB 정리</div>
          </div>
          <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/70 text-center">
            <div className="text-xs font-bold text-slate-400 uppercase">DB 복제 상태</div>
            <div className="text-xl md:text-2xl font-extrabold text-purple-600 mt-1">지연 0초 · 무결성 유지</div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
          <img
            src={nodesDashboard}
            alt="Jenkins 노드 모니터링 대시보드"
            className="w-full"
          />
        </div>
      </section>
    </div>
  );
};
export default StudyContent;