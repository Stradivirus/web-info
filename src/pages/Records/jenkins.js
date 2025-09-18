// src/pages/Records/jenkins.js
import React, { useState, useEffect } from 'react';
import { getRecordsImage } from '../../config/storage';

const nodesDashboard = getRecordsImage('jenkins_nodes.png');

export const StudyContent = ({ onImageClick, registerImages }) => {
  const [isPipelineVisible, setIsPipelineVisible] = useState(false);

  useEffect(() => {
    if (registerImages) {
      registerImages([nodesDashboard]);
    }
  }, [registerImages]);

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
    <div className="space-y-6">
      {/* 제목 */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Jenkins 멀티노드 인프라 자동화 시스템
          </h2>
          <p className="text-gray-600 mb-4">
            Oracle Cloud 환경에서 3개 인스턴스를 통합 관리하는 엔터프라이즈급 자동화 파이프라인
          </p>
        </div>
      </section>

      {/* 1. 프로젝트 개요 - 항상 보임 */}
      <section>
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
          <h3 className="font-semibold text-blue-800 mb-4">📋 프로젝트 개요</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">🎯 목적</h4>
              <p className="text-gray-600">
                Oracle Cloud 환경의 3개 인스턴스(Caddy 웹서버, PostgreSQL Primary/Standby)에 대한 
                <strong className="text-blue-600"> 월간 정기 시스템 관리 자동화</strong>
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">🏗️ 인프라 구성</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li><strong>Caddy 서버</strong> (10.0.0.191): 웹서버 및 SSL 자동 관리</li>
                <li><strong>PostgreSQL Primary</strong> (10.0.0.6): 메인 데이터베이스</li>
                <li><strong>PostgreSQL Standby</strong> (10.0.0.188): 실시간 복제 DB</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">⏰ 실행 스케줄</h4>
              <p className="text-gray-600">
                매월 1일 <strong className="text-green-600">새벽 3시(KST)</strong> 자동 실행
                <span className="text-sm text-gray-500 ml-2">(크론: 0 18 1 * *)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 시스템 아키텍처 - 항상 보임 */}
      <section>
        <div className="bg-green-50 rounded-lg border border-green-200 p-6">
          <h3 className="font-semibold text-green-800 mb-4">🏛️ 시스템 아키텍처 & 처리 순서</h3>
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 mb-3">🔄 3단계 처리 사이클 (노드별)</h4>
            
            <div className="bg-white p-4 rounded-lg border border-green-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg font-semibold">
                    STEP A: 디스크 정리
                  </div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• 로그 파일 정리</li>
                    <li>• 임시 파일 삭제</li>
                    <li>• 패키지 캐시 정리</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg font-semibold">
                    STEP B: 노드 재시작
                  </div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• 안전한 시스템 재부팅</li>
                    <li>• 온라인 대기 (3분)</li>
                    <li>• 재시도 로직 (Standby)</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg font-semibold">
                    STEP C: 서비스 검증
                  </div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• systemctl 상태 확인</li>
                    <li>• 포트 리스닝 확인</li>
                    <li>• DB 복제 상태 확인</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-800 mb-2">📋 처리 순서 및 안전장치</h4>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600">
              <li><strong>Caddy 웹서버</strong> 처리 → 사용자 영향 최소화 우선</li>
              <li><strong>PostgreSQL Primary</strong> 처리 → 메인 DB 안정화</li>
              <li><strong>5분 대기</strong> → Primary-Standby 복제 동기화 시간 확보</li>
              <li><strong>PostgreSQL Standby</strong> 처리 → 복제 DB 처리 (재시도 로직)</li>
              <li><strong>최종 리포트</strong> → 전체 시스템 상태 요약</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 3. 파이프라인 코드 - 아코디언 */}
      <section>
        <button
          onClick={() => setIsPipelineVisible(!isPipelineVisible)}
          className="w-full bg-purple-50 hover:bg-purple-100 rounded-t-lg border border-purple-200 p-4 text-left transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-purple-800">💻 Jenkinsfile 파이프라인 코드</span>
            <span className="text-purple-600">{isPipelineVisible ? '▲' : '▼'}</span>
          </div>
        </button>
        {isPipelineVisible ? (
          <div className="border-x border-b border-purple-200 rounded-b-lg bg-white">
            <div className="p-4 bg-gray-100 border-b border-purple-200">
              <p className="text-sm text-gray-600">
                <strong>전체 약 200줄</strong>의 Groovy 스크립트로 구성된 엔터프라이즈급 파이프라인
              </p>
            </div>
            <pre className="p-4 overflow-x-auto bg-gray-900 text-gray-100 rounded-b-lg">
              <code className="text-sm font-mono whitespace-pre">
                {jenkinsCode}
              </code>
            </pre>
          </div>
        ) : (
          <div className="border-x border-b border-purple-200 rounded-b-lg bg-purple-50 p-4">
            <p className="text-purple-700 text-center">클릭하여 전체 파이프라인 코드 보기</p>
          </div>
        )}
      </section>

      {/* 4. 핵심 기능 - 항상 보임 */}
      <section>
        <div className="bg-orange-50 rounded-lg border border-orange-200 p-6">
          <h3 className="font-semibold text-orange-800 mb-4">⚙️ 핵심 기능 & 기술적 특징</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🛡️ 고가용성 보장</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li><strong>PostgreSQL 복제 고려</strong>: Primary → Standby 순서 처리</li>
                <li><strong>5분 동기화 대기</strong>: 복제 무결성 보장</li>
                <li><strong>재시도 로직</strong>: Standby DB 2회 재시도</li>
                <li><strong>단계별 검증</strong>: 각 노드 처리 후 상태 확인</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🔧 시스템 최적화</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li><strong>디스크 정리</strong>: 로그, 임시파일, 패키지 캐시</li>
                <li><strong>메모리 정리</strong>: 시스템 캐시 드롭</li>
                <li><strong>Journald 관리</strong>: 7일/100MB 크기 제한</li>
                <li><strong>PostgreSQL 전용 정리</strong>: WAL 로그, 임시파일</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">📊 모니터링 & 검증</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li><strong>서비스 상태</strong>: systemctl active 확인</li>
                <li><strong>포트 리스닝</strong>: ss 명령어로 포트 확인</li>
                <li><strong>DB 복제 상태</strong>: pg_stat_replication 조회</li>
                <li><strong>HTTP 응답 테스트</strong>: curl로 웹서비스 확인</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🚨 장애 대응</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li><strong>타임아웃 설정</strong>: SSH 연결 시간 제한</li>
                <li><strong>예외 처리</strong>: try-catch 블록으로 오류 격리</li>
                <li><strong>수동 복구 가이드</strong>: 실패 시 점검 방법 제시</li>
                <li><strong>상세 로깅</strong>: 각 단계별 시간 및 상태 기록</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 실행 결과 - 항상 보임 */}
      <section>
        <div className="bg-red-50 rounded-lg border border-red-200 p-6">
          <h3 className="font-semibold text-red-800 mb-4">🎯 실제 운영 결과 & 성과</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">✅ 성공적인 실행 결과 (2025.09.01)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-gray-700">실행 시간</strong>
                  <p className="text-gray-600">총 14분 소요<br/>(예상 30분보다 빠름)</p>
                </div>
                <div>
                  <strong className="text-gray-700">디스크 정리 효과</strong>
                  <p className="text-gray-600">노드당 96-55개 파일<br/>약 100MB 공간 확보</p>
                </div>
                <div>
                  <strong className="text-gray-700">서비스 상태</strong>
                  <p className="text-gray-600">모든 서비스 정상<br/>복제 지연 없음</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">📈 운영 개선 효과</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li><strong>자동화 효율성</strong>: 수동 작업 시간 월 2시간 → 0분</li>
                <li><strong>시스템 안정성</strong>: 정기적 디스크 정리로 용량 부족 방지</li>
                <li><strong>장애 예방</strong>: 월간 헬스체크로 잠재적 문제 조기 발견</li>
                <li><strong>복제 무결성</strong>: Primary-Standby 동기화 상태 정기 점검</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">🔧 기술적 성취</h4>
              <p className="text-gray-700 text-sm">
                단순한 <strong>"시스템 재시작"</strong>에서 시작하여 
                <strong className="text-blue-600"> 엔터프라이즈급 인프라 자동화 시스템</strong>으로 발전
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 text-sm">
                <li>멀티 노드 환경에서의 순차적 처리 및 의존성 관리</li>
                <li>데이터베이스 복제 환경을 고려한 안전한 재시작 로직</li>
                <li>포괄적인 시스템 헬스체크 및 장애 복구 메커니즘</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 스크린샷 - 마지막에 배치 */}
      <section>
        <h3 className="text-lg font-medium mb-3 text-gray-800">📸 Jenkins 노드 모니터링 대시보드</h3>
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <img 
            src={nodesDashboard} 
            alt="Jenkins 노드 모니터링 대시보드" 
            className="w-full cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onImageClick && onImageClick(nodesDashboard)}
          />
        </div>
      </section>
    </div>
  );
};
