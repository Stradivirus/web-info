// src/components/study/DockerCompose.js
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import composeTime from '../../assets/images/project/Time.png';

export const StudyContent = ({ onImageClick, registerImages }) => {
  const [isBackendCodeVisible, setIsBackendCodeVisible] = useState(false);
  const [isJenkinsCodeVisible, setIsJenkinsCodeVisible] = useState(false);

  useEffect(() => {
    registerImages([composeTime]);
  }, [registerImages]);

  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-lg font-medium mb-3">리팩토링 배경</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>단일 docker-compose로 관리되던 전체 서비스의 배포 시간이 7분으로 길었음</li>
          <li>프론트엔드나 백엔드 일부만 변경되어도 전체 서비스가 재배포되는 비효율 발생</li>
          <li>서비스별 독립적인 배포와 관리 필요성 증가</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">구현 내용</h3>
        <div className="space-y-4 text-gray-600">
          <div>
            <h4 className="font-medium mb-2">Docker Compose 분리</h4>
            <div className="space-y-2 pl-4">
              <p>- Frontend: Nginx 로드밸런서와 3개의 프론트엔드 서버</p>
              <p>- Backend: Registration, Notification, Coupon 서비스</p>
              <p>- Infrastructure: DB, Admin, Monitoring 서비스</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Jenkins 파이프라인 개선</h4>
            <div className="space-y-2 pl-4">
              <p>- Git diff를 통한 변경 파일 감지</p>
              <p>- front/, nginx/ 변경 시 프론트엔드만 배포</p>
              <p>- back/ 변경 시 백엔드 서비스만 배포</p>
              <p>- 그 외 변경 시 인프라 서비스만 배포</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">주요 코드</h3>
        <div className="space-y-4">
          <div>
            <button
              onClick={() => setIsBackendCodeVisible(!isBackendCodeVisible)}
              className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-gray-600">docker-compose.backend.yml</span>
                </div>
                {isBackendCodeVisible ? 
                  <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                }
              </div>
            </button>
            {isBackendCodeVisible && (
              <div className="border-x border-b border-gray-200 rounded-b-lg">
                <pre className="p-4 overflow-x-auto bg-gray-50 rounded-b-lg">
                  <code className="text-sm font-mono text-gray-800">
{`services:
  backend:
    build:
      context: ./back/registration
      dockerfile: Dockerfile
    environment:
      DATABASE_URL: postgres://\${POSTGRES_USER}:\${POSTGRES_PASSWORD}@db:5432/\${POSTGRES_DB}
    networks:
      - app-network
    ports:
      - "8086:8086"

  notification:
    build:
      context: ./back/notification
      dockerfile: Dockerfile
    environment:
      SLACK_WEBHOOK_URL: \${SLACK_WEBHOOK_URL}
    networks:
      - app-network
    depends_on:
      - backend

  coupon:
    build:
      context: ./back/coupon
      dockerfile: Dockerfile
    environment:
      DATABASE_URL: postgres://\${POSTGRES_USER}:\${POSTGRES_PASSWORD}@db:5432/\${POSTGRES_DB}
    networks:
      - app-network
    ports:
      - "8085:8085"
    depends_on:
      - backend

networks:
  app-network:
  monitoring-network:
    external: true`}
                  </code>
                </pre>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setIsJenkinsCodeVisible(!isJenkinsCodeVisible)}
              className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-gray-600">Jenkinsfile</span>
                </div>
                {isJenkinsCodeVisible ? 
                  <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                }
              </div>
            </button>
            {isJenkinsCodeVisible && (
              <div className="border-x border-b border-gray-200 rounded-b-lg">
                <pre className="p-4 overflow-x-auto bg-gray-50 rounded-b-lg">
                  <code className="text-sm font-mono text-gray-800">
{`pipeline {
    agent any
    
    stages {
        stage('Check Changes') {
            steps {
                script {
                    def changes = sh(
                        script: "git diff --name-only HEAD^",
                        returnStdout: true
                    ).trim()
                    
                    env.FRONTEND_CHANGES = changes.contains('front/') || changes.contains('nginx/')
                    env.BACKEND_CHANGES = changes.contains('back/')
                }
            }
        }
        stage('Deploy Frontend') {
            when {
                expression { env.FRONTEND_CHANGES == 'true' }
            }
            steps {
                sh """
                    docker compose -f docker-compose.frontend.yml down
                    docker compose -f docker-compose.frontend.yml up -d --build --force-recreate
                """
            }
        }
        stage('Deploy Backend') {
            when {
                expression { env.BACKEND_CHANGES == 'true' }
            }
            steps {
                script {
                    sh """
                        docker compose -f docker-compose.backend.yml down
                        docker compose -f docker-compose.backend.yml up -d --build --force-recreate
                    """
                }
            }
        }
    }
}`}
                  </code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">개선된 점</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>서비스 배포 시간 대폭 단축 (7분 → 2-3분)</li>
          <li>변경된 부분만 선택적으로 배포하여 리소스 효율성 향상</li>
          <li>각 서비스의 독립적인 스케일링과 관리 가능</li>
          <li>배포 실패 시 영향 범위 최소화</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">배포 시간 개선 결과</h3>
        <div className="space-y-2">
          <div 
            className="w-1/2 rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
            onClick={() => onImageClick(0)}
          >
            <img 
              src={composeTime} 
              alt="Docker Compose 분리 후 배포 시간 단축" 
              className="w-full"
            />
          </div>
          <p className="text-sm text-gray-600">
            * Docker Compose 분리 후 각 서비스별 배포 시간이 크게 단축되었습니다.
          </p>
        </div>
      </section>
    </div>
  );
};